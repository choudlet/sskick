import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerImage: {
      // remove width and height to override fixed static size
      width: '100%',
      height: 200,
  },
  introContainer: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'rgba(39,39,41,.7)',
    marginTop:'15%',
    width: '50%',
    height:80,
    padding:10,
    marginLeft:40
  },
  levelText: {
    color:'white',
  },
  levelNameText: {
    color:'white',
    fontFamily: 'Octin Sports',
    fontSize:20
  },


});
