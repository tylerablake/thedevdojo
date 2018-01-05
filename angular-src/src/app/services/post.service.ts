import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { useAnimation } from '@angular/core/src/animation/dsl';
import { tokenNotExpired } from 'angular2-jwt';
import { environment } from '../../environments/environment';


@Injectable()
export class PostService {

  constructor(private http:Http) { }

  getPosts(){
      let headers = new Headers();
      headers.append('Content-Type', 'Application/json');
      return this.http.get(environment.apiUrl + 'posts/', {headers: headers})
      .map(res => res.json());    
  }  

  getById(id){    
    let headers = new Headers();
    headers.append('Content-Type', 'Application/json');
    return this.http.get(environment.apiUrl + 'posts/' + id, {headers: headers})
    .map(res => res.json());
  }

  getPostsLikeTag(tag){
    let headers = new Headers();
    headers.append('Content-Type', 'Application/json');
    return this.http.get(environment.apiUrl + 'posts/tag/' + tag, {headers: headers})
    .map(res => res.json());
  }

  createPost(post){
    let headers = new Headers();
    headers.append('Content-Type', 'Application/json');
    return this.http.post(environment.apiUrl + 'posts/create', post, {headers: headers})
    .map(res => res.json());
  }

  validatePostAuthorUsername(authorUsername){
    let headers = new Headers();
    headers.append('Content-Type', 'Application/json');
    return this.http.get(environment.apiUrl + 'users/checkPostAuthor?authorUsername=' + authorUsername, {headers: headers})
    .map(res => res.json());
  }
}
