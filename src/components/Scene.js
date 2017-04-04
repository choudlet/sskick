import React, {Component} from 'react';
import { NavigatorIOS, View, TouchableHighlight, Text ,Image, StatusBar, Modal} from 'react-native';
import Splash from './Splash.js';
import styles from '../styles/style.js'
import ModalMenu from './shared/ModalMenu';

export default class Scene extends Component {

  constructor() {
    super()
    this.state = {
      modalVisible:false
    }
  }



  render() {
    console.log('Render of Scene is Run')
  return (
    <View style={{flex:1, alignSelf:'stretch'}}>
      <StatusBar hidden={true}/>
      <NavigatorIOS
      style={{flex: 1, alignSelf: 'stretch', backgroundColor:'red'}}
       initialRoute={{
         component: Splash,
         title: 'Splash',
         navigationBarHidden: true,
       }}
     />
 </View>
  )
  }

}
