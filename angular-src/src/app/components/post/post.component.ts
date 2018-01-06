import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PostService } from '../../services/post.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
post:Object;
title: string;
body: string;
authorUsername: string;
createDate: Date;
tagsString: string;

  constructor(private postService:PostService,
              private validateService:ValidateService,
              private flashMessagesService:FlashMessagesService,
              private router:Router) { }

  ngOnInit() {
  }

  onCreatePostSubmit(){

    let tagsArray = [];
    if(this.tagsString){
      tagsArray = this.tagsString.split(',');
    }    
    
    const post = {
      title: this.title,
      body: this.body,    
      authorUsername: this.authorUsername,      
      createDate: new Date(),
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
          //Create Post
          this.postService.createPost(post).subscribe(data =>{      
            if(data.success){        
              this.flashMessagesService.show('Your post has been created!', { cssClass: 'alert-success', timeout: 3000});
              this.router.navigate(['/posts']);
            }
            else{
              this.flashMessagesService.show('Unable to create your post, please try again later.', { cssClass: 'alert-danger', timeout: 3000});
              this.router.navigate(['/posts/create']);       
            }
          });
      }
    });
  }
}