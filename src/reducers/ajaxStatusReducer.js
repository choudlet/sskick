import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type == types.AJAX_CALL_ERROR || action.type == types.AJAX_CALL_SUCCESS) {
    return state - 1;
  } else
  return state;
}
