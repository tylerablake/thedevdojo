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
post: Object;
title: string;
body: string;
author: string;
authorUsername: string;
createDate: Date;
tags: [String];

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
        this.title = data.title;
        this.body = data.body;        
        this.author = data.author;
        this.authorUsername = data.authorUsername;
        this.tags = data.tags;
        return data;      
      },
      error =>{
        console.log(error);
        return false;
      });
    });
  }

}
