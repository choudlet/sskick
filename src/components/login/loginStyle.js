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

  flexStart: {
    flex: 1, flexDirection:'row', justifyContent:'flex-start',
  },

  centerBox: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  basicRow: {
    flex:1,
    flexDirection:'row'
  },
  alignText: {
    flexDirection:'row', alignItems:'center', justifyContent:'flex-start', marginLeft:50
  },
  centeredRow: {
    flex:1, justifyContent:'center', alignItems:'flex-start'
  }
});
