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
    marginTop:20,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'rgba(39,39,41,.6)',
    width: '80%',
    padding:10
  },
  headText: {
    fontFamily: 'Octin Sports',
    fontSize: 20,
    color: 'white'
  },
  paragraphText: {
    textAlign: 'center',
    color:'white'
  },
  pathImage: {
    marginTop:20,
    height:200,
    width: '80%',
    resizeMode: 'stretch',
    justifyContent:'center',
    alignItems:'flex-start'
  },
  pathName: {
    marginLeft:10,
    fontFamily: 'Octin Sports',
    fontSize:20
  }

});
