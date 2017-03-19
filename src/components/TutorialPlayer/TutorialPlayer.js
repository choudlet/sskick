import React, {Component} from 'react';
import { NavigatorIOS, View, TouchableHighlight,Text ,Image} from 'react-native';
import Video from 'react-native-video'
import tutorialStyles from './tutorialStyle';
import NavBar from '../shared/NavBar';
import VideoPlayer from 'react-native-video-controls';
import Icon from 'react-native-vector-icons/FontAwesome'
import VideoPlay from '../VideoPlay/VideoPlay';
import PathContainer from '../Path/PathContainer';


export default class TutorialPlayer extends Component {

  transitionToVideo() {
    this.props.navigator.push({
      component: VideoPlay,
      navigationBarHidden:true,
      passProps: { videoSRC: 'https://s3.amazonaws.com/sskick/Best+Soccer+Training+Ball+-+The+Soccer+Sidekick.mp4' }
    })
  }

  transitionToPath() {
    this.props.navigator.push({
      component:PathContainer,
      navigationBarHidden:true
    })
  }


    render() {
      return (
            <Image
              style={tutorialStyles.containerImage}
              source={require('../../assets/images/FieldBackground.jpg')}
              >
              <NavBar></NavBar>
              <View style={tutorialStyles.introContainer}>
                <Text style={tutorialStyles.headlineText}>Tutorial Video</Text>
                <View style={tutorialStyles.borderLine}></View>
                <Text style={tutorialStyles.paragraphText}>Watch the tutorial video to set up your Sidekick. You can access thie video at anytime in the <Text style={{color:'#5FC906'}}>menu in the upper right corner</Text></Text>
              </View>
              <TouchableHighlight onPress={() => {this.transitionToVideo()}}>
                <Image
                  source={require('../../assets/images/TutorialVidCapture.png')}
                  style={tutorialStyles.videoImage}
                  >
                  <Icon name='play-circle' size={60} style={tutorialStyles.playButton}/>
                </Image>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {this.transitionToPath()}}>
              <View style={tutorialStyles.skipContain}>
                <Text style={tutorialStyles.skip}>Skip</Text>
              </View>
              </TouchableHighlight>
            </Image>
      );
    }




}
