import { combineReducers } from "redux";
import currentUser from './loginReducer';
import numberAjax from './ajaxStatusReducer';

const rootReducer = combineReducers({
  currentUser,
  numberAjax
});

export default rootReducer;
