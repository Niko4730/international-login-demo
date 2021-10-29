import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginUser} from "../shared/login-user.model";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
      ]
    ),
    password: new FormControl('', Validators.required),
  });

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
  }
  get username(){ return this.loginForm.get('username');}
  get password(){return this.loginForm.get('password')}

  login() {
    let loginInfo = this.loginForm.value as LoginUser;
    this._auth.login(loginInfo);
    console.log('loginInfo', loginInfo)
  }
}
