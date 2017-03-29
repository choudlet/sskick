import React, {Component} from 'react';
import {View, Text,TouchableHighlight, Image} from 'react-native';
import NavBar from '../shared/NavBar';
import skillStyles from './skillStyle';
import DrillLaunch from '../DrillLaunch/DrillLaunch'
import Spinner from 'react-native-spinkit';


export default class SkillView extends Component {

  constructor() {
    super()
    this.state= {
      currentDrill: undefined,
      imageLoad:false
    }
  }

  transitionToDrill(skill) {
    console.log('skill');
    this.props.navigator.push({
      component:DrillLaunch,
      navigationBarHidden:true,
      passProps: {
        currentDrill: skill,
        levelImageUrl:this.props.selectedLevelandSkills.backgroundImageUrl,
        levelId: this.props.selectedLevelandSkills.id,
        showNavModal: this.props.showNavModal
      }
    })

  }

componentDidMount() {
}
  imageLoadSuccess() {
    this.setState({
      imageLoad:true
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
      <NavBar navigator={this.props.navigator} showNavModal={this.props.showNavModal}></NavBar>
      <Image
        source={require('../../assets/images/stadium.jpg')}
        style={{width:null,height:null}}
        >
      <View style={{justifyContent:'center', alignItems:'center'}}>
        {this.state.imageLoad ? null :
          <Spinner
            size={100}
            color='#64AE20'
            style="Wave"
            style={{marginTop:'50%'}}
             />
        }
        </View>
      <View style={{opacity: this.state.imageLoad? 1:0}}>
      <Image
        style={skillStyles.containerImage}
        source={{uri:this.props.selectedLevelandSkills.backgroundImageUrl}}
        onLoad={()=>{this.imageLoadSuccess()}}
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
    </Image>
    </View>
    )
  }
}
