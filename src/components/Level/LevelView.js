import React, {Component} from 'react';
import NavBar from '../shared/NavBar'
import {View, Text, ActivityIndicator,ScrollView, Image, TouchableHighlight} from 'react-native';
import LoadingSpinner from '../shared/LoadingSpinner';
import levelStyles from './levelStyle';
import SkillView from '../Skill/SkillView'
import serverPath from '../../config/devProd';

export default class LevelView extends Component {
  

  transitionToLevel(level) {
    return fetch(`${serverPath}level/${level.id}`)
    .then((data)=> {
      return data.json()
    }).then(dataJson=> {
      this.setState({
        selectedLevelandSkills: dataJson[0]
      })
      this.props.navigator.push({
        component:SkillView,
        navigationBarHidden:true,
        passProps: {
          selectedLevelandSkills: this.state.selectedLevelandSkills
        }
      })
    })
  }

  componentWillMount() {
    console.log(this.props)
  }


  render() {
    let levelContent = this.props.selectedPathAndLevels.Levels.map(level=>{
      return <TouchableHighlight   key={level.id} onPress={()=>{this.transitionToLevel(level)}}><Image
        source={{uri:level.backgroundImageUrl}}
        style={levelStyles.containerImage}
        >
        <View style={levelStyles.introContainer}>
          <Text style={levelStyles.levelText}>Level #{level.levelNumber}</Text>
          <Text style={levelStyles.levelNameText}>{level.name}</Text>
        </View>
      </Image></TouchableHighlight>
    })
    return(
      <View>
      <NavBar navigator={this.props.navigator}/>
      <View>
        <ScrollView
          >
        {levelContent}
        </ScrollView>
      </View>
      </View>
    )
  }
}
