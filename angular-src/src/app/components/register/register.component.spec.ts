import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('register form is filled validation catches missing username', function(){
  //   let user = {
  //     name: 'Tyler',
  //     username: null,
  //     email: 'tyler@email.com',
  //     password: 'password'
  //   };
  //   let registerMethodResult = component.(user);
  //   expect().toBe(false)
  // })

});
