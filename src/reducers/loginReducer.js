import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function currentUser(state= initialState.currentUser, action) {
  console.log(action);
  switch(action.type) {
    case types.FACEBOOK_LOGIN_SUCCESS:
      return [
        ...state,
        Object.assign({},
          {currentUser: action.userData})
      ]
    case types.EMAIL_CREATE_SUCCESS:
      return [
        ...state,
        Object.assign({}, {currentUser:action.userData})
      ]
  default:
    return state;
}
}
