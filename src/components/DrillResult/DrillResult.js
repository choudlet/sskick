import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import NavBar from '../shared/NavBar';
import drillResultStyles from './DrillResultStyle';
import DrillLaunch from '../DrillLaunch/DrillLaunch'
import SkillView from '../Skill/SkillView';
import Spinner from 'react-native-spinkit';
import {connect} from 'react-redux';
import * as leaderboardActions from '../../actions/leaderboardActions';
import ModalMenu from '../shared/ModalMenu'
import serverPath from '../../config/devProd';

class DrillResult extends Component {

    constructor(props) {
        super(props)
        this.state = {
            minutes: undefined,
            seconds: undefined,
            imageLoad: false,
            completed: false,
            trainingSessions: null,
            trainingTime:null
        }
    }

    imageLoadSuccess() {
        this.setState({imageLoad: true})
    }

    componentWillMount() {
        this.formatTime(this.props.remainingTime, this.props.totalTime)
    }

    showNavModal() {
      console.log('Running Show')
        this.setState({
          modalVisible: true,
        })
      }

      hideNavModal() {
        console.log('Running Hide')
        this.setState({
          modalVisible:false
        })
      }


    formatTime(remainingTime, totalTime) {
        let time = totalTime - remainingTime
        let completedUpdate = false
        let minutesRemaining;
        let secondsTime
        if (remainingTime == 0) {
            completedUpdate = true
        }

        if (time % 60000 != time) {
            minutesRemaining = Math.floor(time / 60000).toString();
            if (minutesRemaining.length == 1) {
                minutesRemaining = '0' + minutesRemaining
            }
            minutesSubtraction = minutesRemaining * 60000
            secondsTime = Math.floor((time - minutesSubtraction) / 1000).toString();
            if (secondsTime.length == 1) {
                secondsTime = '0' + secondsTime
            }
        } else if (time % 60000 == time) {
            minutesRemaining = '00';
            secondsTime = Math.floor((time / 1000)).toString();
            if (secondsTime.length == 1) {
                secondsTime = '0' + secondsTime
            }
        }
        this.setState({
            minutes: minutesRemaining,
            seconds: secondsTime
        }, () => {
            this.submitLeader()
        })

    }

    transitionToLevel() {
        return fetch(`${serverPath}level/${this.props.levelId}`).then((data) => {
            return data.json()
        }).then(dataJson => {
            this.setState({selectedLevelandSkills: dataJson[0]})
            this.props.navigator.push({
                component: SkillView,
                navigationBarHidden: true,
                passProps: {
                    selectedLevelandSkills: this.state.selectedLevelandSkills
                }
            })
        })
    }

    transitionToDrill() {
        this.props.navigator.push({
            component: DrillLaunch,
            navigationBarHidden: true,
            passProps: {
                currentDrill: this.props.drill,
                levelImageUrl: this.props.levelImageUrl
            }
        })
    }

    submitLeader() {
        let trainingRecord = {
            user_id: this.props.currentUser.id,
            drill_id: this.props.drill.id,
            minutes: this.state.minutes,
            seconds: this.state.seconds,
            completed: this.state.completed
        }
        this.props.createLeaderEntry(trainingRecord).then((data)=>{
          this.setState({
            trainingSessions: data.trainingSessions,
            trainingTime: data.formattedTime
          })
        });
    }

render() {
    return (

        <View>
            <NavBar navigator={this.props.navigator} showNavModal={this.showNavModal.bind(this)}/>
            <Image source={require('../../assets/images/stadium.jpg')} style={{
                width: '100%',
                height: '100%'
            }}>
                {this.state.imageLoad
                    ? null
                    : <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Spinner size={100} color='#64AE20' style="Wave" style={{
                            marginTop: '50%'
                        }}/>
                    </View>
}
                <View style={{
                    opacity: this.state.imageLoad
                        ? 1
                        : 0
                }}>
                    <Image source={{
                        uri: this.props.levelImageUrl
                    }} style={drillResultStyles.backgroundImage} onLoad={() => this.imageLoadSuccess()}>
                        <View style={drillResultStyles.magicWrapper}>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'transparent'
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                    marginTop: 20,
                                    width: '80%'
                                }}>
                                    <Text style={{
                                        fontSize: 30,
                                        fontFamily: 'Octin Sports',
                                        color: 'white'
                                    }}>Skill Complete!</Text>
                                    <Text style={{
                                        fontSize: 15,
                                        color: 'white'
                                    }}>You Practiced the {this.props.drill.name} for: </Text>
                                    <Text style={{
                                        fontSize: 20,
                                        color: 'white',
                                        marginTop: 10
                                    }}>{this.state.minutes}
                                        : {this.state.seconds}</Text>
                                </View>
                                <View style={{
                                    marginTop: 60,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <View style={{alignItems:'center', justifyContent:'center', width:'80%'}}>
                                <Text style={{textAlign:'center', color:'white'}}>You have practiced the {this.props.drill.name} {this.state.trainingSessions} time(s) for a total duration of:</Text>
                                {this.state.trainingTime && this.state.trainingTime.length == 2?<Text style={{textAlign:'center', color:'white'}}>{this.state.trainingTime[0]}{String.fromCharCode(58)}{this.state.trainingTime[1]}</Text>:null}
                                </View>
                                    <TouchableHighlight style={{
                                        marginTop: 20
                                    }} onPress={() => {
                                        this.transitionToDrill()
                                    }}>
                                        <View style={drillResultStyles.borderBox}>
                                            <Text style={{
                                                color: 'white'
                                            }}>Practice Again</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={{
                                        marginTop: 20
                                    }} onPress={() => this.transitionToLevel()}>
                                        <View style={drillResultStyles.borderBox}>
                                            <Text style={{
                                                color: 'white'
                                            }}>Back to Level</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={{
                                        marginTop: 20
                                    }}>
                                        <View style={drillResultStyles.borderBox}>
                                            <Text style={{
                                                color: 'white'
                                            }}>Check Leaderboard</Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
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

const mapStateToProps = (state) => {
return {currentUser: state.currentUser, numberAjax: state.numberAjax}
}

const mapDispatchToProps = (dispatch) => {
return {
    createLeaderEntry: (data) => {
        return dispatch(leaderboardActions.createLeaderEntry(data));
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(DrillResult)
