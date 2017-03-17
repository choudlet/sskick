import { combineReducers } from "redux";
import loginReducer from './loginReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
  loginReducer,
  ajaxStatusReducer

});

export default rootReducer;
