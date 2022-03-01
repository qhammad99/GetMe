import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../../values/colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChangeEmail = props =>{
    const [emailFocus, setEmailFocus]=useState(false);
    const [emailText, setEmailText]=useState('');
    return(
        <View style={{flex:1, padding:20}}>
            <View style={{alignItems:'center', marginTop:10}}>
                <Text style={{color:Colors.primary, fontWeight:'bold', fontSize:18, textDecorationLine:'underline'}}>
                    Current Email: 
                </Text>
                <Text style={{color:Colors.fullBlack, textDecorationLine:'underline', fontSize:16}}>
                        {props.route.params.email}
                </Text>

                <Text style={{color:Colors.Grey, marginTop:30}}> if its not your email, add your new email below.</Text>
            </View>

            {/* Email */}
            <View style={emailFocus ? Styles.emailFocusContainer : Styles.emailContainer}>
                <Ionicons style={Styles.emailIcon} name={"ios-mail"} color={Colors.Grey} size={20}/>
                <TextInput 
                    style={Styles.emailTxt}
                    onFocus={()=>setEmailFocus(true)} 
                    onBlur={()=>setEmailFocus(false)}
                    placeholder="New Email"
                    placeholderTextColor={Colors.lightGrey}
                    defaultValue={emailText}
                    onChangeText={text=>setEmailText(text)}
                />
            </View>

            <TouchableOpacity style={{alignSelf:'center', backgroundColor:Colors.primary,padding:10, borderRadius:10, marginTop:20}} onPress={()=>props.navigation.navigate('Verification',{userName:props.route.params.userName, email: props.route.params.email, password: props.route.params.password})}>
                <Text style={{fontSize:16, fontWeight:'bold', color:Colors.fullWhite}}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const Styles= StyleSheet.create({
    emailContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor: Colors.fullBlack,
        borderBottomWidth: 1,
        justifyContent:'space-between',
        marginTop: 10,
    },
    emailFocusContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        justifyContent:'space-between',
        marginTop: 10,
    },
    emailIcon:{
        flex:0.08
    },
    emailTxt:{
        fontSize: 16,
        flex:1,
        color:Colors.fullBlack
    },
});
export default ChangeEmail;