import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../../values/colors/Colors";

// const WIDTH = Dimensions.get('window').width; //to get width of device
// const HEIGHT = Dimensions.get('window').height; //to get height of device

const Styles=StyleSheet.create({
    backgroundImage:{
        flex:1,
        backgroundColor: Colors.primary
    },
    topDiv:{
        flex:1
    },
    skipBtn:{
        alignSelf:'flex-end', 
        marginRight:18, 
        marginTop: 10, 
        padding:10, 
        backgroundColor: Colors.primary
    },
    skipBtnTxt:{
        fontWeight:'bold', 
        color: Colors.fullWhite, 
        fontSize:16
    },
    mainHeading:{
        color: Colors.fullWhite, 
        fontSize:40, 
        fontWeight:'bold', 
        marginTop:30, 
        marginLeft:10
    },
    descTxt:{
        color: Colors.fullWhite, 
        fontSize:18, 
        marginTop:20, 
        marginLeft:20
    },
    vectorImg:{
        width:200, 
        height: 200, 
        marginTop: 10
    },
    logo:{
        width:202, 
        height:80, 
        alignSelf:'flex-end', 
        marginRight:10, 
        marginBottom:30
    }
});

export default Styles;