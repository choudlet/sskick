import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight,ActivityIndicator} from 'react-native';
import NavBar from '../shared/NavBar';
import pathStyles from './pathStyle.js'
import LevelView from '../Level/LevelView';

export default class PathContainer extends Component {
constructor() {
  super()
  this.state= {
    pathsLoad: 0
  }
}
  imageSuccess() {
    console.log('IMAGE LOADED');
    this.setState({
      pathsLoad: this.state.pathsLoad + 1
    })
  }

  transitionToPath(pathName) {
    this.props.navigator.push({
      component:LevelView,
      passProps: {
        pathName: pathName
      },
      navigationBarHidden:true
    })
  }

  componentWillMount() {
    console.log(this.props.paths.length, this.state.pathsLoad);
  }

  render() {
    let pathsContent = this.props.paths.map(element=> {
        return <TouchableHighlight key={element.id} onPress={()=>this.transitionToPath(element.name)}><Image
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
        {this.state.pathsLoad == this.props.paths.length ? pathsContent: (<ActivityIndicator
                      size='large'
                      color='red'
                        ></ActivityIndicator>)}
      </View>
        </Image>
    )
}
}
