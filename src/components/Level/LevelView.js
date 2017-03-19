import React, {Component} from 'react';
import NavBar from '../shared/NavBar'
import {View, Text} from 'react-native';


export default class LevelView extends Component {

  componentWillMount() {
    console.log(this.props.pathName)
  }


  render() {
    return(
      <View>
      <NavBar navigator={this.props.navigator}/>
      <View>
      <Text>YOU MADE IT</Text>
      </View>
      </View>
    )
  }
}
