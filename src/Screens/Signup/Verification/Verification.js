import React from 'react';
import {Text, View, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import Colors from '../../../values/colors/Colors';

const Verification = props =>{
    return(
        <View style={{padding:20, flex:1}}>
        
        <View style={{flex:1}}>
            <Image source={require('../../../Images/verfication2.png')} style={{height:175, width:300, alignSelf:'center'}}/>
            <Text style={{color:Colors.fullBlack, fontSize:16, textAlign:'center', lineHeight:25, marginTop:10}}>We send verification link to your provided email, please verify it to continue.</Text>
            <Text style={{color:Colors.Grey, fontSize:12, textAlign:'center', marginTop:20}}>After verification click on below 'Continue' Button</Text>

            <TouchableOpacity style={{alignSelf:'center', backgroundColor:Colors.primary,padding:10, borderRadius:10, marginTop:20}} onPress={()=>props.navigation.navigate('Landing')}>
                <Text style={{fontSize:16, fontWeight:'bold', color:Colors.fullWhite}}>Continue</Text>
            </TouchableOpacity>

            {/* separator */}
            <Text style={{marginVertical: 20, textAlign: 'center', color: Colors.lightGrey }}>
                ─────────────    or    ─────────────
            </Text>

            <TouchableOpacity style={{alignSelf:'center', borderWidth:2, borderColor:Colors.Grey, padding:10, borderRadius:10}} onPress={()=>ToastAndroid.show("Verification Sended", ToastAndroid.SHORT)}>
                <Text style={{fontSize:16, fontWeight:'bold', color:Colors.primary}}>Resend Verification</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity style={{backgroundColor:Colors.noBackground, alignSelf:'center'}} onPress={()=>props.navigation.navigate('ChangeEmail',{userName:props.route.params.userName, email: props.route.params.email, password: props.route.params.password})}>
                <Text style={{textAlign:'center', fontSize:16, color: Colors.primary, fontWeight:'bold'}}>Change Email</Text>
            </TouchableOpacity>
        </View>

        </View>
    );
};

export default Verification;