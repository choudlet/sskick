import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import NavBar from '../shared/NavBar';

export default class DrillLaunch extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {


    return (
      <View>
      <NavBar></NavBar>
      <View>
        <Text>LOL</Text>
      </View>
    </View>
    )
  }
}
