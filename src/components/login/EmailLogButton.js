import React, {Component} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import loginStyles from './loginStyle'
export default class EmailLogButton extends Component {


  render() {
    return (
      <TouchableHighlight onPress={() => this.props.triggerEmailLogin()} style={{borderColor:'white', borderWidth:1, height:80, width:300}}>
          <View style={loginStyles.centeredRow}>
            <View style={loginStyles.alignText}>
            <Icon name="envelope" size={30} color="white"/>
            <Text style={{color:'white'}}>  Log In with Email</Text>
            </View>
        </View>
      </TouchableHighlight>
    );
  }
};
