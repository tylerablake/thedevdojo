import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(private validateService:ValidateService, 
              private flashMessagesService:FlashMessagesService,
              private authService:AuthService,
              private router:Router) {
   }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    };

    //Check required fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessagesService.show('Please fill in all fields.', { cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //Check email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessagesService.show('Please enter a valid email.', { cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //Register user
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
