import * as types from './actionTypes';
import serverPath from '../config/devProd';

export function createLeaderEntry(data) {

  return function(dispatch) {
    return fetch(`${serverPath}leaderboard/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data})
    }).then((response) => {
        return response.json().then((data) => {
        return data
  })
})

}
}
