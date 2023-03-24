import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
    },
    mainFlatListContainer:{
        width:'97%',
        justifyContent:'center',
        marginVertical:20,
        marginLeft:5
    },

    ////  Header
    header:{
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      height:'10%',
      backgroundColor:'green',
  },
  headerText:{
      fontWeight:'bold',
      fontSize:20,
      color:'white',
      marginTop:20,
  },


  // Date Picker
    datePickerContainer:{
        width:'100%',
        justifyContent:'center'
    },
    datePickerButton:{
      width:'85%',
      padding:10,
      borderRadius:5,
      backgroundColor:'green',
      alignSelf:'center',
    },
    datePickerButtonText:{
      textAlign:'center',
      color:'white'
    },


    mainQuestionText:{
        textAlign:'center',
        color:'black',
        fontSize:20,
        margin:5,
        padding:5,
    },



     //RadioButtons --TouchabelOpacity
     radioButtonViewContainer:{
        width: width/2.1, 
        marginLeft:1
     },
     radioButtonTouchableContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: '48%',
      },
      radioButton: {
        height: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',

        width:'205%'

      },
      radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: '#000',
      },
      radioButtonLabel: {
      },

      // DropDown Picker
      pickerContainer:{
        borderRadius:5,
        borderWidth:1,
        borderColor:'#AEAEB3',
        justifyContent:'center',
        alignItems:'center'
      },
      picker:{
        backgroundColor:'#EAEAEA',
        width:"99.5%"
      },
      pickerItems:{
        borderRadius:15,
        borderWidth:1,
        borderColor:'black'
      },


       /// Bottom Next Button
      bottomButtonContainer:{
        width:'100%',
      },
      bottomButton:{
        width:width,
        padding:10,
        borderRadius:5,
        backgroundColor:'green',
        alignSelf:'center',
        bottom:5
      },
      bottomButtonText:{
        textAlign:'center',
        color:'white'
      },
   
});

export { Styles }  
