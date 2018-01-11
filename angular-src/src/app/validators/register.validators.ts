import {AbstractControl } from '@angular/forms';


export class RegisterValidators{
    static checkEmailIsValid(control: AbstractControl){
        const email = control.get('email').value;

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = re.test(email);

        return isValid;
    
    }
}