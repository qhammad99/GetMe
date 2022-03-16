import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../../values/colors/Colors';

let deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:Colors.fullWhite,
        paddingBottom:20
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
        borderBottomColor: Colors.fullWhite,
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
        borderColor:Colors.lightestGrey, 
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
    name:{
        color:Colors.textBlack, 
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
        color:Colors.textLight, 
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
        color:Colors.textLight, 
        fontSize:13, 
        textAlign:'center',
        paddingLeft:7
    },
    connectionAndInfoContainer:{
        flexDirection:'row'
    },
    connectionsBtn:{
        color:Colors.linkColor, 
        fontSize:12, 
        marginTop:2
    },
    infoBtn:{
        color:Colors.linkColor, 
        fontSize:12, 
        marginTop:2,
        marginLeft:15
    },
    mainSkillContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
    },
    mainSkillText:{
        color:Colors.textBlack,
        fontSize:18,
        textTransform:'uppercase',
        fontFamily: 'SourceSerif4_48pt-Bold',
    },
    buttonsContainer:{
        flexDirection:'row',
        marginTop:12, 
        justifyContent:'space-between',
        marginHorizontal:30
    },
    highlightedButton:{
        paddingHorizontal:12,
        paddingVertical:5,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    highlightedText:{
        color:Colors.fullWhite,
        fontStyle:'italic'
    },
    outlinedButton:{
        paddingHorizontal:15,
        paddingVertical:5,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    outlinedButtonBorder:{
        borderWidth:0.5,
        borderRadius:100,
        borderColor:Colors.lightestPrimary
    },
    outlinedText:{
        color:Colors.primary,
        fontStyle:'italic'
    },
    adContainer:{
        backgroundColor:Colors.zeroGrey,
        borderRadius:10,
        marginHorizontal:10,
        marginVertical:15,
        padding:10,
        width:deviceWidth*0.7,
        alignItems:'center',
        justifyContent:'center'
    },
    heading:{
        color:Colors.lightPrimary,
        fontSize:14
    },
    caption:{
        color:Colors.textLight,
    },
    getStartBtn:{
        color:Colors.lightPrimary,
        fontSize:13,
        textDecorationLine:'underline',
        fontWeight:'bold',
    },
    aboutContainer:{
        width:'100%',
        paddingHorizontal:10,
        alignItems:'center'
    },

    aboutHeading:{
        color:Colors.primary,
        fontSize:18,
        fontFamily: 'Poppins-Medium'
        // fontFamily:'SansitaSwashed-Regular'
    },
    aboutTextContainer:{
        backgroundColor:Colors.zeroGrey,
        borderLeftWidth:3,
        paddingHorizontal:12,
        paddingVertical:3,
        borderLeftColor:Colors.lightestPrimary,
    },
    aboutText:{
        marginTop:5,
        color:Colors.textLight,
        fontSize:14,
        textAlign:'justify',
        lineHeight:16,
        fontStyle:'italic'
    },

    cardContainer:{
        marginTop:15,
        paddingTop:8,
        padding:10,
        marginHorizontal:5,
        // shadowColor:Colors.fullBlack,
        // shadowOffset:{
        //     width:0,
        //     height:3
        // },
        // shadowOpacity: 0.27,
        // shadowRadius:4.6,
        // elevation:2,
        borderWidth:0.5,
        borderColor:Colors.lightestGrey,
        borderRadius:5
    },
    containerHeading:{ 
        color:Colors.primary,
        paddingLeft:10,
        marginBottom:5,
        fontSize:18,
        fontFamily: 'Poppins-Medium'
        // fontFamily:'SansitaSwashed-Regular'
    },
    swiperContainer:{
        height:140,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:Colors.primary,
        fontSize:40,
        fontWeight:'bold'
    },
    slide: {
        height:130,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding:5,
      },
      text: {
        color: Colors.textLight,
        fontSize: 14,
        fontStyle:'italic'
      },
      slideImage:{
        height:'100%',
        resizeMode:'contain'
      },
      smallSizeContainer:{
          flexDirection:'row',
          alignItems:'center',
          paddingLeft:10
      },
      smallSizeText:{
          fontSize:10,
          paddingLeft:5,
          color:Colors.lightGrey
      },
      viewsContainer:{
          flexDirection:'row',
          padding:10,
          justifyContent:'space-between'
      },
      viewItemContainer:{
          width:'49%',
          alignItems:'center'
      },
      viewItemCount:{
        color : Colors.textBlack,
        fontSize:16,
        marginLeft:5,
        marginTop:5,
        fontFamily: 'Poppins-Medium'
    },
    viewItemHeading:{
        color: Colors.textBlack,
        fontSize:14,
        textAlign:'center',
        fontFamily: 'Poppins-Medium'
      },
      viewItemSubHeading:{
        color:Colors.textLight,
        textAlign:'center',
        fontSize:12,
        marginTop:-5
      },
      skillViewsContainer:{
        flexDirection:'row',
        padding:10,
        flexWrap:'wrap'
    },
    skillContainer:{
        backgroundColor:Colors.lightPrimary,
        paddingVertical:3,
        paddingHorizontal:15,
        borderRadius:10,
        marginVertical:3,
        marginHorizontal:5
    }

});

export default styles;