import React, {Component} from 'react';
import {Modal, View, Text, TouchableHighlight} from 'react-native'
const {BlurView, VibrancyView} = require('react-native-blur');
import modalStyles from './modalStyle';

export default class ModalMenu extends Component {


  render() {






return (

<Modal
        animationType={"slide"}
        transparent={true}
        visible={true}
        onRequestClose={() => {alert("Modal has been closed.")}}
        style={{width:'100%',height:'100%'}}
        >
        <BlurView blurType="dark" blurAmount={10} style={{width:'100%',height:'100%'}}>
       <View style={{marginTop: 60, alignItems:'center', justifyContent:'center'}}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={modalStyles.basicFont}>Edit Profile</Text>
          <Text style={modalStyles.basicFont}>Video Library</Text>
          <Text style={modalStyles.basicFont}>Visit Leaderboards</Text>
          <Text style={modalStyles.basicFont}>Logout</Text>
          <TouchableHighlight onPress={() => {
            this.props.hideNavModal()
          }}>
            <Text style={modalStyles.basicFont}>Hide Menu</Text>
          </TouchableHighlight>

        </View>
       </View>
     </BlurView>
      </Modal>
    )

}
    }
