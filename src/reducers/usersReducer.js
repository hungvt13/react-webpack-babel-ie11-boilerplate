import {FETCH_USERS_BEGIN, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, ADD_USER_TO_LIST, CLEAR_USER_DATA} from '../actions';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function usersReducer (state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      console.log('heree');
      
      console.log(state.items);
      
      return {
        ...state,
        loading: true,
        error: null,
        items: state.items
      };

    case FETCH_USERS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        items: [...state.items, ...action.payload].map((user, index) => {
          return {id: index + 1, name: user.name}
        })
      };

    case FETCH_USERS_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: {
          code: action.payload.status,
        },
        items: []
      };

    case ADD_USER_TO_LIST:
      const lastItemIndex = state.items.length + 1; 
      return {
        ...state,
        items: [
          ...state.items,
          ...[{id: lastItemIndex, name: action.payload}]
        ]
      };

    case CLEAR_USER_DATA:
      return initialState;

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}

export const getUsers = state => state.users;
export const getUsersPending = state => state.loading;
export const getUsersError = state => state.error;