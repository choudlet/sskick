import React, {Component} from 'react';
import VideoPlayer from 'react-native-video-controls';
import {View} from 'react-native';
export default class VideoPlay extends Component {

componentWillMount() {
  console.log(typeof this.props.videoSRC);
}
render() {
  return (

    <VideoPlayer
      source={{uri: this.props.videoSRC}}
      navigator={ this.props.navigator }
      resizeMode={ 'cover' }
      style={{width:'100%', height:'100%'}}
    />
  )
}
}
