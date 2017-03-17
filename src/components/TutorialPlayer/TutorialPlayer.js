import React, {Component} from 'react';
import { NavigatorIOS, View, TouchableHighlight,Text ,Image, Modal} from 'react-native';
import {Video} from 'react-native-video'

export default class TutorialPlayer extends Component {


    state = {
      modalVisible: false,
    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

    render() {
      return (
        <View style={{marginTop: 50}}>
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
           <View style={{marginTop: 50}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>

            </View>
           </View>
          </Modal>

          <TouchableHighlight onPress={() => {
            this.setModalVisible(true)
          }}>
            <Text>Show Modal</Text>
          </TouchableHighlight>

        </View>
      );
    }




}
