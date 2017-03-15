import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import FBLogButton from './FBLogButton';
import EmailLogButton from './EmailLogButton';
import EmailCreateButton from './EmailCreateButton';
import loginStyles from './loginStyle';
import FBSDKCore from 'react-native-fbsdk';
var {AccessToken, LoginManager} = FBSDKCore
import {connect} from 'react-redux';
import * as loginActions from '../../actions/loginActions'


 class LoginView extends Component {

  triggerEmailLogin() {

}

  triggerEmailAccountCreate() {
    console.log('Attempting Account Create')
  }

  triggerFBSignIn() {
    console.log('Attempting FB Sign In')
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then((result) => {
    if (result.isCancelled) {
      //SET ERROR HANDLING
    } else {
        console.log(result);
        AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data);
                    this.props.FBLogInRequest(data)
                  }
                )
    }
  },
  function(error) {
    //SET ERROR HANDLING
  }
);
  }

  render() {
    return (
      <Image
        style={loginStyles.containerImage}
        source={require('../../assets/images/SoccerBackground.jpg')}
        >
        <View style={loginStyles.colorContainer}>
          <View style={{flex:2}}>
            <View style={loginStyles.centerBox}>
              <Text style={{fontFamily:'Octin Sports', fontSize: 30, color:'white'}}>Login</Text>
            </View>
          </View>
          <View style={{flex:2}}>
            <View style={loginStyles.centerBox}>
            <FBLogButton triggerFBSignIn={this.triggerFBSignIn.bind(this)}></FBLogButton>
            </View>
            <View style={loginStyles.centerBox}>
              <EmailLogButton triggerEmailLogin={this.triggerEmailLogin}></EmailLogButton>
            </View>
            <View style={loginStyles.centerBox}>
              <EmailCreateButton triggerEmailAccountCreate={this.triggerEmailAccountCreate}></EmailCreateButton>
            </View>
          </View>
          <View style={{flex:1}}></View>
        </View>
        </Image>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    FBLogInRequest: (data) => {
      console.log('Running from props')
      dispatch(loginActions.FBLogInRequest(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
