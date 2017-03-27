import React, {Component} from 'react';
import {View,Text,Image,TouchableHighlight} from 'react-native';
import NavBar from '../shared/NavBar';
import drillResultStyles from './DrillResultStyle';
import DrillLaunch from '../DrillLaunch/DrillLaunch'
import serverPath from '../../config/devProd';
import SkillView from '../Skill/SkillView';
import Spinner from 'react-native-spinkit';



export default class DrillResult extends Component {

  constructor(props) {
    super(props)
    this.state={
      minutes:undefined,
      seconds:undefined,
      imageLoad:false
    }
  }

  imageLoadSuccess() {
    this.setState({
      imageLoad:true
    })
  }

  componentWillMount() {
    console.log(this.props)
    this.formatTime(this.props.remainingTime, this.props.totalTime)
  }

  formatTime(remainingTime, totalTime) {
    console.log(totalTime, remainingTime)
    let time = totalTime - remainingTime
    if (time % 60000 != time) {
      let minutesRemaining = Math.floor(time/60000).toString();
      if(minutesRemaining.length==1) {
        minutesRemaining = '0' + minutesRemaining
      }
      let minutesSubtraction = minutesRemaining * 60000
      let secondsTime = Math.floor((time - minutesSubtraction)/1000).toString();
      if(secondsTime.length==1) {
        secondsTime = '0' + secondsTime
      }
      this.setState({
        minutes: minutesRemaining,
        seconds: secondsTime
      })
    } else if(time % 60000 == time) {
      let minutesRemaining = '00';
      let secondsTime = Math.floor((time/1000)).toString();
      if(secondsTime.length==1) {
        secondsTime = '0' + secondsTime
      }
      console.log(minutesRemaining)
      this.setState({
        minutes: minutesRemaining,
        seconds: secondsTime
      })
    }

  }

  transitionToLevel() {
    console.log('OKOKOK')
    return fetch(`${serverPath}level/${this.props.levelId}`)
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

  transitionToDrill() {
    this.props.navigator.push({
      component:DrillLaunch,
      navigationBarHidden:true,
      passProps: {
        currentDrill:this.props.drill,
        levelImageUrl:this.props.levelImageUrl
      }
    })
  }

  render() {
    return (

      <View>
      <NavBar navigator={this.props.navigator}/>
        <Image
          source={require('../../assets/images/stadium.jpg')}
          style={{width:'100%',height:'100%'}}
          >
            {
              this.state.imageLoad ? null :
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Spinner
              size={100}
              color='#64AE20'
              style="Wave"
              style={{marginTop:'50%'}}
               />
          </View>
          }
          <View style={{opacity:this.state.imageLoad?1:0}}>
      <Image
        source={{uri:this.props.levelImageUrl}}
        style={drillResultStyles.backgroundImage}
        onLoad={()=>this.imageLoadSuccess()}
        >
        <View style={drillResultStyles.magicWrapper}>
        <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'transparent'}}>
        <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'transparent', marginTop:20, width:'80%'}}>
              <Text style={{fontSize:30, fontFamily:'Octin Sports', color:'white'}}>Skill Complete!</Text>
              <Text style={{fontSize:15, color:'white'}}>You Practiced the {this.props.drill.name} for:</Text>
              <Text style={{ fontSize:20, color:'white', marginTop:10}}>{this.state.minutes} : {this.state.seconds}</Text>
          </View>
          <View style={{marginTop:60, alignItems:'center', justifyContent:'center'}}>
            <TouchableHighlight style={{marginTop:20}} onPress={()=>{this.transitionToDrill()}}><View style={drillResultStyles.borderBox}><Text style={{color:'white'}}>Practice Again</Text></View></TouchableHighlight>
            <TouchableHighlight style={{marginTop:20}} onPress={()=>this.transitionToLevel()}><View style={drillResultStyles.borderBox}><Text style={{color:'white'}}>Back to Level</Text></View></TouchableHighlight>
          </View>
        </View>
      </View>
    </Image>
    </View>
  </Image>
      </View>
    )
  }
}
