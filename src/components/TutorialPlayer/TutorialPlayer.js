import React, {Component} from 'react';
import { NavigatorIOS, View, TouchableHighlight,Text ,Image} from 'react-native';
import Video from 'react-native-video'
import tutorialStyles from './tutorialStyle';
import NavBar from '../shared/NavBar';

export default class TutorialPlayer extends Component {



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
                <Text style={tutorialStyles.paragraphText}>Watch the tutorial video to set up your Sidekick. You can access thie video at anytime in the <Text style={{color:'#69C700'}}>upper right corner</Text></Text>
              </View>
              <Video
                source={{uri:'sample.mp4'}}
      resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
      repeat={true}
                >

              </Video>
            </Image>
      );
    }




}
