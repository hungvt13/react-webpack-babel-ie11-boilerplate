import counterReducer from './counter';
import loggedReducer from './counter';
import usersReducer from './usersReducer';

import {combineReducers} from 'redux';

export default combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  userData: usersReducer
});

