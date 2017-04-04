import React, {Component} from 'react';
import {Modal, View, Text, TouchableHighlight} from 'react-native'
const {BlurView, VibrancyView} = require('react-native-blur');
import modalStyles from './modalStyle';
import serverPath from '../../config/devProd';
import PathContainer from '../Path/PathContainer'
import {connect} from 'react-redux';
import * as loginActions from '../../actions/loginActions';
import Splash from '../Splash';

class ModalMenu extends Component {

  constructor() {
    super()
    this.state={
      paths:null,
      pathsNumber:null
    }
  }

  componentWillMount() {
    console.log(this.props);
    return fetch(`${serverPath}path`)
    .then((data)=> {
      return data.json()
    }).then(dataJson=> {
      console.log(dataJson)
      this.setState({
        paths: dataJson,
        pathsNumber: dataJson.length
      })
    })
  }

  logOut() {
    this.props.logOutUser();
    this.props.hideNavModal()
    this.props.navigator.push({
      component:Splash,
      navigationBarHidden:true,
    })
  }

  backToPath() {

    this.props.navigator.push({
      component:PathContainer,
      navigationBarHidden:true,
      passProps: {paths:this.state.paths, pathsNumber:this.state.pathsNumber, showNavModal: this.props.showNavModal}
    })
    this.props.hideNavModal();
    }


  render() {


return (

<Modal
        animationType={"slide"}
        transparent={true}
        visible={true}
        onRequestClose={() => {alert("Modal has been closed.")}}
        style={{width:'100%',height:'100%'}}
        >
        <BlurView blurType="dark" blurAmount={10} style={{width:'100%',height:'100%'}}>
       <View style={{marginTop: '50%', alignItems:'center', justifyContent:'center'}}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <TouchableHighlight onPress={()=>{this.backToPath()}}><Text style={modalStyles.basicFont}>Back to Path Select</Text></TouchableHighlight>
          <Text style={modalStyles.basicFont}>Edit Profile</Text>
          <Text style={modalStyles.basicFont}>Video Library</Text>
          <Text style={modalStyles.basicFont}>Visit Leaderboards</Text>
          <TouchableHighlight onPress={()=>{this.logOut()}}><Text style={modalStyles.basicFont}>Logout</Text></TouchableHighlight>
          <TouchableHighlight onPress={() => {
            this.props.hideNavModal()
          }}>
            <Text style={modalStyles.basicFont}>Hide Menu</Text>
          </TouchableHighlight>

        </View>
       </View>
     </BlurView>
      </Modal>
    )

}
    }

    const mapStateToProps = (state) => {
        return {currentUser: state.currentUser, numberAjax: state.numberAjax}
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            logOutUser: () => {
                return dispatch(loginActions.logOutUser());
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(ModalMenu)
