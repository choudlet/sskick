import React, {Component} from 'React';
import {View, Text, TouchableHighlight, Picker, PickerIOS, Modal, Image, Dimensions,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import navBarStyles from './navBarStyle';

export default class NavBar extends Component {

  goBack() {
    this.props.navigator.pop()
  }

componentWillMount() {
  console.log(this.props);
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
          <TouchableHighlight onPress={()=>this.props.showNavModal()}>
      <Icon name="futbol-o" size={30} style={navBarStyles.soccer}/>
      </TouchableHighlight>

      </View>
      </View>
    )

}


  }
