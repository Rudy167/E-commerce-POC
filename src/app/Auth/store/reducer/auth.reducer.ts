import  { IUser } from '../../shared/models/user';
import {initialState} from '../state/app.state';
import { All, AuthActionTypes } from '../action/auth.action';
export interface State {
    // is a user authenticated?
    isAuthenticated: boolean;
    // if authenticated, there should be a user object
    user: IUser | null;
    // error message
    errorMessage: string | null;
  }


  export function authReducer(state = initialState, action: All): State {

    switch (action.type) {
      case AuthActionTypes.LOGIN_SUCCESS: {
    
        return {
          ...state,
          isAuthenticated: true,
          user: {
            token: action.payload.token,
            name: action.payload.name
          },
          errorMessage: null
        };
     
      }
      case AuthActionTypes.LOGIN_FAILURE: {
       
        return {
          ...state,
          errorMessage: 'Incorrect email and/or password.'
        };
      }
      case AuthActionTypes.SIGNUP_SUCCESS: {
    
        return {
          ...state,
          isAuthenticated: true,
          user: {
            token: action.payload.token,
            name: action.payload.name
          },
          errorMessage: null
        };
     
      }
      case AuthActionTypes.LOGIN_FAILURE: {
       
        return {
          ...state,
          errorMessage: 'That email is already in use.'
        };
      }
      
      default: {
        return state;
      }
    }
  }