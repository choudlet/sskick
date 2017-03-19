import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import NavBar from '../shared/NavBar';
import pathStyles from './pathStyle.js'
import serverPath from '../../config/devProd.js'

export default class PathContainer extends Component {
constructor() {
  super()
  this.state= {
    paths: undefined
  }
}
  onLoad() {
    console.log('LOADEDEDDD');
  }

  transitionToPath(pathName) {
    console.log(pathName)
  }

  componentWillMount() {
    console.log(this.state.paths)
    return fetch(`${serverPath}path`)
    .then((data)=> {
      return data.json()
    }).then(dataJson=> {
      console.log(dataJson[0].name)
      this.setState({
        paths: dataJson,
        doneImage: dataJson.length
      })
    })
  }

  render() {
    let ajaxLoad;
    if(this.state.paths != undefined) {
      ajaxLoad = this.state.paths.map(element=> {
        return <TouchableHighlight key={element.id} onPress={()=>this.transitionToPath(element.name)}><Image
          onLoad={()=>{this.onLoad()}}
          style={pathStyles.pathImage}
          source={{uri: element.imageUrl}}>
          <Text style={pathStyles.pathName}>{element.name}</Text>
        </Image></TouchableHighlight>
      })
    } else {
      ajaxLoad = <View></View>
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
        {ajaxLoad}
        </Image>
    )
}
}
