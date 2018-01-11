//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { PostListByTagComponent } from './components/post-list-by-tag/post-list-by-tag.component';
import { UnpublishedPostListComponent } from './components/unpublished-post-list/unpublished-post-list.component';

//Services
import { ValidateService } from './services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';

//Guards
import { AuthGuard } from './guards/auth.guard';


//Validators
import { RegisterValidators } from './validators/register.validators';

import { environment } from '../environments/environment';



//Routes
const appRoutes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'login',component: LoginComponent},
  {path: 'dashboard',component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'profile',component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'settings',component: SettingsComponent},
  {path: 'posts', component: PostListComponent},  
  {path: 'posts/unpublished', component: UnpublishedPostListComponent},  
  {path: 'posts/create', component: PostComponent},
  {path: 'posts/:id', component: ViewPostComponent},
  {path: 'posts/tag/:tag', component: PostListByTagComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent,
    PostComponent,
    PostListComponent,
    ViewPostComponent,
    PostListByTagComponent,
    UnpublishedPostListComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    ReactiveFormsModule
  ],
  providers: [ValidateService, FlashMessagesService, AuthService, AuthGuard, PostService],
  bootstrap: [AppComponent]
})

export class AppModule { }
