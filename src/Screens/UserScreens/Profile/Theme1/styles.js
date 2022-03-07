import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../../values/colors/Colors';

let deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:Colors.lightestGrey, 
        position:'relative'
    },
    topDiv:{
        width:'100%', 
        backgroundColor:Colors.fullWhite, 
        paddingBottom:5, 
        borderBottomEndRadius:10, 
        borderBottomStartRadius:10
    },
    coverPhotoContainer:{ 
        width:'100%', 
        position:'relative'
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
        borderBottomWidth: 20,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#fff',
    }
});

export default styles;