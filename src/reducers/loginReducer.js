import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function currentUser(state=initialState, action) {
  switch(action.type) {
    case types.FB_LOGIN_SUCCESS:
      return Object.assign({}, state, action.userData)
    case types.EMAIL_CREATE_SUCCESS:
      return Object.assign({}, state,action.userData)
    case types.EMAIL_LOG_SUCCESS:
      return Object.assign({},state,action.userData)
    case types.LOG_OUT_USER:
    return Object.assign({}, state, {})
  default:
    return state;
}
}
