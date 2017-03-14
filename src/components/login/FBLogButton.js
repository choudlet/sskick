import React, {Component} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class FBLogButton extends Component {


  render() {
    return (
      <TouchableHighlight onPress={() => this.touchPress(this)} style={{borderColor:'white', borderWidth:1, height:80, width:300}}>
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Icon name="rocket" size={30}/>
            <Text style={{color:'white'}}>Continue with Facebook</Text>
        </View>
      </TouchableHighlight>
    );
  }
};
