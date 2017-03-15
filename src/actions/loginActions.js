import * as types from './actionTypes';
import {LoginManager} from 'react-native-fbsdk';
import serverPath from '../config/devProd.js'

export function FBLogInRequest(fbAccessData) {
  return function(dispatch) {
    console.log('RUNNING from actions');
    fetch(`${serverPath}FBLogAttempt`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fbAccessData
      })
    })
  }
}
