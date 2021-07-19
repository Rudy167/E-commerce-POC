import { State } from '../reducer/auth.reducer';

export const initialState: State = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
  };