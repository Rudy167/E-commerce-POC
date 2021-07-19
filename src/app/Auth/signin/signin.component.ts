import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {AppState} from '../../core/store/state/app.state';
import { LogIn } from '../store/action/auth.action';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
signinForm: FormGroup;
  constructor(private fb : FormBuilder, private store: Store<AppState>) { 
    this.signinForm=this.fb.group({
name:['',Validators.required],
password:['',Validators.required],
    });
  }

  ngOnInit() {
  }
  onSubmit(): void {
    const payload = {
     name: this.signinForm.get('name').value,
     password: this.signinForm.get('password').value
    
    };
    this.store.dispatch(new LogIn(payload));
  }

}
