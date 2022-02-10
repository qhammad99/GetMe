import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import Styles from './Styles';
import Colors from '../../../values/colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NameEmail=({navigation})=>{
    const [emailText, setEmailText]=useState('');
    const [nameText, setNameText]=useState('');
    const [emailFocus, setEmailFocus]=useState(false);
    const [nameFocus, setNameFocus]=useState(false);

    return(
        <View style={Styles.container}>
            <View style={Styles.topDiv}>
                {/* logo */}
                <Image style={Styles.logo} source={require("../../../Images/smallLogo.png")}/>
                
                {/* signup label */}
                <Text style={Styles.headingTxt}> Get into GetMe </Text>
                
                {/* input fields */}
                <View style={Styles.fieldsContainer}>
                    {/* User Name */}
                    <View style={nameFocus ? Styles.nameFocusContainer : Styles.nameContainer}>
                        <Ionicons style={Styles.nameIcon} name={"ios-person"} color={Colors.Grey} size={20}/>
                        <TextInput 
                            style={Styles.emailTxt}
                            onFocus={()=>setNameFocus(true)} 
                            onBlur={()=>setNameFocus(false)}
                            placeholder="User Name"
                            placeholderTextColor={Colors.lightGrey}
                            defaultValue={nameText}
                            onChangeText={text=>setNameText(text)}
                        />
                    </View>

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
                </View>
                {/* continue button */}
                <TouchableOpacity style={Styles.loginBtn} onPress={()=>navigation.navigate('Password',{userName:nameText, email: emailText})}>
                    <Text style={Styles.loginBtnTxt}>Continue</Text>
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
                <TouchableOpacity style={Styles.signupBtn} onPress={()=>navigation.navigate('Login')}>
                    <Text style={Styles.signupBtnTxt}>Already have an account?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default NameEmail;