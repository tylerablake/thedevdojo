import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
user:User;

  constructor(private authService:AuthService,
              private router:Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(data =>{
      this.user = data.user;
    },
  error =>{
    return false;
  });
  }



}
