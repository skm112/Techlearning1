import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { User1 } from '../common/model/user1';

@Component({
  selector: "app-form-user",
  templateUrl: "./form-user.component.html",
  styleUrls: ["./form-user.component.css"]
})
export class FormUserComponent implements OnInit {
  userObj: User1;
  arrUser: User1[];

  constructor(private builder: FormBuilder) {
    this.userObj = new User1();
    this.arrUser = [];
    console.log(this.arrUser);
  }
  userName = new FormControl(null, [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(8)
  ]);
  userPassword = new FormControl(null, [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(12)
  ]);
  userEmail = new FormControl(null, [
    Validators.required,
    Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
  ]);
  userCity = new FormControl(null, [
    Validators.required,
    Validators.minLength(5)
  ]);

  loginForm: FormGroup = this.builder.group({
    username: this.userName,
    password: this.userPassword,
    usercity: this.userCity,
    useremail: this.userEmail
  });
  login() {
    console.log('login');
    console.log(this.loginForm.value);
    this.arrUser.push(this.loginForm.value);
    console.log(this.arrUser);

    this.loginForm.reset();
  }

  ngOnInit() {}
}
