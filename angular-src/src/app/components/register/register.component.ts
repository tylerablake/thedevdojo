import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterValidators } from '../../validators/register.validators';

@Component({
  selector: 'app-register',  
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  password: string;
  user:FormGroup;
  emailRegex:RegExp;

  constructor(private flashMessagesService:FlashMessagesService,
              private authService:AuthService,
              private router:Router) {
   }

  ngOnInit() {
    this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.user = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
      password: new FormControl('', Validators.required),  
    });
  }

  onRegisterSubmit(user, valid){

    this.authService.registerUser(user).subscribe(data =>{
      if(data.success){
        this.flashMessagesService.show('User has been registered and can log in.', { cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      }
      else{
        this.flashMessagesService.show('Unable to register user, please try again later.', { cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });
  }
}