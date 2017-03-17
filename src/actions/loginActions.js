import * as types from './actionTypes';
import {LoginManager} from 'react-native-fbsdk';
import {beginAjaxCall, ajaxCallSuccess} from './ajaxStatusActions';
import serverPath from '../config/devProd.js'

export function FBLogInSuccess(userData) {
  return {type: types.FB_LOGIN_SUCCESS, userData}
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
                  dispatch(ajaxCallSuccess())
                  dispatch(FBLogInSuccess(data))
                })
        })
}
}
