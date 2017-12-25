import { TestBed, ComponentFixture, inject } from '@angular/core/testing';

import { ValidateService } from './validate.service';
import { validateConfig } from '@angular/router/src/config';

describe('ValidateService', () => {
  let service = new ValidateService();
  
  let incompleteUser = {
    name: 'Tyler',
    username: null,
    email: 'tyler@email.com',
    password: 'password'
  };

  let emptyStringUser = {
    name: 'Tyler',
    username: '',
    email: 'tyler@email.com',
    password: 'password'
  }

  let completeUser = {
    name: 'Tyler',
    username: 'tyler',
    email: 'tyler@email.com',
    password: 'password'
  };

  let invalidEmail = 'tyler.com';
  let emptyStringEmail = '';
  let validEmail = 'tyler@email.com';

  let incompleteLogin = {
    username: null,
    password: 'password'
  };

  let emptyStringLogin = {
    username: '',
    password: 'password'
  };

  let completeLogin = {
    username: 'tyler',
    password: 'password'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({      
      providers: [ValidateService]
    });
    
  });

//Validate Register
  it('ValidateRegister() returns false if missing data', function(){
    expect(service.validateRegister(incompleteUser)).toBeFalsy();
  });

  it('ValidateRegister() returns false if passed empty string data', function(){
    expect(service.validateRegister(emptyStringUser)).toBeFalsy();
  });

  it('ValidateRegister() returns true if not missing data', function(){
    expect(service.validateRegister(completeUser)).toBeTruthy();
  });

//Validate Email
  it('validateEmail() returns false if passed null email', function(){
    expect(service.validateEmail(null)).toBeFalsy();
  });

  it('validateEmail() returns false if invalid email', function(){
    expect(service.validateEmail(invalidEmail)).toBeFalsy();
  });

  it('validateEmail() returns false if passed empty string data', function(){
    expect(service.validateEmail(emptyStringEmail)).toBeFalsy();
  });

  it('validateEmail() returns true if valid email', function(){
    expect(service.validateEmail(validEmail)).toBeTruthy();
  });

//Validate Login
  it('validateLogin() returns false if missing data', function(){
    expect(service.validateLogin(incompleteLogin)).toBeFalsy();
  });

  it('validateLogin() returns false if passed empty string data', function(){
    expect(service.validateLogin(emptyStringLogin)).toBeFalsy();
  });

  it('validateLogin() returns false if not missing data', function(){
    expect(service.validateLogin(completeLogin)).toBeTruthy();
  });
});
