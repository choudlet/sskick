import React, {Component} from 'react';
import NavBar from '../shared/NavBar'
import {View, Text, ActivityIndicator,ScrollView, Image, TouchableHighlight} from 'react-native';
import levelStyles from './levelStyle';
import SkillView from '../Skill/SkillView'
import serverPath from '../../config/devProd';
import Spinner from 'react-native-spinkit'

export default class LevelView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      levelImageTotal:this.props.selectedPathAndLevels.Levels.length,
      levelLoadTotal:0
    }
  }

  transitionToSkill(level) {
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
          selectedLevelandSkills: this.state.selectedLevelandSkills,
          showNavModal: this.props.showNavModal
        }
      })
    })
  }

  imageSuccess() {
    this.setState({
      levelLoadTotal: this.state.levelLoadTotal + 1
    })
    console.log(this.state.levelLoadTotal, this.state.levelLoadTotal)
  }

  componentWillMount() {
    console.log(this.props)
  }


  render() {
    let levelContent = this.props.selectedPathAndLevels.Levels.map(level=>{
      return <TouchableHighlight   key={level.id} onPress={()=>{this.transitionToSkill(level)}}><Image
        source={{uri:level.backgroundImageUrl}}
        style={levelStyles.containerImage}
        onLoad={()=>{this.imageSuccess()}}
        >
        <View style={levelStyles.introContainer}>
          <Text style={levelStyles.levelText}>Level #{level.levelNumber}</Text>
          <Text style={levelStyles.levelNameText}>{level.name}</Text>
        </View>
      </Image></TouchableHighlight>
    })
    return(
      <View>
      <NavBar navigator={this.props.navigator} showNavModal={this.props.showNavModal}/>
      <Image
        source={require('../../assets/images/FieldBackground.jpg')}
        style={levelStyles.backgroundImage}
        >
      <View style={{justifyContent:'center', alignItems:'center'}}>
        {this.state.levelImageTotal == this.state.levelLoadTotal ? null :
          <Spinner
            size={100}
            color='#64AE20'
            style="Wave"
            style={{marginTop:'50%'}}
             />
        }
        <ScrollView style={{opacity:this.state.levelImageTotal == this.state.levelLoadTotal?1:0}}>
        {levelContent}
        </ScrollView>
      </View>
    </Image>
      </View>
    )
  }
}
