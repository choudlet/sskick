import React, {Component} from 'react';
import { NavigatorIOS, View, TouchableHighlight, Text ,Image } from 'react-native';
import Splash from './Splash.js';
import styles from '../styles/style.js'
export default class Scene extends Component {

  render() {
  return (
    <NavigatorIOS
    style={{flex: 1, alignSelf: 'stretch'}}
     initialRoute={{
       component: Splash,
       title: 'Splash',
       navigationBarHidden: true,
     }}
   />
  )
  }

}
