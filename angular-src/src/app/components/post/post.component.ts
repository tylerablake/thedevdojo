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
author: string;
authorUsername: string;
createDate: Date;

  constructor(private postService:PostService,
              private activatedRoute:ActivatedRoute,
              private validateService:ValidateService,
              private flashMessagesService:FlashMessagesService,
              private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let paramId = params['id'];

      this.postService.getById(paramId).subscribe(data =>{
        this.post = data;
        return data;      
      },
    error =>{
      console.log(error);
      return false;
    });
    });
  }

  onCreatePostSubmit(){
    const post = {
      title: this.title,
      body: this.body,
      author: this.author,
      authorUsername: this.authorUsername,
      createDate: new Date()
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
    });

    //Create Post
    this.postService.createPost(post).subscribe(data =>{
      console.log('createPost subscribe data =');
      console.log(data);
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
  
}
