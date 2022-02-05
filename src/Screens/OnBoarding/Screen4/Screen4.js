import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const Screen4=({navigation})=>{
    return(
        <>
            <View style={{flex:1, justifyContent:'center', padding:10}}>
                <Text style={{fontSize:20, textAlign:'center', color:'#757575'}}>Find jobs {'\n\n'} follow your interested companies and look for suitable opportunity from they</Text>
            </View>
            <TouchableOpacity style={{backgroundColor:'#d60000', borderRadius:40, width:'50%', alignSelf:'flex-end', paddingVertical:5, marginBottom:50, marginRight:20}} onPress={()=>navigation.navigate('MainScreen')}>
                    <Text style={{textAlign:'center', fontSize:20, color:'white'}}>Let's Start</Text>
            </TouchableOpacity>
        </>
    );

};

export default Screen4;