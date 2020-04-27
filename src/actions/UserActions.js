export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const ADD_USER_TO_LIST = 'ADD_USER_TO_LIST';
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';


export const fetchUsersBegin = () => {
  return {
    type: FETCH_USERS_BEGIN
  }
}

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export const addUserToList = (user) => {  
  return {
    type: ADD_USER_TO_LIST,
    payload: user
  }
}

export const clearUserData = () => {  
  return {
    type: CLEAR_USER_DATA,
  }
}