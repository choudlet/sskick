import React, {Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native';
import timerStyles from './timerStyle'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Timer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countdownLeft: this.props.milliseconds,
      minutes:'00',
      seconds:'00',
      runningInterval:undefined,
      running:false,
      timeAppear:true
    }
  }


  componentDidMount() {
this.formatTime()
  }



  startTime() {
    this.props.startTimer();
    let runningInterval = setInterval(()=> {
      this.setState({
        countdownLeft: this.state.countdownLeft - 1000,
        })
        if (this.state.countdownLeft == 0) {
          this.props.transitionToResult()
        }
        this.formatTime()
        this.props.saveTime(this.state.countdownLeft)
      }, 1000)
      this.setState({
        runningInterval,
        running:true
      })
  }

  stopTime() {
    clearInterval(this.state.runningInterval)
    this.setState({
      running:false
    })
  }

  formatTime() {
    if (this.state.countdownLeft % 60000 != this.state.countdownLeft) {
      let minutesRemaining = Math.floor(this.state.countdownLeft/60000).toString();
      if(minutesRemaining.length==1) {
        minutesRemaining = '0' + minutesRemaining
      }
      let minutesSubtraction = minutesRemaining * 60000
      let secondsTime = Math.floor((this.state.countdownLeft - minutesSubtraction)/1000).toString();
      if(secondsTime.length==1) {
        secondsTime = '0' + secondsTime
      }
      this.setState({
        minutes: minutesRemaining,
        seconds: secondsTime
      })
    } else if(this.state.countdownLeft % 60000 == this.state.countdownLeft) {
      let minutesRemaining = '00';
      let secondsTime = Math.floor((this.state.countdownLeft/1000)).toString();
      if(secondsTime.length==1) {
        secondsTime = '0' + secondsTime
      }
      this.setState({
        minutes: minutesRemaining,
        seconds: secondsTime
      })
    }
  }

  render() {
    return(
    <View style={{backgroundColor:'transparent', justifyContent:'center', alignItems:'center'}}>
    {this.state.timeAppear && <View style={{flexDirection:'row'}}><Text style={timerStyles.clockText}>{this.state.minutes}</Text><Text style={timerStyles.clockText}> : </Text><Text style={timerStyles.clockText}>{this.state.seconds}</Text></View>}
    {this.state.running? <TouchableHighlight  onPress={()=>{this.stopTime()}}><Icon style={timerStyles.playPause} name='pause-circle' size={60}/></TouchableHighlight>:
      <TouchableHighlight  onPress={()=>{this.startTime()}}><Icon style={timerStyles.playPause} name='play-circle' size={60}/></TouchableHighlight>
  }

    </View>)
  }

}
