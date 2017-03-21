import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight,ActivityIndicator} from 'react-native';
import NavBar from '../shared/NavBar';
import pathStyles from './pathStyle.js'
import LevelView from '../Level/LevelView';
import serverPath from '../../config/devProd';

export default class PathContainer extends Component {
constructor() {
  super()
  this.state= {
    pathsLoad: 0,
    selectedPathAndLevels: undefined
  }
}
  imageSuccess() {
    console.log('IMAGE LOADED');
    this.setState({
      pathsLoad: this.state.pathsLoad + 1
    })
  }

  transitionToPath(path) {
    return fetch(`${serverPath}path/${path.id}`)
    .then((data)=> {
      console.log(data);
      return data.json()
    }).then(dataJson=> {
      this.setState({
        selectedPathAndLevels: dataJson[0]
      })
      this.props.navigator.push({
        component:LevelView,
        navigationBarHidden:true,
        passProps: {
          selectedPathAndLevels: this.state.selectedPathAndLevels
        }
      })
    })
  }

  render() {
    let pathsContent = this.props.paths.map(element=> {
        return <TouchableHighlight key={element.id} onPress={()=>this.transitionToPath(element)}><Image
          onLoad={()=>{this.imageSuccess()}}
          style={pathStyles.pathImage}
          source={{uri: element.imageUrl}}>
          <Text style={pathStyles.pathName}>{element.name}</Text>
        </Image></TouchableHighlight>
      })

    return (
        <Image
          source={require('../../assets/images/stadium.jpg')}
          style={pathStyles.containerImage}
          >
        <NavBar navigator={this.props.navigator}></NavBar>
        <View style={pathStyles.introContainer}>
          <Text style={pathStyles.headText}>The Path To Pro</Text>
          <View style={pathStyles.borderLine}></View>
          <Text style={pathStyles.paragraphText}>Select your skill set and complete levels to get you closer to the player you are meant to become</Text>
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          {pathsContent}
      </View>
        </Image>
    )
}
}
