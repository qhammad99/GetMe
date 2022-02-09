import { StyleSheet } from "react-native";
import Colors from "../../values/colors/Colors";

const Styles = StyleSheet.create({
    container:{
        padding: 10, 
        flex:1
    },
    topDiv:{
        flex:1
    },
    logo:{
        width:202, 
        height:80, 
        marginTop:50, 
        alignSelf:'center'
    },
    vectorImg:{
        width:265, 
        height:250, 
        marginTop:50, 
        alignSelf:'center'
    },
    bottomDiv:{
        marginBottom:10
    },
    signupBtn:{
        backgroundColor: Colors.primary, 
        borderRadius:40, 
        width:'100%', 
        alignSelf:'center', 
        paddingVertical:8
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
        paddingVertical:8
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