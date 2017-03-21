import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerImage: {
      // remove width and height to override fixed static size
      width: '100%',
      height: '100%',
      justifyContent:'flex-start',
      alignItems:'center'
  },
  magicWrapper: {
    backgroundColor: 'rgba(39,39,41,.7)',
    height:'100%',
    width:'100%',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  introWrapper: {
    justifyContent:'center',
    alignItems:'center',
    width: '80%',
    marginTop: '15%',
    padding:10
  },
  levelText: {
    color: '#64AE20',
    marginRight:'40%',
    fontSize:15
  },
  levelNameText: {
    color:'white',
    fontFamily: 'Octin Sports',
    fontSize:30
  },
  skillContainer: {
    width:'80%',
    height:60,
    justifyContent:'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginTop:10,
    marginBottom:10
  },
  centerSkills: {
    justifyContent: 'center',
    alignItems:'center'
  },
  skillText: {
    marginLeft: '5%',
    fontFamily: 'Octin Sports',
    fontSize:20
  }


});
