import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import emailStyles from './EmailStyle'
import Toast from 'react-native-simple-toast';
import {connect} from 'react-redux'
import Spinner from 'react-native-spinkit';
import * as loginActions from '../../actions/loginActions';
import TutorialPlayer from '../TutorialPlayer/TutorialPlayer'

class EmailCreate extends Component {

    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            password2: null,
            displayName: null,
            feedbackMSG: null,
            formComplete: false
        }
    }

    transitionToTutorial() {
      this.props.navigator.push({
        component: TutorialPlayer,
        navigationBarHidden:true,
        passProps: {
          showNavModal: this.props.showNavModal
        }

    });
  }
    submitUserInfo() {
        if (!this.state.email || !this.state.password || !this.state.displayName || !this.state.password2) {
            this.setState({feedbackMSG: 'Please Enter All Fields'})

        } else if (this.state.password != this.state.password2) {
            this.setState({feedbackMSG: 'Passwords do not match'})
        } else if (!(/^\S+@\S+\.\S+$/).test(this.state.email)) {
            this.setState({feedbackMSG: 'Not a valid Email'})
        } else if (this.state.email || this.state.password || this.state.displayName || this.state.password2) {
            this.setState({feedbackMSG: 'Creating Account', formComplete: true})

        }

        Toast.show(this.state.feedbackMSG)
        if (this.state.formComplete) {
            let userObj = {
                email: this.state.email,
                password: this.state.password,
                displayName: this.state.displayName
            }
            console.log(userObj)
            this.props.emailCreateAttempt(userObj)
              this.transitionToTutorial()
        }
    }

    goBack() {
      this.props.navigator.pop();
    }

    render() {
        return (
            <Image source={require('../../assets/images/stadium.jpg')} style={emailStyles.containerImage}>
                <View style={emailStyles.darkenBox}>
                    <View style={emailStyles.mainContent}>
                        <View style={{
                            flex: 1
                        }}>
                            <Text style={emailStyles.headerText}>Please Enter Your Info</Text>
                            <View style={{
                                justifyContent: 'space-around',
                                alignItems: 'center'
                            }}>
                                <TextInput ref='email' placeholder="Enter Email" placeholderTextColor='#C7CACD' editable={true} keyboardType='default' returnKeyType='next' keyboardShouldPersistTaps={true} value={this.state.email} onChangeText={(email) => {
                                    this.setState({email})
                                }} onSubmitEditing={() => {
                                    this.refs.password.focus()
                                }} style={emailStyles.textInput}></TextInput>
                                <TextInput ref='password' placeholder="Enter Password" placeholderTextColor='#C7CACD' returnKeyType='next' secureTextEntry={true} onChangeText={(password) => {
                                    this.setState({password})
                                }} keyboardShouldPersistTaps={true} onSubmitEditing={() => {
                                    this.refs.password.focus()
                                }} style={emailStyles.textInput}></TextInput>
                                <TextInput ref='password2' placeholder="Re-Enter Password" placeholderTextColor='#C7CACD' returnKeyType='next' secureTextEntry={true} onChangeText={(password2) => {
                                    this.setState({password2})
                                }} keyboardShouldPersistTaps={true} onSubmitEditing={() => {
                                    this.refs.password.focus()
                                }} style={emailStyles.textInput}></TextInput>
                                <TextInput ref='name' onChangeText={(displayName) => {
                                    this.setState({displayName})
                                }} placeholder="Enter Name" returnKeyType='done' placeholderTextColor='#C7CACD' onSubmitEditing={() => {
                                    this.submitUserInfo()
                                }} style={emailStyles.textInput}></TextInput>
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
                                        this.submitUserInfo()
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
        emailCreateAttempt: (data) => {
            console.log('Running from props')
            dispatch(loginActions.emailCreateAttempt(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailCreate)
