import {StyleSheet} from 'react-native';
import Colors from '../../values/colors/Colors';

const styles = StyleSheet.create({
    ratingContainer:{
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center'
    },
    star:{
        marginHorizontal:0.5
    },
    ratingCount:{
        color:Colors.fullBlack,
        marginLeft:2,
        fontWeight:'bold',
        fontStyle:'italic'
    },
});

export default styles;