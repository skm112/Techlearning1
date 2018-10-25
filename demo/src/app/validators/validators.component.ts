import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validateNumber, ageRangeValidator, ageRange } from "./customvalidator";
@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {

  constructor(private builder: FormBuilder) { }


  age = new FormControl(null, [Validators.required, validateNumber, ageRange(12, 24)]);
  loginForm: FormGroup = this.builder.group({
    age: this.age
  })










  ngOnInit() {
  }

}
