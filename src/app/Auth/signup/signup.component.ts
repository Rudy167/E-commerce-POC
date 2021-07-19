import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/state/app.state';
import { SignUp } from '../store/action/auth.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder,private store: Store<AppState>) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      pincode: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
      country: ['', Validators.required],
      region: ['', Validators.required],


    });
  }

  ngOnInit() {
  }
  onSubmit(): void {
    // const payload = {
    //  name: this.signupForm.get('firstName').value,
    //  password: this.signupForm.get('password').value,
 
      
    // };
    // this.store.dispatch(new SignUp(payload));
  }

}
