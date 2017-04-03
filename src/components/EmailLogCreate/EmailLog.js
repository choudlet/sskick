import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import NavBar from '../shared/NavBar'
import emailStyles from './EmailStyle'
import Toast from 'react-native-simple-toast';
import {connect} from 'react-redux'
import Spinner from 'react-native-spinkit';
import * as loginActions from '../../actions/loginActions';
import TutorialPlayer from '../TutorialPlayer/TutorialPlayer'


class EmailLog extends Component {

  constructor() {
    super()
    this.state = {
      email:null,
      password:null,
      feedbackMSG:null,
      formComplete:false
    }
  }

  goBack() {
    this.props.navigator.pop();
  }

  submitLogin() {
    if (!this.state.email || !this.state.password) {
        this.setState({feedbackMSG: 'Please Enter All Fields'})
      } else if (!(/^\S+@\S+\.\S+$/).test(this.state.email)) {
        this.setState({feedbackMSG: 'Not a valid Email'})
    } else if (this.state.email || this.state.password) {
        this.setState({feedbackMSG: 'Creating Account', formComplete: true})

    }

    Toast.show(this.state.feedbackMSG)
    if (this.state.formComplete) {
        let userObj = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.emailLogAttempt(userObj)
          //this.transitionToTutorial()
    }
  }

  render() {
    return(
      <Image source={require('../../assets/images/stadium.jpg')} style={emailStyles.containerImage}>
          <View style={emailStyles.darkenBox}>
              <View style={emailStyles.mainContent}>
                  <View style={{
                      flex: 1,
                      alignItems:'center'
                  }}>
                      <Text style={emailStyles.headerText}>Please Login</Text>
                      <View style={{
                          justifyContent: 'space-around',
                          alignItems: 'center'
                      }}>
                          <TextInput ref='email' placeholder="Enter Email" placeholderTextColor='#C7CACD' editable={true} keyboardType='default' returnKeyType='next' keyboardShouldPersistTaps={true} value={this.state.email} onChangeText={(email) => {
                              this.setState({email})
                          }} onSubmitEditing={() => {
                              this.refs.password.focus()
                          }} style={emailStyles.logInput}></TextInput>
                          <TextInput ref='password' placeholder="Enter Password" placeholderTextColor='#C7CACD' returnKeyType='next' secureTextEntry={true} onChangeText={(password) => {
                              this.setState({password})
                          }} keyboardShouldPersistTaps={true} onSubmitEditing={() => {
                              this.refs.password.focus()
                          }} style={emailStyles.logInput}></TextInput>
                      </View>
                  </View>
                  <View style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center'
                  }}>
                      {this.props.numberAjax != 0
                          ? <Spinner color='#64AE20' style="Wave" size={30}></Spinner>
                          : <View style={emailStyles.borderLine}></View>}
                  </View>
                  <View style={{
                      flex: 1,
                      justifyContent: 'flex-start',
                      alignItems: 'center'
                  }}>
                      <View style={emailStyles.buttonBorder}>
                          <TouchableOpacity>
                              <Text style={emailStyles.buttonText} onPress={() => {
                                  this.submitLogin()
                              }}>Submit Information</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                  <TouchableOpacity onPress={()=>{this.goBack()}}style={{marginBottom:'10%'}}><Text style={{color:'white'}}>Go Back</Text></TouchableOpacity>
              </View>
          </View>
      </Image>
    )
  }

}

const mapStateToProps = (state) => {
    return {currentUser: state.currentUser, numberAjax: state.numberAjax}
}

const mapDispatchToProps = (dispatch) => {
    return {
        emailLogAttempt: (data) => {
          return dispatch(loginActions.emailLogAttempt(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailLog)
