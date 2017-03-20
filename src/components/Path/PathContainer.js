import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight,ActivityIndicator} from 'react-native';
import NavBar from '../shared/NavBar';
import pathStyles from './pathStyle.js'
import serverPath from '../../config/devProd.js'
import LevelView from '../Level/LevelView';

export default class PathContainer extends Component {
constructor() {
  super()
  this.state= {
    paths: undefined,
    pathsNumber: undefined,
    pathsLoad: 0
  }
}
  onLoad() {
    console.log('LOADEDEDDD');
    this.setState({
      pathsLoad: this.state.pathsLoad+ 1
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
    console.log(this.state.paths)
    return fetch(`${serverPath}path`)
    .then((data)=> {
      return data.json()
    }).then(dataJson=> {
      console.log(dataJson)
      this.setState({
        paths: dataJson,
        pathsNumber: dataJson.length
      })
      console.log(this.state)
    })
  }

  render() {
    let pathsContent;
    if(this.state.paths != undefined) {
      pathsContent = this.state.paths.map(element=> {
        return <TouchableHighlight key={element.id} onPress={()=>this.transitionToPath(element.name)}><Image
          onLoad={()=>{this.onLoad()}}
          style={pathStyles.pathImage}
          source={{uri: element.imageUrl}}>
          <Text style={pathStyles.pathName}>{element.name}</Text>
        </Image></TouchableHighlight>
      })
    }

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
        {<ActivityIndicator
                      size='large'
                      color='red'
                        ></ActivityIndicator> && this.state.pathsLoad != 2}
        {pathsContent}
      </View>
        </Image>
    )
}
}
