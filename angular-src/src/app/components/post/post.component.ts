import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
post:Object;

  constructor(private postService:PostService, private activatedRoute:ActivatedRoute) { }

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

}
