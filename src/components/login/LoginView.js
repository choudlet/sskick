import React, {Component} from 'react';
import {Text, View, Image, Modal} from 'react-native';
import FBLogButton from './FBLogButton';
import EmailLogButton from './EmailLogButton';
import EmailCreateButton from './EmailCreateButton';
import loginStyles from './loginStyle';
import FBSDKCore from 'react-native-fbsdk';
var {AccessToken, LoginManager} = FBSDKCore
import {connect} from 'react-redux';
import * as loginActions from '../../actions/loginActions'
import Spinner from 'react-native-spinkit'
import TutorialPlayer from '../TutorialPlayer/TutorialPlayer';
import EmailCreate from '../EmailLogCreate/EmailCreate';

 class LoginView extends Component {


   transitionToTutorial() {
     this.props.navigator.push({
       component: TutorialPlayer,
       navigationBarHidden:true,
       passProps: {
         showNavModal: this.props.showNavModal
       }

     })
   }

   transitionToEmailCreate() {
     this.props.navigator.push({
       component: EmailCreate,
       navigationBarHidden:true,
       passProps: {
         showNavModal: this.props.showNavModal
       }
     })
   }

  triggerEmailLogin() {
    console.log('Trying Email Login')
}

  triggerEmailAccountCreate() {
    console.log('Attempting Account Create')
    this.transitionToEmailCreate();

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
                    this.props.FBLogInRequest(data)
                     this.transitionToTutorial()
                  }
                )
    }
  },
  function(error) {
    //SET ERROR HANDLING
  }
);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    return (
      <Image
        style={loginStyles.containerImage}
        source={require('../../assets/images/SoccerBackground.jpg')}
        >
        {this.props.numberAjax!=0&&<View style={{zIndex:5, marginLeft:'5%', backgroundColor:'transparent'}}><Spinner color='#64AE20'></Spinner></View>}
        <View style={loginStyles.colorContainer}>
          <View style={{flex:2, alignItems:'center', justifyContent:'center'}}>
            <View style={loginStyles.centerBox}>
              <Text style={{fontFamily:'Octin Sports', fontSize: 30, color:'white'}}>Login</Text>
            </View>
            <View style={loginStyles.borderLine}></View>
          </View>
          <View style={{flex:2}}>
            <View style={loginStyles.centerBox}>
            <FBLogButton triggerFBSignIn={this.triggerFBSignIn.bind(this)}></FBLogButton>
            </View>
            <View style={loginStyles.centerBox}>
              <EmailLogButton triggerEmailLogin={this.triggerEmailLogin.bind(this)}></EmailLogButton>
            </View>
            <View style={loginStyles.centerBox}>
              <EmailCreateButton triggerEmailAccountCreate={this.triggerEmailAccountCreate.bind(this)}></EmailCreateButton>
            </View>
          </View>
          <View style={{flex:1}}>
          </View>
        </View>

        </Image>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    numberAjax: state.numberAjax

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
