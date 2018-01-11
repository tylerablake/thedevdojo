import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string;
login: FormGroup;

  constructor(private authService:AuthService,
              private router:Router,
              private flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
    this.login = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)  
    });
  }

  onLoginSubmit(login, valid){    
    this.authService.authenticateUser(login.value).subscribe(data => {
      if(!data.success){
        this.flashMessagesService.show(data.message, { cssClass: 'alert-danger', timeout: 5000}); 
        this.router.navigate(['login']);  
      }
      else{
        this.authService.storeUserData(data.token, data.user);
        this.flashMessagesService.show('Welcome ' + data.user.username + '!', { cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/dashboard']);  
      }
    });
  }
}
