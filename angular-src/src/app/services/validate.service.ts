import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ValidateService {

  constructor(private http:Http) { }

  validateRegister(user){
    if((user.name == undefined || user.name === '') || 
      (user.username == undefined || user.username === '') ||
      (user.email == undefined || user.email === '') ||
      (user.password == undefined || user.password === '')){
        return false;
    }
    else{
      return true;
    }
  }


  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  validateLogin(user){
    if((user.username == undefined || user.username === '') || 
        (user.password == undefined || user.password === '')){
      return false;
  }
  else{
    return true;
  }

  }

  validateCreatePost(post){
    if((post.title == undefined || post.title === '') || 
    (post.body == undefined || post.body === '') ||
    (post.author == undefined || post.author === '') ||
    (post.authorUsername == undefined || post.authorUsername === '') ||
    (post.createDate == undefined || post.createDate === '')){
      return false;
    }
    else{
      return true;
    }
  }
}