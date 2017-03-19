import React, {Component} from 'React';
import {View, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import navBarStyles from './navBarStyle';

export default class NavBar extends Component {

  goBack() {
    this.props.navigator.pop()
  }

  render() {

    return (
      <View style={navBarStyles.navBar}>
      <View style={navBarStyles.container}>
        <TouchableHighlight onPress={()=>{this.goBack()}}>
      <Icon name="arrow-left" size={30} style={navBarStyles.arrow}/>
      </TouchableHighlight>

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
