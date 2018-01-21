import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-unpublished-post-list',
  templateUrl: './unpublished-post-list.component.html',
  styleUrls: ['./unpublished-post-list.component.css']
})
export class UnpublishedPostListComponent implements OnInit {
postList:[Post];
userIsAdmin:boolean;
  constructor(private postService:PostService) { }

  ngOnInit() {
    const currentUserIsAdmin = JSON.parse(localStorage.getItem('user')).isAdmin;
    this.userIsAdmin = currentUserIsAdmin;
    this.postService.getUnpublishedPosts().subscribe(data =>{            
      this.postList = data;
      return data;      
    },
  error =>{
    return false;
  });
  }
}
