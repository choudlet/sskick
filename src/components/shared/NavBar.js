import React, {Component} from 'React';
import {View, Text, TouchableHighlight, Picker, PickerIOS, Modal, Image, Dimensions,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import navBarStyles from './navBarStyle';
import * as loginActions from '../../actions/loginActions'
import {connect} from 'react-redux';

 class NavBar extends Component {


  goBack() {
    this.props.navigator.pop()
  }

componentWillMount() {
  console.log(this.state)
}

  render() {

    return (
      <View style={navBarStyles.navBar}>
      <View style={navBarStyles.container}>
        <TouchableHighlight onPress={()=>{this.goBack()}}>
      <Icon name="angle-left" size={30} style={navBarStyles.arrow}/>
      </TouchableHighlight>

      </View>
      <View style={navBarStyles.container}>
        <Text style={navBarStyles.textStyle}>Player</Text>
        </View>
        <View style={navBarStyles.container}>
          <TouchableHighlight onPress={()=>this.props.showNavModal()}>
      <Icon name="futbol-o" size={30} style={navBarStyles.soccer}/>
      </TouchableHighlight>

      </View>
      </View>
    )

}


  }

  const mapStateToProps = (state) => {
    return {
      currentUser: state.userData
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      logOutUser: (data) => {
        dispatch(loginActions.logOutUser(data));
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
