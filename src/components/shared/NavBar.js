import React, {Component} from 'React';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import navBarStyles from './navBarStyle';

export default class NavBar extends Component {

  render() {

    return (
      <View style={navBarStyles.navBar}>
      <View style={navBarStyles.container}>
      <Icon name="arrow-left" size={30} style={navBarStyles.arrow}/>
      </View>
      <View style={navBarStyles.container}>
        <Text style={navBarStyles.textStyle}>Player</Text>
        </View>
        <View style={navBarStyles.container}>
      <Icon name="futbol-o" size={30} style={navBarStyles.soccer}/>
      </View>
      </View>
    )
  }
}
