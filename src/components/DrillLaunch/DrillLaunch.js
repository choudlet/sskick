import React, {Component} from 'react';
import {View,Text,Image,TouchableHighlight} from 'react-native';
import NavBar from '../shared/NavBar';
import Icon from 'react-native-vector-icons/FontAwesome'
import Spinner from 'react-native-spinkit'
import drillLaunchStyles from './DrillLaunchStyle';
import VideoPlay from '../VideoPlay/VideoPlay.js'
import DrillRun from '../DrillRun/DrillRun'
import ModalMenu from '../shared/ModalMenu'

export default class DrillLaunch extends Component {

  constructor() {
    super()
    this.state = {
      imageLoad:false,
      currentTime: undefined,
      timeIterator: 1
    }
  }

  componentWillMount() {
    this.updateTime(this.state.timeIterator)
  }

  imageLoadSuccess() {
    this.setState({
      imageLoad:true
    })
  }

  showNavModal() {
      this.setState({
        modalVisible: true,
      })
    }

    hideNavModal() {
      this.setState({
        modalVisible:false
      })
    }

  launchVideo() {
    this.props.navigator.push({
      component: VideoPlay,
      navigationBarHidden:true,
      passProps: { videoSRC: this.props.currentDrill.videoUrl }
    })
  }

  increaseMinutes() {
    this.setState({
      timeIterator: this.state.timeIterator + 1
    }, ()=>{
        this.updateTime(this.state.timeIterator)
    })
}



  decreaseMinutes() {
    this.setState({
      timeIterator: this.state.timeIterator - 1
    }, ()=>{
        this.updateTime(this.state.timeIterator)
      }
  );
  }


  updateTime(number) {
    let minutes;
    switch(number) {
      case 0:
        minutes = '0:00';
        break;
      case 1:
        minutes = '2:00';
        break;
      case 2:
        minutes = '4:00';
        break;
      case 3:
        minutes = '6:00';
        break;
      case 4:
      minutes = '8:00';
      break;
      case 5:
      minutes = '10:00';
      break;
      case 6:
      minutes = '12:00';
      break;
      case 7:
      minutes = '14:00';
      break;
      case 8:
        minutes = '16:00';
        break;
      case 9:
      minutes = '18:00';
      break;
      case 10:
      minutes = '20:00';
      break;
      case 11:
      minutes = '22:00';
      break;
      case 12:
      minutes = '24:00';
      break;
      case 13:
      minutes = '26:00';
      break;
      case 14:
      minutes = '28:00';
      break;
      case 15:
      minutes = '30:00';
      break;
    }
    this.setState({
      currentTime: minutes
    })
  }

  runDrill() {
    this.props.navigator.push({
      component: DrillRun,
      navigationBarHidden:true,
      passProps: {
        drillTime: this.determineMilliseconds(this.state.timeIterator),
        drill: this.props.currentDrill,
        levelImageUrl:this.props.levelImageUrl,
        levelId: this.props.levelId
      }
    })

  }

  determineMilliseconds(timeIndex) {
    let milliseconds = timeIndex * 60000 * 2;
    return milliseconds
  }

  render() {


    return (
      <View>
      <NavBar navigator={this.props.navigator} showNavModal={this.showNavModal.bind(this)}></NavBar>
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
          <View style={{opacity: this.state.imageLoad? 1:0}}>
          <Image
            source={{uri:this.props.levelImageUrl}}
            onLoad={()=>{this.imageLoadSuccess()}}
            style={{width:'100%',height:'100%'}}
            >
            <View style={drillLaunchStyles.magicWrapper}>
            <View style={{zIndex:5,flex:1, backgroundColor:'transparent'}}>
            <View style={drillLaunchStyles.topContainer}>
            <View style={{justifyContent:'flex-end'}}>
            <Text style={drillLaunchStyles.accentText}>How to:</Text>
            </View>
            <Text style={drillLaunchStyles.drilLText}>{this.props.currentDrill.name}</Text>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <TouchableHighlight onPress={()=>{this.launchVideo()}}>
            <Icon name="play-circle" size={80} style={{color:'white'}}></Icon>
            </TouchableHighlight>
            </View>
            </View>
            <View style={{flex:1}}></View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Text style={{fontFamily:'Octin Sports', fontSize:30, color:'white'}}>Choose Practice Time</Text>
              <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                <TouchableHighlight onPress={()=>{this.decreaseMinutes()}}>
                <Icon style={drillLaunchStyles.bottomIcon} name='chevron-left'></Icon>
                </TouchableHighlight>
                </View>
                <Text style={{color:'white', fontSize:25}}> {this.state.currentTime} </Text>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                <TouchableHighlight onPress={()=>{this.increaseMinutes()}}>
                <Icon style={drillLaunchStyles.bottomIcon} name='chevron-right'></Icon>
                </TouchableHighlight>
              </View>
              </View>
            </View>
            <View style={{flex:1, justifyContent:'space-between', alignItems:'center'}}><TouchableHighlight onPress={()=>{this.runDrill()}}><View style={drillLaunchStyles.startContainer}><Text style={{color:'white'}}>Start Drill</Text></View></TouchableHighlight></View>
            </View>
          </View>
          </Image>
        </View>
        </Image>
        {this.state.modalVisible && <ModalMenu navigator={this.props.navigator} hideNavModal={()=>{this.hideNavModal()}}/>}
    </View>
    )
  }
}
