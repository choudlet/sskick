import * as types from './actionTypes';
import {
    LoginManager
} from 'react-native-fbsdk';
import {
    beginAjaxCall,
    ajaxCallSuccess
} from './ajaxStatusActions';
import serverPath from '../config/devProd.js'
import {
    AsyncStorage
} from 'react-native';

export function FBLogInSuccess(userData) {
  console.log(userData);
    return {
        type: types.FB_LOGIN_SUCCESS,
        userData
    }
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
                    try {
                         AsyncStorage.setItem('@SSKickStorage:currentUser', data.id.toString());
                    } catch (error) {
                        console.log('Could Not Store');
                    }
                })
        })
    }
}

export function logOutUser(currentUser) {
  return {type:types.LOG_OUT_USER, currentUser}
}
