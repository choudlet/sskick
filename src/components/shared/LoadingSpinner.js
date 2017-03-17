import React, {Component} from 'React';
import {TouchableHighlight, View, Text, Image, Animated, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './loadingSpinnerStyle';

const AnimatedIcon = Animated.createAnimatedComponent(Icon)

export default class LoadingSpinner extends Component {
  constructor(props) {
  super(props);
  this.state = {
    spinValue: new Animated.Value(0),
  };
}

componentDidMount() {
  this.spin()
}

spin() {
  this.state.spinValue.setValue(0)
  Animated.timing(
    this.state.spinValue,
    {
      toValue:1,
      duration:1000,
      easing: Easing.linear
    }
  ).start(()=>this.spin())
}

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View>
        <Animated.Image
          source={require('../../assets/images/football-ball.png')}
          style={{height:20, width:20,transform: [{rotate:spin}]}}
          />
        </View>
    )
  }
}
