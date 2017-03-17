import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state= initialState.currentUser, action) {
  switch(action.type) {
    case types.FACEBOOK_LOGIN_SUCCESS:
      return [
        ...state,
        Object.assign({},action.userData)
      ]
  default:
    return state;
}
}
