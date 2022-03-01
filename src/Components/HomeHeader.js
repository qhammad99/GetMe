import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Colors from '../values/colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeHeader = props => {
    return(
        <View style={{width:'100%', height: '100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <TouchableOpacity style={{borderRadius:50}}>
            {/* <TouchableOpacity style={{borderRadius:50}} onPress={()=>props.drawer.openDrawer()}> */}
                <Image style={{width: 40, height: 40}} source={require('../Images/userAvatar.png')}/>
            </TouchableOpacity>
            <View style={{backgroundColor:Colors.lightestGrey, width: '70%', borderRadius:30, flexDirection:'row', alignItems:'center', paddingLeft:10}}>
            <Ionicons name={"ios-search"} color={Colors.lightGrey} size={18}/>
                <TextInput
                    placeholder="Search"
                    placeholderTextColor={Colors.Grey} 
                    style={{width:'90%',  color:Colors.Grey,  height:40, paddingHorizontal:5}}
                />
            </View>
            <TouchableOpacity>
                <Ionicons name={"ios-chatbubbles"} color={Colors.lightGrey} size={25}/>
            </TouchableOpacity>
        </View>
    );
}

export default HomeHeader;