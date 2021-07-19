import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';


import { AuthService } from '../api/auth.service';
import { Observable, of } from 'rxjs';

import { LogIn, AuthActionTypes, LogInSuccess, LogInFailure, SignUp, SignUpSuccess, SignUpFailure } from '../action/auth.action';
import { map, switchMap, catchError, tap } from 'rxjs/operators';


@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
  ) { }

  @Effect()
  LogIn: Observable<any> = this.actions.pipe(ofType(AuthActionTypes.LOGIN)
    , map((action: LogIn) => action.payload),
    switchMap(payload => {
  
      return this.authService.loginUser(payload)
        .pipe(map((user) => {
 
          return new LogInSuccess({ token: user.token, name: payload.name });

        }),
          catchError((error) => {
            console.log(error);
            return of(new LogInFailure({ error: error }));
          })

        );
    })
  );
  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/signup');
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  );




  @Effect()
  SignUp: Observable<any> = this.actions.pipe(ofType(AuthActionTypes.SIGNUP)
    , map((action: SignUp) => action.payload),
    switchMap(payload => {
  
      return this.authService.registerUser(payload)
        .pipe(map((user) => {
 
          return new SignUpSuccess({ token: user.token, name: payload.name });

        }),
          catchError((error) => {
            console.log(error);
            return of(new SignUpFailure({ error: error }));
          })

        );
    })
  );
  @Effect({ dispatch: false })
  SignUpSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/');
      alert("signupsuccess");
    })
  );

  @Effect({ dispatch: false })
SignUpFailure: Observable<any> = this.actions.pipe(
  ofType(AuthActionTypes.SIGNUP_FAILURE)
);
  
}