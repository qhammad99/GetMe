import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../../values/colors/Colors';

const Screen3=({navigation})=>{
    return(
        <>
            <TouchableOpacity style={{alignSelf:'flex-end', marginRight:18, marginTop: 10, padding:10, backgroundColor: Colors.primary}} onPress={()=>navigation.navigate('MainScreen')}>
                <Text style={{fontWeight:'bold', color: Colors.fullWhite, fontSize:16}}>Skip</Text>
            </TouchableOpacity>
            
            <View style={{flex:1, justifyContent:'center', padding:10}}>
            <Text style={{fontSize:20, textAlign:'center', color:'#757575'}}>
                Connect with world {'\n\n'} make connection with friends and see whats they doing
            </Text>
        </View>
        </>
        
    );

};

export default Screen3;