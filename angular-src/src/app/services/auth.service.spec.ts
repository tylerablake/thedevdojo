import { TestBed, inject } from '@angular/core/testing';
import { Http, Headers } from '@angular/http';
import { AuthService } from './auth.service';


describe('AuthService', () => {
  let http: Http;
  let service = new AuthService(http);
  let token = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';
  let user = {
    name: 'Tyler',
    username: 'tyler',
    email: 'tyler@email.com',
    password: 'password'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, Http]
    });  
  });

//StoreUserData 
  it('storeUserData() populates localStorage token', function(){
    service.storeUserData(token,user);

    expect(localStorage.getItem('id_token')).toBeTruthy();  
  });

  it('storeUserData() populates localStorage user', function(){
    service.storeUserData(token,user);

    expect(localStorage.getItem('user')).toBeTruthy();
  });
  
//Logout
  it('logout() clears localStorage token', function(){
    localStorage.setItem('id_token', token);

    service.logout();

    expect(localStorage.getItem('id_token')).toBeFalsy();
  });

  it('logout() clears localStorage user', function(){
    localStorage.setItem('user', JSON.stringify(user));

    service.logout();

    expect(localStorage.getItem('user')).toBeFalsy();
  });

//LoadToken
  it('loadtoken() sets token property when localStorage has token', function(){
    localStorage.setItem('id_token', token);

    service.loadToken();

    expect(service.authToken).toBeTruthy();
  });

  it('loadtoken() does not set token property when localStorage does not have token', function(){    
    service.logout();

    service.loadToken();

    expect(service.authToken).toBeFalsy();
  });

//Loggedin
  it('loggedIn() returns true if user is logged in', function(){
    localStorage.setItem('id_token', token);

    expect(service.loggedIn()).toBeTruthy();
  });

  it('loggedIn() returns false if user is not logged in', function(){
    service.logout();

    expect(service.loggedIn()).toBeFalsy();
  });

});