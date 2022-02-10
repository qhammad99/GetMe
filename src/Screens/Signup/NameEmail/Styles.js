import { StyleSheet } from "react-native";
import Colors from '../../../values/colors/Colors';

const Styles = StyleSheet.create({
    container:{
        padding: 10, 
        flex:1
    },
    topDiv:{
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
    nameContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor: Colors.fullBlack,
        borderBottomWidth: 1,
        justifyContent:'space-between',
        marginTop: 10,
    },
    nameFocusContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        justifyContent:'space-between',
        marginTop: 10,
    },
    nameIcon:{
        flex:0.08
    },
    nameTxt:{
        fontSize: 16,
        flex:1,
        color:Colors.fullBlack
    },
    emailContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor: Colors.fullBlack,
        borderBottomWidth: 1,
        justifyContent:'space-between',
        marginTop: 10,
    },
    emailFocusContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        justifyContent:'space-between',
        marginTop: 10,
    },
    emailIcon:{
        flex:0.08
    },
    emailTxt:{
        fontSize: 16,
        flex:1,
        color:Colors.fullBlack
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
    separator:{
        marginVertical: 20, 
        textAlign: 'center', 
        color: Colors.lightGrey 
    },
    googleBtn:{
        backgroundColor:Colors.noBackground, 
        borderWidth:1, 
        borderRadius:40, 
        width:'100%', 
        alignSelf:'center'
    },
    googleBtnTxt:{
        textAlign:'center', 
        fontSize:19, 
        color: Colors.lightGrey, 
        paddingVertical:8
    },
    bottomDiv:{
        marginBottom:2
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