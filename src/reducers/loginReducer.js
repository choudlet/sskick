import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state= initialState.currentUser, action) {
  switch(action.type) {
    case types.ATTEMPT_FACEBOOK_LOGIN:
      return action.currentUser;
  default:
    return state;
}
}
