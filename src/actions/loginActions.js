import * as types from './actionTypes';
import {LoginManager} from 'react-native-fbsdk';
import {
    beginAjaxCall,
    ajaxCallSuccess
} from './ajaxStatusActions';
import serverPath from '../config/devProd.js'
import {AsyncStorage} from 'react-native';

export function FBLogInSuccess(userData) {
    return {
        type: types.FB_LOGIN_SUCCESS,
        userData
    }
}

export function emailCreateSuccess(userData) {
  return {type:types.EMAIL_CREATE_SUCCESS,
          userData}
}



export function FBLogInRequest(fbAccessData) {
    return function(dispatch) {
        dispatch(beginAjaxCall())
        return fetch(`${serverPath}FBLogAttempt`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fbAccessData
            })
        }).then((response) => {
            response.json()
                .then((data) => {
                    dispatch(ajaxCallSuccess());
                    dispatch(FBLogInSuccess(data));
                })
        })
    }
}

export function emailCreateAttempt(userFormData) {
  return function(dispatch) {
  dispatch(beginAjaxCall())
  return fetch(`${serverPath}emailLogAttempt`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        userFormData
    })
  }).then(response=>{
    response.json()
    .then(data=>{
      console.log(data);
      dispatch(ajaxCallSuccess());
      dispatch(emailCreateSuccess(data))
      return data
    })
  })
}
}

export function emailLogAttempt(userData) {
  console.log(userData);
}

export function logOutUser(currentUser) {
//BUILD OUT
}
