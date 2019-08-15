import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {AuthSharedService} from "../../services/shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  authError: EventEmitter<any>;
  constructor(private authService: AuthService, private sharedService: AuthSharedService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailAddress: [''],
      password: [''],
      loginType: ['']
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.authService.login({
        emailAddress: this.f.emailAddress.value,
        password: this.f.password.value,
        loginType: 1 // Set primary UserType
      }
    ).subscribe(success => {
        if (success) {
          this.router.navigate(['/account']);
        } else {
          this.authError = this.sharedService.authErrorMsg
          // console.log(this.sharedService.authErrorLogger)
        }
      });
  }

}
