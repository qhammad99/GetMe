import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../../values/colors/Colors';

let deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:Colors.fullWhite,  
        height:Dimensions.get('window').height
    },
    coverPhotoContainer:{ 
        width:'100%', 
        position:'absolute'
    },
    coverPhoto:{
        left: 0,
        width: '100%',
        height: 150,
        justifyContent: 'center', 
        alignSelf: 'center'
    },
    coverPhotoBottom:{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: deviceWidth,
        borderLeftWidth: 0,
        borderBottomWidth: 30,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#fff',
    },
    customizeIconContainer:{
        alignSelf:'flex-end',
        position:'absolute',
        marginRight:5,
        zIndex:1
    },
    customizeIcon:{
        width:30,
        height:30,
        resizeMode:'contain'
    },
    profileContainer:{
        width:'100%', 
        marginTop:90,
        flexDirection:'row',
        justifyContent:'space-between', 
        alignItems:'center',
        paddingHorizontal:8
    },
    profilePhotoBorder:{
        width:105, 
        height:145, 
        borderRadius:5,
        borderWidth:5, 
        borderColor:'rgba(0,0,0,0.3)', 
        justifyContent:'center', 
        alignItems:'center'
    },
    profilePhoto:{
        width:100, 
        height:140, 
        borderRadius:5
    },
    nameAndBioContainer:{
        marginTop:50,
        flex:1,
        paddingLeft:10
    },
    name:{
        color:'#4a4a4a', 
        fontSize:20, 
        fontWeight:'bold',
        marginRight:30
    },
    status:{
        alignItems:'center', 
        flexDirection:'row',
        marginTop:4
    },
    statusText:{
        color:'grey', 
        fontSize:14, 
        textAlign:'center',
        paddingLeft:5
    },
    location:{
        alignItems:'center', 
        flexDirection:'row',
        marginTop:2
    },
    locationText:{
        color:'grey', 
        fontSize:13, 
        textAlign:'center',
        paddingLeft:7
    },
    connectionAndInfoContainer:{
        flexDirection:'row'
    },
    connectionsBtn:{
        color:'#2A6F99', 
        fontSize:12, 
        marginTop:2
    },
    infoBtn:{
        color:'#007aff', 
        fontSize:12, 
        marginTop:2,
        marginLeft:15
    },
    buttonsContainer:{
        flexDirection:'row',
        marginTop:15, 
        justifyContent:'space-between',
        marginHorizontal:10
    },
    highlightedButton:{
        backgroundColor:'red',
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    }

});

export default styles;