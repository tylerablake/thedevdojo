import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-post-list-by-tag',
  templateUrl: './post-list-by-tag.component.html',
  styleUrls: ['./post-list-by-tag.component.css']
})
export class PostListByTagComponent implements OnInit {
postList:[Object];

  constructor(private postService:PostService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      
      let paramTag = params['tag'];

      this.postService.getPostsLikeTag(paramTag).subscribe(data =>{            
        this.postList = data.posts;
        return data;      
      },
      error =>{
        console.log(error);
        return false;
      });
    });
  }

}
