import React, {Component} from 'react';
import {View,Text} from 'react-native';
import NavBar from '../shared/NavBar'
import Timer from '../shared/timer'

export default class DrillRun extends Component {


  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <View>
      <NavBar navigator={this.props.navigator}></NavBar>
      <View>
        <Text>LOL</Text>
        <Timer milliseconds={this.props.drillTime}></Timer>
      </View>
    </View>

    )
  }
}
