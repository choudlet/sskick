import React, {Component} from 'react';
import {View,Text, Image, TouchableHighlight} from 'react-native';
import NavBar from '../shared/NavBar'
import Timer from '../shared/timer'
import Spinner from 'react-native-spinkit'
import DrillResult from '../DrillResult/DrillResult';
import Icon from 'react-native-vector-icons/FontAwesome';
import drillRunStyles from './DrillRunStyle';



export default class DrillRun extends Component {

  constructor() {
    super()
    this.state = {
      imageLoad:false,
      remainingTime:null
    }

    this.saveTime = this.saveTime.bind(this)
    this.transitionToResult = this.transitionToResult.bind(this)
  }


  transitionToResult() {
    this.props.navigator.push({
      component:DrillResult,
      navigationBarHidden:true,
      passProps:{
        remainingTime:this.state.remainingTime,
        totalTime:this.props.drillTime,
        drill: this.props.drill,
        levelImageUrl: this.props.levelImageUrl,
        levelId: this.props.levelId,
        showNavModal: this.props.showNavModal
      }
    })
  }

  componentWillMount() {
    console.log(this.props);
  }

  imageLoadSuccess() {
    this.setState({
      imageLoad:true
    })
  }

  saveTime(milliseconds) {
    this.setState({
      remainingTime:milliseconds
    });
  }

  render() {
    return (
      <View>
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
            <View style={drillRunStyles.magicWrapper}>
              <View style={{flex:1, justifyContent:'center'}}>
                <Text style={{fontSize:30, color:'white', fontFamily: 'Octin Sports'}}>{this.props.drill.name}</Text>
            <Timer milliseconds={this.props.drillTime} saveTime={this.saveTime} transitionToResult={this.transitionToResult}/>
            </View>
            <View style={{flex:1}}></View>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <TouchableHighlight onPress={()=>{this.transitionToResult()}}><View style={{width:'80%', height:40, borderWidth:1, borderColor:'white', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:20, color:'white', fontFamily:'Octin Sports'}}>Quit Training Session</Text></View></TouchableHighlight>
            </View>
            </View>
          </Image>
        </View>
      </Image>
      </View>

    )
  }
}
