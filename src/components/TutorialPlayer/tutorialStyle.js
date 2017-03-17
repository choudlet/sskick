import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerImage: {
    flex: 1,
      // remove width and height to override fixed static size
      width: null,
      height: null,
      alignItems:'center'
  },
  borderLine:{
    width: 100,
    height: 1,
    backgroundColor: 'white',
    flex:0,
    marginBottom:10
  },
  introContainer: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'rgba(39,39,41,.6)',
    marginTop:'15%',
    width: '80%',
    padding:10
  },
  headlineText: {
    fontFamily: 'Octin Sports',
    fontSize:20,
    color:'white',
    marginBottom:10
  },
  paragraphText: {
    color:'white',
    textAlign:'center'
  }
});
