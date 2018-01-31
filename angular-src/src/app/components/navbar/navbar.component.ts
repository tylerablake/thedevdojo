import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
usersName : string;

  constructor(public authService:AuthService,
    private router:Router,
    private flashMessagesService:FlashMessagesService) {}

  ngOnInit() {  
    this.authService.getLoggedInName.subscribe(name => this.updateUserName(name));  
  }  

  updateUserName(name){
    this.usersName = name;
    }

  onLogoutClick(){
    this.authService.logout();
    this.usersName = "";
    this.flashMessagesService.show('You have been logged out.', {cssClass:'alert-success', timeout: 3000});    
    this.router.navigate(['/login']);
    return false;
  }
}
