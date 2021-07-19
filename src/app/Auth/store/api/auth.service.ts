import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IUser } from '../../shared/models/user'
import { throwError, Observable, of } from 'rxjs';
import { catchError, retry, shareReplay } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private BASE_URL = 'http://localhost:1337';
  SignupAuthUrl = 'localhost/users/me';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }
  //method to register users
  registerUser(user: IUser) :Observable <IUser> {
    const url = `${this.BASE_URL}/register`;
   return  this.http.post<IUser>(url, user,this.httpOptions)
      .pipe(
        catchError(this.handleError('registerUser', user)),
      );
  }
  //method to login users
  loginUser(payload) :  Observable <any>{
    const url = `${this.BASE_URL}/login`;
    return this.http.post<IUser>(url,payload,this.httpOptions)
      .pipe(
        catchError(this.handleError('loginUser',  payload )), shareReplay()
      );

  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  log(arg0: string) {
    throw new Error(arg0);
  }


}
