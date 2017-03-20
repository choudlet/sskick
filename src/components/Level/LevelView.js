import React, {Component} from 'react';
import NavBar from '../shared/NavBar'
import {View, Text, ActivityIndicator} from 'react-native';
import LoadingSpinner from '../shared/LoadingSpinner';

export default class LevelView extends Component {

  componentWillMount() {
    console.log(this.props.pathName)
  }


  render() {
    return(
      <View>
      <NavBar navigator={this.props.navigator}/>
      <View>
        <ActivityIndicator
          size="large"
          color="green"
          animating="true"
        />
      </View>
      </View>
    )
  }
}
