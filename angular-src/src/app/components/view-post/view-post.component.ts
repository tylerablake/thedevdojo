import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PostService } from '../../services/post.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
post: FormGroup;
id: number;
title: string;
body: string;
public bodyHtml: string;
author: string;
authorUsername: string;
createDate: Date;
tags: [string];
tagsString: string;
loggedInUsername: string;
userMatches: boolean;
fieldsEditable: boolean;
isPublished: boolean;
userIsAdmin: boolean;

  constructor(private postService:PostService,
    private activatedRoute:ActivatedRoute,
    private validateService:ValidateService,
    private flashMessagesService:FlashMessagesService,
    private router:Router) { }

  ngOnInit() {
    if(!JSON.parse(localStorage.getItem('user'))){      
      this.userMatches = false;
      this.loggedInUsername = '';
      this.userIsAdmin = false;
    }
    else{
      let currentUser = JSON.parse(localStorage.getItem('user'));      
      this.loggedInUsername = currentUser.username; 
      this.userIsAdmin = currentUser.isAdmin;
    }    
        

    this.activatedRoute.params.subscribe((params: Params) => {      
      let paramId = params['id'];
      
      this.postService.getById(paramId).subscribe(data =>{
        this.bodyHtml = data.body;
        this.post = new FormGroup({
          id: new FormControl(paramId),
          title: new FormControl({value: data.title, disabled: true }, Validators.required),
          body: new FormControl({value: data.body, disabled: true }, Validators.required),
          bodyHtml: new FormControl({value: data.body, disabled: true }),
          author: new FormControl({value: data.author, disabled: true }, Validators.required),
          authorUsername: new FormControl({value: data.authorUsername, disabled: true }, Validators.required),
          createDate: new FormControl(data.createDate),
          updateDate: new FormControl(data.updateDate),
          tags: new FormControl({value: data.tags, disabled: true }),
          fieldsEditable: new FormControl(false),
          isPublished: new FormControl({value: data.isPublished || false, disabled: true }),
          userMatches: new FormControl(this.loggedInUsername === data.authorUsername)
        });   
        return data;      
      },
      error =>{
        console.log(error);
        return false;
      });
    });
  }

  toggleEdit(){
    this.fieldsEditable = !this.fieldsEditable;
    if(this.fieldsEditable){
      this.post.get('title').enable();
      this.post.get('body').enable();
      this.post.get('author').enable();
      this.post.get('tags').enable();
      this.post.get('isPublished').enable();    
      this.post.get('authorUsername').enable();      
    }
    else{
      this.post.get('title').disable();
      this.post.get('body').disable();
      this.post.get('author').disable();
      this.post.get('tags').disable();
      this.post.get('isPublished').disable();
      this.post.get('authorUsername').disable(); 
    }
    
  }

  onEditPostSubmit(post){            
      
    this.postService.validatePostAuthorUsername(post.value.authorUsername).subscribe(data => {      
      if(!data.isFound){
        this.flashMessagesService.show('Please enter a valid author username.', { cssClass: 'alert-danger', timeout: 3000});
        return false;
      }
      else{                    
          this.postService.updatePost(post.value).subscribe(data =>{
                                            
            if(data.success){                      
              this.flashMessagesService.show('Your post has been updated!', { cssClass: 'alert-success', timeout: 3000});
              this.router.navigate(['/posts', this.id ]);
            }
            else{
              this.flashMessagesService.show('Unable to update your post, please try again later.', { cssClass: 'alert-danger', timeout: 3000});
              this.router.navigate(['/posts', this.id]);                  
            }
        });
      }
    });
  }

}
