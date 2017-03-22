import React, {Component} from 'react';
import {View,Text} from 'react-native';


export default class Timer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countdownLeft: this.props.milliseconds,
      minutes:undefined,
      seconds:undefined
    }
  }


  componentDidMount() {
    setInterval(()=> {
      this.setState({
        countdownLeft: this.state.countdownLeft - 1000
        })
        this.formatTime()
      }, 1000)
  }

  formatTime() {
    if (this.state.countdownLeft % 60000 != this.state.countdownLeft) {
      let minutesRemaining = Math.floor(this.state.countdownLeft/60000)
      let minutesSubtraction = minutesRemaining * 60000
      let secondsTime = Math.floor((this.state.countdownLeft - minutesSubtraction)/1000)
      this.setState({
        minutes: minutesRemaining,
        seconds: secondsTime
      })
    } else if(this.state.countdownLeft % 60000 == this.state.countdownLeft) {
      let minutesRemaining = 0;
      let secondsTime = Math.floor((this.state.countdownLeft/1000))
      this.setState({
        minutes: minutesRemaining,
        seconds: secondsTime
      })
    }
  }

  render() {
    return(
    <View>
    <Text>{this.state.minutes} : {this.state.seconds} {this.state.countdownLeft}</Text>
    </View>)
  }

}
