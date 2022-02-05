import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';


const MainScreen =()=>{
    return(
        <View style={{padding: 10, flex:1}}>
            <View style={{flex:1}}>
                <Image style={{width:202, height:80, marginTop:50, alignSelf:'center'}} source={require("../../Images/redLogo.png")}/>
                <Image style={{width:265, height:250, marginTop:50, alignSelf:'center'}} source={require("../../Images/login.png")}/>
            </View>
            <View style={{marginBottom:10}}>
                <TouchableOpacity style={{backgroundColor:'#d60000', borderRadius:40, width:'100%', alignSelf:'center', paddingVertical:5}}>
                    <Text style={{textAlign:'center', fontSize:20, color:'white'}}>Get Join</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#00000000', marginTop:15,borderWidth:1, borderRadius:40, width:'100%', alignSelf:'center', paddingVertical:5}}>
                    <Text style={{textAlign:'center', fontSize:19, color: '#757575'}}>Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#00000000', marginTop:15, borderRadius:40, alignSelf:'center', paddingVertical:5}}>
                    <Text style={{textAlign:'center', fontSize:19, color:'#d60000'}}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MainScreen;