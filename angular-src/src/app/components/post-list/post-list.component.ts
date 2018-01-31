import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';  

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList:[Post];
  userIsAdmin:boolean;
  constructor(private postService:PostService) { }

  ngOnInit() {
    const currentUserIsAdmin = JSON.parse(localStorage.getItem('user')).isAdmin;
    this.userIsAdmin = currentUserIsAdmin;
    this.postService.getPublishedPosts().subscribe(data =>{      
      this.postList = data;
      return data;      
    },
  error =>{
    return false;
  });
  }

}
