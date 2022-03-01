import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../values/colors/Colors";
const WIDTH = Dimensions.get('window').width; //to get width of device
const HEIGHT = Dimensions.get('window').height; //to get height of device

const Styles = StyleSheet.create({
    container:{
        padding: 10, 
        flex:1
    },
    topDiv:{
        flex:1
    },
    logo:{
        width:WIDTH/2, 
        height:(WIDTH/2)/2.525,  
        marginTop:HEIGHT*0.03, 
        alignSelf:'center'
    },
    vectorImg:{
        width:HEIGHT*0.3, 
        height:HEIGHT*0.29, 
        marginTop:HEIGHT*0.02, 
        alignSelf:'center'
    },
    bottomDiv:{
        marginBottom:HEIGHT*0.01
    },
    signupBtn:{
        backgroundColor: Colors.primary, 
        borderRadius:40, 
        width:'100%', 
        alignSelf:'center', 
        paddingVertical:HEIGHT*0.009
    },
    signupBtnTxt:{
        textAlign:'center', 
        fontSize:20, 
        color:Colors.fullWhite
    },
    googleBtn:{
        backgroundColor:Colors.noBackground, 
        marginTop:15,
        borderWidth:1, 
        borderRadius:40, 
        width:'100%', 
        alignSelf:'center', 
        paddingVertical:HEIGHT*0.009
    },
    googleBtnTxt:{
        textAlign:'center', 
        fontSize:19, 
        color: Colors.lightGrey
    },
    signinBtn:{
        backgroundColor:Colors.noBackground, 
        marginTop:15, 
        borderRadius:40, 
        alignSelf:'center', 
        paddingVertical:8
    },
    signinBtnTxt:{
        textAlign:'center', 
        fontSize:19, 
        color:'#d60000'
    }
});

export default Styles;