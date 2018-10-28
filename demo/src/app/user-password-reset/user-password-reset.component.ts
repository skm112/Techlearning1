import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { AlertService } from '../service/alert.service';
import { first } from 'rxjs/operators';
import { PasswordValidation } from '../validators/customvalidator';
// import { checkPasswords } from '../validators/customvalidator';

@Component({
  selector: 'app-user-password-reset',
  templateUrl: './user-password-reset.component.html',
  styleUrls: ['./user-password-reset.component.css']
})
export class UserPasswordResetComponent implements OnInit {
  resetForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      oldpass: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPass: ['', [Validators.required, Validators.minLength(6)]],
    }, {
        validator: PasswordValidation.MatchPassword // your validation method
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.resetPass(this.resetForm.value).pipe(first()).subscribe(data => {
      console.log(data);

      this.router.navigate(['/product']);
    },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });




  }

}
