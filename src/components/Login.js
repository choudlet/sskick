import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../styles/style.js'
// const FBSDK = require('react-native-fbsdk');
// const {
//   LoginButton,
//   AccessToken
// } = FBSDK;

export default class Login extends Component {
  render() {
    return (
      <Image
        style={styles.containerImage}
        source={require('../assets/images/SoccerBackground.jpg')}
        >
        <View style={styles.colorContainer}>

        </View>
        </Image>
    )
  }
}


// var Login = React.createClass({
//   render: function() {
//     return (
//       <View>
//         <LoginButton
//           publishPermissions={["publish_actions"]}
//           onLoginFinished={
//             (error, result) => {
//               if (error) {
//                 alert("login has error: " + result.error);
//               } else if (result.isCancelled) {
//                 alert("login is cancelled.");
//               } else {
//                 AccessToken.getCurrentAccessToken().then(
//                   (data) => {
//                     alert(data.accessToken.toString())
//                   }
//                 )
//               }
//             }
//           }
//           onLogoutFinished={() => alert("logout.")}/>
//       </View>
//     );
//   }
// });
