import React, {Component} from 'react';
import { NavigatorIOS, View, TouchableHighlight, Text ,Image, StatusBar, Modal} from 'react-native';
import Splash from './Splash.js';
import styles from '../styles/style.js'
export default class Scene extends Component {

  constructor() {
    super()
    this.state = {
      modalVisible:false
    }
    this.showNavModal = this.showNavModal.bind(this);
  }

  showNavModal() {
    console.log('THIS FUNCTION IS RUNNING')
    this.state.modalVisible = !this.state.modalVisible;
    console.log(this.state)
  }


  render() {
  return (
    <View style={{flex:1, alignSelf:'stretch'}}>
    <NavigatorIOS
    style={{flex: 1, alignSelf: 'stretch', backgroundColor:'red'}}
     initialRoute={{
       component: Splash,
       title: 'Splash',
       navigationBarHidden: true,
       passProps: {
         showNavModal: this.showNavModal
       }
     }}
   />
   <Modal
           animationType={"slide"}
           transparent={false}
           visible={this.state.modalVisible}
           onRequestClose={() => {alert("Modal has been closed.")}}
           >
          <View style={{marginTop: 22}}>
           <View>
             <Text>Hello World!</Text>

             <TouchableHighlight onPress={() => {
               this.showNavModal()
             }}>
               <Text>Hide Modal</Text>
             </TouchableHighlight>

           </View>
          </View>
         </Modal>
 </View>
  )
  }

}
