import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import NavBar from '../shared/NavBar'
import emailStyles from './EmailStyle'

export default class EmailCreate extends Component {

  constructor() {
    super();
    this.state = {
      email:null,
      password:null,
      displayName:null
    }
  }


submitUserInfo() {
  console.log('INFOINFOINFO');
}

  render() {
    return (
      <Image
        source={require('../../assets/images/stadium.jpg')}
        style={emailStyles.containerImage}
        >
        <View style={emailStyles.darkenBox}>
      <NavBar navigator={this.props.navigator} />
      <View style={emailStyles.mainContent}>
        <View style={{flex:1}}>
        <Text style={emailStyles.headerText}>Please Enter Your Info</Text>
        <View style={{justifyContent:'center', alignItems:'center'}}>
        <TextInput
            ref='email'
           placeholder="Enter Email"
           placeholderTextColor='white'
           editable={true}
           keyboardType='default'
           returnKeyType='next'
           keyboardShouldPersistTaps={true}
           value={this.state.email}
           onChangeText={(email)=>{this.setState({email:email})}}
           onSubmitEditing={()=>{this.refs.password.focus()}}
          style={emailStyles.textInput}></TextInput>
        <TextInput
          ref='password'
           placeholder="Enter Password"
           placeholderTextColor='white'
           returnKeyType='next'
           secureTextEntry={true}
           keyboardShouldPersistTaps={true}
          onSubmitEditing={()=>{this.refs.password.focus()}}
          style={emailStyles.textInput}></TextInput>
          <TextInput
            ref='name'
             placeholder="Enter Name"
             returnKeyType='done'
             placeholderTextColor='white'
             onSubmitEditing={()=>{this.submitUserInfo()}}
            style={emailStyles.textInput}></TextInput>
      </View>
      </View>
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <View style={emailStyles.borderLine}></View>
      </View>
        <View style={{flex:1, justifyContent:'flex-start', alignItems:'center'}}>
        <View style={emailStyles.buttonBorder}>
        <TouchableOpacity>
          <Text style={emailStyles.buttonText}
            onPress={()=>{this.submitUserInfo()}}
            >Submit Information</Text>
        </TouchableOpacity>
      </View>
        </View>
        </View>
        </View>
      </Image>
    )
  }
}
