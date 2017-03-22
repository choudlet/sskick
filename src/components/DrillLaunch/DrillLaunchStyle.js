import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  magicWrapper: {
    backgroundColor: 'rgba(39,39,41,.7)',
    height:'100%',
    width:'100%',
    justifyContent:'flex-start',
  },
  topContainer: {
    flex:1, justifyContent:'space-around'
  },
  accentText: {
      color: '#64AE20',
      fontSize:20,
      marginLeft:'10%'
  },
  drilLText: {
    fontFamily:'Octin Sports',
    color: 'white',
    fontSize:30,
    marginLeft:'10%'
  },
  bottomIcon: {
    fontSize:15,
    color:'white'
  },
  startContainer: {
    marginTop:10,
    width:'80%',
    height:80,
    borderWidth:5,
    borderColor:'white',
    alignItems: 'center',
    justifyContent:'center'
  }

});
