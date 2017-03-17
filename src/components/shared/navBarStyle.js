import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  navBar: {
      // remove width and height to override fixed static size
      width: null,
      height: 60,
      backgroundColor: "#292832",
      flexDirection: 'row',
      alignItems:'center'
  },

  soccer: {
    color:'white'
  },
  arrow: {
    color:'white'
  },
  textStyle: {
    color:'white',
    fontFamily: 'Octin Sports',
    fontSize:20
  },
  container: {
    width:'33%',
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center'
  }
});
