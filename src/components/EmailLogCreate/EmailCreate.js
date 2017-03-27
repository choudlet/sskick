import React, {Component} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import NavBar from ''

export default class EmailCreate extends Component {


  render() {
    return (
      <View>
      <NavBar navigator={this.props.navigator} />
      <Image
        source={require('../../assets/images/stadium.jpg')}
        style={emailStyles.containerImage}
        >
        <Text>Please Enter Your Info</Text>
        <TextInput></TextInput>
        <TextInput></TextInput>

      </Image>
      </View>
    )
  }
}
