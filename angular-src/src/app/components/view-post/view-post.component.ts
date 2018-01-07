import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PostService } from '../../services/post.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
post: object;
id: number;
title: string;
body: string;
author: string;
authorUsername: string;
createDate: Date;
tags: [string];
tagsString: string;
loggedInUsername: string;
userMatches: boolean;
fieldsEditable: boolean;

  constructor(private postService:PostService,
    private activatedRoute:ActivatedRoute,
    private validateService:ValidateService,
    private flashMessagesService:FlashMessagesService,
    private router:Router) { }

  ngOnInit() {
    let username = JSON.parse(localStorage.getItem('user')).username;    
        
    this.activatedRoute.params.subscribe((params: Params) => {
      let paramId = params['id'];
      
      this.postService.getById(paramId).subscribe(data =>{                
        this.post = data;
        this.title = data.title;
        this.createDate = data.createDate;
        this.body = data.body;        
        this.author = data.author;
        this.authorUsername = data.authorUsername;
        this.tagsString = data.tags.join(',');
        this.userMatches = this.loggedInUsername = data.authorUsername;
        this.fieldsEditable = false;
        this.id = paramId;    

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
  }

  onEditPostSubmit(){

    let tagsArray = [];
    if(this.tagsString){
      tagsArray = this.tagsString.split(',');
    }            
    
    const post = {
      id: this.id,
      title: this.title,
      body: this.body,    
      author: this.author,
      authorUsername: this.authorUsername,      
      createDate: this.createDate,
      tags: tagsArray
    };    
      
    //Check required fields
    if(!this.validateService.validateCreatePost(post)){
      this.flashMessagesService.show('Please fill in all fields.', { cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //Validate author username
    this.postService.validatePostAuthorUsername(post.authorUsername).subscribe(data => {      
      if(!data.isFound){
        this.flashMessagesService.show('Please enter a valid author username.', { cssClass: 'alert-danger', timeout: 3000});
        return false;
      }
      else{                    
          this.postService.updatePost(post).subscribe(data =>{
                                            
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
