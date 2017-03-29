import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerImage: {
      // remove width and height to override fixed static size
      width: '100%',
      height: '100%',
      flex:1,
      backgroundColor: 'rgba(39,39,41,.8)'
  },
  mainContent: {
    backgroundColor:'transparent',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
    height:'100%'
  },
  headerText: {
    fontFamily: 'Octin Sports',
    fontSize:25,
    marginTop:'10%',
    color:'white'
  },
  textInput: {
    marginTop:'5%',
    height: '18%',
    width:'60%',
    borderColor: 'white',
    borderWidth: 1,
    color:'white',
    textAlign:'center',
    alignSelf:'center'
  },
  darkenBox: {
    flex:1,
    backgroundColor: 'rgba(39,39,41,.8)'
  },
  borderLine:{
    width: 100,
    height: 1,
    backgroundColor: 'white',
    flex:0
  },
  buttonBorder: {
    borderWidth:1,
    borderColor:'white'
  },
  buttonText: {
    fontFamily:'Octin Sports',
    fontSize:20,
    padding:'5%',
    color:'white'
  }




});
