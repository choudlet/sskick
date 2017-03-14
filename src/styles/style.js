import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerImage: {
    flex: 1,
      // remove width and height to override fixed static size
      width: null,
      height: null,
  },

  borderLine:{
    width: 100,
    height: 1,
    backgroundColor: 'white',
    flex:0
  },

  colorContainer: {
    flex:1,
    backgroundColor: 'rgba(0,0,0,.6)'
  },

  flexCenter: {
    flex: 1, flexDirection:'row', justifyContent:'center',
  },
});
