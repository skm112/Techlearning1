import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-practice',
  templateUrl: './form-practice.component.html',
  styleUrls: ['./form-practice.component.css']
})
export class FormPracticeComponent implements OnInit {

  constructor( private builder:FormBuilder) {

   }
   userName=new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(8)]);
   userPassword=new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(12)]);
  userEmail = new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]);
  userCity = new FormControl(null, [Validators.required, Validators.minLength(5)]);


   loginForm:FormGroup=this.builder.group({
     username:this.userName,
     password:this.userPassword,
     usercity:this.userCity,
     useremail:this.userEmail
   })
   login(){
     console.log(this.loginForm.value);
     this.loginForm.reset()
   }
 
  ngOnInit() {
  }

}
