import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../Auth/store/api/auth.service';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects } from '../Auth/store/effect/auth.effect';
import { StoreModule } from '@ngrx/store';
import {reducers } from '../core/store/reducers/app.reducer';
@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    AngularFontAwesomeModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
    ReactiveFormsModule,
   FormsModule,
   HttpClientModule,
  
  
  ],
  exports:[SignupComponent],
  providers: [AuthService],

})
export class AuthModule { }
