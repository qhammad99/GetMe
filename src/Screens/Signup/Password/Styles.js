import { StyleSheet } from "react-native";
import Colors from '../../../values/colors/Colors';

const Styles = StyleSheet.create({
    container:{
        padding: 10, 
        flex:1
    },
    logo:{
        width:102, 
        height:40, 
        alignSelf:'flex-start'
    },
    headingTxt:{
        color: Colors.fullBlack, 
        fontSize:34, 
        fontWeight:'bold', 
        marginTop:30, 
        alignSelf:'center'
    },
    fieldsContainer:{ 
        marginTop:20, 
        marginBottom:40
    },
    passwordContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor: Colors.fullBlack,
        borderBottomWidth: 1,
        justifyContent:'space-between',
        marginTop: 20,
    },
    passwordFocusContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        justifyContent:'space-between',
        marginTop: 20,
    },
    passwordIcon:{
        flex:0.08
    },
    passwordTxt:{
        fontSize: 16,
        flex:1,
        color:Colors.fullBlack
    },
    passwordHideIcon:{
        flex:0.08
    },
    termsAndConditions:{
        color: Colors.fullBlack,
        marginTop:5
    },
    loginBtn:{
        backgroundColor:Colors.primary, 
        borderRadius:40, 
        width:'100%', 
        alignSelf:'center'
    },
    loginBtnTxt:{
        textAlign:'center', 
        fontSize:20, 
        color: Colors.fullWhite, 
        paddingVertical:8
    },
    signupBtn:{
        backgroundColor:Colors.noBackground, 
        marginTop:15, 
        borderRadius:40, 
        alignSelf:'center'
    },
    signupBtnTxt:{
        textAlign:'center', 
        fontSize:19, 
        color: Colors.primary
    }
});

export default Styles;