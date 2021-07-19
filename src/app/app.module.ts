import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { reducers} from './core/store/reducers/app.reducer';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './+home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Auth/signup/signup.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { SearchDialogComponent } from './core/search-dialog/search-dialog.component';
import { CartDialogComponent } from './core/cart-dialog/cart-dialog.component';
import {MaterialModule} from './material/material.module';
import { AuthModule } from './Auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from '../app/Auth/store/effect/auth.effect';
import { ControlErrorComponent } from './core/directives/error-component';
import { FormSubmitDirective } from './core/directives/form-submit.directive';
import { ControlErrorsDirective } from './core/directives/validation.directive';

@NgModule({
  declarations: [
    AppComponent,FormSubmitDirective,ControlErrorsDirective
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    CoreModule,
    SharedModule,
    HomeModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers,{} ),
    EffectsModule.forRoot([AuthEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SigninComponent,SearchDialogComponent,CartDialogComponent],
})
export class AppModule { }
