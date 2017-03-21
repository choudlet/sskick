import React, {Component} from 'react';
import {Modal, View, Text, TouchableHighlight} from 'react-native'

export default class ModalMenu extends Component {


  render() {






return (

<Modal
        animationType={"slide"}
        transparent={false}
        visible={true}
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
    )

}
    }
