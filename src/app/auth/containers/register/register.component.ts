import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {AuthSharedService} from "../../services/shared.service";
import {Router} from "@angular/router";
import {ValidationService} from "../../services/validation.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  regError;
  constructor(private authService: AuthService,
              private sharedService: AuthSharedService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, ValidationService.emailValidator]],
      cellphone: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
      confirmPassword: ['', [Validators.required, ValidationService.passwordValidator]],
      accountTypeId: ['']
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  register() {
    console.log({
      username: this.f.username.value,
      cellphone: this.f.cellphone.value,
      password: this.f.password.value,
      confirmPassword: this.f.confirmPassword.value,
      accountTypeId: 1,
    })
    this.authService.register({
        username: this.f.username.value,
        cellphone: '0' + this.f.cellphone.value,
        password: this.f.password.value,
        confirmPassword: this.f.confirmPassword.value,
        accountTypeId: 1,
      }
    ).subscribe(success => {
      if (success) {
        alert('You have successfully registered a new account with ParlourSoft, you are being redirected to login.')
        this.router.navigate(['/login']);
      } else {
        this.regError = 'You have encountered errors registering new account, please check your form submissions.'
      }
    });
  }

}
