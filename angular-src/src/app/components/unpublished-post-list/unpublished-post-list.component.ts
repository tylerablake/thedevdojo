import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-unpublished-post-list',
  templateUrl: './unpublished-post-list.component.html',
  styleUrls: ['./unpublished-post-list.component.css']
})
export class UnpublishedPostListComponent implements OnInit {
postList:[Object];

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getUnpublishedPosts().subscribe(data =>{            
      this.postList = data;
      return data;      
    },
  error =>{
    console.log(error);
    return false;
  });
  }
}
