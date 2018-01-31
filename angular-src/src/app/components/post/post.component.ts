import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PostService } from '../../services/post.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/Rx';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
post: FormGroup;
title: string;
body: string;
authorUsername: string;
createDate: Date;
updateDate: Date;
tagsString: string;


  constructor(private postService:PostService,
              private validateService:ValidateService,
              private flashMessagesService:FlashMessagesService,
              private router:Router) { }

  ngOnInit() {
    this.post = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
      authorUsername: new FormControl('', Validators.required),
      createDate: new FormControl(new Date()),
      updateDate: new FormControl(new Date()),
      tags: new FormControl('')
    });
  }

  onCreatePostSubmit(post){    
    if(post.invalid){
      return false;
    }
    //Validate author username
    this.postService.validatePostAuthorUsername(post.value.authorUsername).subscribe(data => {      
      if(!data.isFound){
        this.flashMessagesService.show('Please enter a valid author username.', { cssClass: 'alert-danger', timeout: 3000});
        return false;
      }
      else{
          //Create Post
          this.postService.createPost(post.value).subscribe(data =>{      
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