import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../styles/style.js'
import FBLogButton from './FBLogButton';
import FBSDK, {LoginButton, AccessToken} from 'react-native-fbsdk';



export default class LoginView extends Component {
  render() {
    return (
      <Image
        style={styles.containerImage}
        source={require('../assets/images/SoccerBackground.jpg')}
        >
        <View style={styles.colorContainer}>
          <View style={{flex:1}}>
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'center',alignItems:'center'}}>
              <Text style={{fontFamily:'Octin Sports', fontSize: 30, color:'white'}}>Login</Text>
            </View>
          </View>
          <View style={{flex:3}}>
            <View style={styles.flexCenter}>
            <FBLogButton></FBLogButton>
            </View>
          </View>
          <View style={{flex:1}}></View>
        </View>
        </Image>
    )
  }
}
