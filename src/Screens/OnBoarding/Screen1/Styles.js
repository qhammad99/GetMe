import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../../values/colors/Colors";

const WIDTH = Dimensions.get('window').width; //to get width of device
const HEIGHT = Dimensions.get('window').height; //to get height of device

const Styles=StyleSheet.create({
    backgroundImage:{
        flex:1,
        backgroundColor: Colors.primary,
        width:'100%',
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
        marginTop:HEIGHT*0.02, 
        marginLeft:10
    },
    descTxt:{
        color: Colors.fullWhite, 
        fontSize:18, 
        marginTop:HEIGHT*0.01, 
        marginLeft:20
    },
    vectorImg:{
        width:HEIGHT*0.2, 
        height: HEIGHT*0.2, 
        marginTop: 10
    },
    logo:{
        width:WIDTH/3, 
        height:(WIDTH/3)/2.525, 
        alignSelf:'flex-end', 
        marginRight:10, 
        marginBottom:30
    }
});

export default Styles;