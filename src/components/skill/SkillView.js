import React, {Component} from 'react';
import {View, Text,TouchableHighlight, Image} from 'react-native';
import NavBar from '../shared/NavBar';
import skillStyles from './skillStyle';
import DrillLaunch from '../DrillLaunch/DrillLaunch.js'
export default class SkillView extends Component {

  constructor() {
    super()
    this.state= {
      currentDrill: undefined
    }
  }

  transitionToDrill(skill) {
    this.setState({
      currentDrill:skill
    })
    this.props.navigator.push({
      component:DrillLaunch,
      navigationBarHidden:true,
      passProps: {
        currentDrill: this.state.currentDrill
      }
    })

  }

  render() {
    let skillLists = this.props.selectedLevelandSkills.Skills.map(element=> {
        return <TouchableHighlight
          key={element.id}
          onPress={()=>{this.transitionToDrill(element)}}
          >
          <View style={skillStyles.skillContainer}>
            <Text style={skillStyles.skillText}>#{element.order} {element.name}</Text>
          </View>
        </TouchableHighlight>
      })

    return(
      <View>
      <NavBar navigation={this.props.navigation}></NavBar>

      <Image
        style={skillStyles.containerImage}
        source={{uri:this.props.selectedLevelandSkills.backgroundImageUrl}}
        >
        <View style={skillStyles.magicWrapper}>
        <View style={skillStyles.introWrapper}>
          <Text style={skillStyles.levelText}>Level #{this.props.selectedLevelandSkills.levelNumber}</Text>
          <Text style={skillStyles.levelNameText}>{this.props.selectedLevelandSkills.name}</Text>
        </View>
        <View style={skillStyles.centerSkills}>
          {skillLists}
        </View>
      </View>
      </Image>
    </View>
    )
  }
}
