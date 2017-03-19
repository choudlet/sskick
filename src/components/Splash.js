import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight,StatusBar, AsyncStorage} from 'react-native';
import styles from '../styles/style.js';
import Login from './login/LoginView.js'

export default class Splash extends React.Component {

  componentWillMount() {
    try {
  const value = AsyncStorage.getItem('@SSKick:currentUser');
  if (value !== null){
    // We have data!!
    console.log(value);
  }
} catch (error) {
  // Error retrieving data
}
  }

  touchPress() {
    this.props.navigator.push({
      component: Login,
      title: 'Login',
      navigationBarHidden:true
    })
  }


  render() {
    return (
      <Image
        style={styles.containerImage}
        source={require('../assets/images/SoccerBackground.jpg')}
        >
        <StatusBar hidden={true} />
        <View style={styles.colorContainer}>
          <View style={{flex:1}}></View>
          <View style={{flex:3, backgroundColor:'transparent'}}>

              <View style={{flex: .75, flexDirection: 'row', justifyContent:'center'}}>
                <Image
                    style={{width:75, height:75, resizeMode:'contain'}}
                    source={require('../assets/images/SideKickLogo.png')}
                />
              </View>
              <View style={{flex:1}}>
              <View style={styles.flexCenter}>
                <Text style={{fontFamily: 'Octin Sports', fontSize: 30, color: 'white'}}>Soccer SideKick</Text>
                </View>
                <View style={{flex:2, flexDirection:'row', justifyContent: 'center'}}>
                <Text style={{fontSize:15, color:'white'}}>The Path to Pro Training Guide</Text>
                </View>
                </View>
                <View style={{flex:.5, flexDirection:'row', justifyContent:'center'}}>
                <View style={styles.borderLine}></View>
                </View>
                <View style={styles.flexCenter}>
                <TouchableHighlight onPress={() => this.touchPress(this)} style={{borderColor:'white', borderWidth:1, height:80, width:300}}>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                  <Text style={{color:'white'}}>Begin Your Training</Text>
                  </View>
                </TouchableHighlight>
                </View>
        </View>
        <View style={{flex:1}}>
        </View>
        </View>
      </Image>
    )
  }
}
