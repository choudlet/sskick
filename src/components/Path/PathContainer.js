import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import NavBar from '../shared/NavBar';
import pathStyles from './pathStyle.js'
import LevelView from '../Level/LevelView';
import serverPath from '../../config/devProd';
import Spinner from 'react-native-spinkit';

export default class PathContainer extends Component {
constructor(props) {
  super(props)
  this.state= {
    pathsImageLoad: 0,
    totalPaths: this.props.paths.length,
    selectedPathAndLevels: undefined
  }
}
  imageSuccess() {
    console.log('IMAGE LOADED');
    this.setState({
      pathsImageLoad: this.state.pathsImageLoad + 1
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
          {this.state.totalPaths == this.state.pathsImageLoad ? null :
            <Spinner
              size={100}
              color='#64AE20'
              style="Wave"
              style={{marginTop:'50%'}}
               />
          }
          <View style={{opacity:this.state.totalPaths == this.state.pathsImageLoad?1:0, justifyContent: 'center', alignItems:'center'}}>
          {pathsContent}
        </View>
      </View>
        </Image>
    )
}
}
