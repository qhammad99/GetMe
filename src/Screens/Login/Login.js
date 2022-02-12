import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import Styles from './Styles';
import Colors from '../../values/colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login=({navigation})=>{
    const [emailText, setEmailText]=useState('');
    const [passText, setPassText]=useState('');
    const [emailFocus, setEmailFocus]=useState(false);
    const [passFocus, setPassFocus]=useState(false);

    const [passwordVisible, setPasswordVisible]=useState(false);
    return(
        <View style={Styles.container}>
            <View style={Styles.topDiv}>
                {/* logo */}
                <Image style={Styles.logo} source={require("../../Images/smallLogo.png")}/>
                
                {/* login label */}
                <Text style={Styles.headingTxt}> Sign in </Text>
                
                {/* input fields */}
                <View style={Styles.fieldsContainer}>

                    {/* Email */}
                    <View style={emailFocus ? Styles.emailFocusContainer : Styles.emailContainer}>
                        <Ionicons style={Styles.emailIcon} name={"ios-mail"} color={Colors.Grey} size={20}/>
                        <TextInput 
                            style={Styles.emailTxt}
                            onFocus={()=>setEmailFocus(true)} 
                            onBlur={()=>setEmailFocus(false)}
                            placeholder="Email"
                            placeholderTextColor={Colors.lightGrey}
                            defaultValue={emailText}
                            onChangeText={text=>setEmailText(text)}
                        />
                    </View>

                    {/* password input */}
                    <View style={passFocus ? Styles.passwordFocusContainer : Styles.passwordContainer}>
                        <Ionicons style={Styles.passwordIcon} name={"ios-key"} color={Colors.Grey} size={20}/>
                        <TextInput 
                            style={Styles.passwordTxt} 
                            placeholder="Password"
                            onFocus={()=>setPassFocus(true)}
                            onBlur={()=>setPassFocus(false)}
                            placeholderTextColor={Colors.lightGrey}
                            secureTextEntry={!passwordVisible}
                            defaultValue={passText}
                            onChangeText={pass=>setPassText(pass)} 
                        />
                        <TouchableOpacity style={Styles.passwordHideIcon} onPress={()=>passwordVisible?setPasswordVisible(false):setPasswordVisible(true)}>
                            <Ionicons name={passwordVisible?"ios-eye-off":"ios-eye"} color={Colors.Grey} size={20}/>
                        </TouchableOpacity>
                    </View>

                    {/* forgot password button */}
                    <View style={Styles.forgotPwdBtn}>
                        <TouchableOpacity>
                            <Text style={Styles.forgotPwdBtnTxt}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* login button */}
                <TouchableOpacity style={Styles.loginBtn} onPress={()=>navigation.navigate('Landing')}>
                    <Text style={Styles.loginBtnTxt}>Sign in</Text>
                </TouchableOpacity>

                {/* separator */}
                <Text style={Styles.separator}>
                    ─────────────    or    ─────────────
                </Text>

                {/* google button */}
                <TouchableOpacity style={Styles.googleBtn}>
                    <Text style={Styles.googleBtnTxt}>Continue with Google</Text>
                </TouchableOpacity>
            </View>

            {/* signup btn */}
            <View style={Styles.bottomDiv}>
                <TouchableOpacity style={Styles.signupBtn} onPress={()=>navigation.navigate('NameEmail')}>
                    <Text style={Styles.signupBtnTxt}>Create New Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;