import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList:[Object];
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(data =>{      
      this.postList = data;
      return data;      
    },
  error =>{
    console.log(error);
    return false;
  });
  }

}
