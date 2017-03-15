import React, {Component, PropTypes} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import loginStyles from './loginStyle'

export default class EmailCreateButton extends Component {


  render() {
    return (
      <TouchableHighlight onPress={() => this.props.triggerEmailAccountCreate()} style={{borderColor:'white', borderWidth:1, height:80, width:300}}>
          <View style={loginStyles.centeredRow}>
            <View style={loginStyles.alignText}>
            <Icon name="envelope" size={30} color="white"/>
            <Text style={{color:'white'}}>  Create Account with Email </Text>
            </View>
        </View>
      </TouchableHighlight>
    );
  }
};

EmailCreateButton.propTypes = {
  triggerEmailAccountCreate: PropTypes.func.isRequired
}
