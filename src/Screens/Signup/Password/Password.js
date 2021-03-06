import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, TextInput, ToastAndroid, AlertIOS, Modal, ActivityIndicator} from 'react-native';
import Styles from './Styles';
import Colors from '../../../values/colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import URLs from '../../../values/colors/URLs';

const Password=(props)=>{
    const [passText, setPassText]=useState('');
    const [cPassText, setCPassText]=useState('');
    const [passFocus, setPassFocus]=useState(false);
    const [cPassFocus, setCPassFocus]=useState(false);

    const [passwordVisible, setPasswordVisible]=useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible]=useState(false);

    const [loadingVisible, setLoadingVisible] = useState(false);

    const validateUser = () =>{
        console.log('I am first call');
        let passwordValidation=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if(passText.length==0 || cPassText.length==0){
            alert("Required Fields are missing");
        } else if(!passwordValidation.test(passText)){
            alert("password must contain length of 6 to 20 and one number, one lower and one upper");
        } else if(!(passText == cPassText)){
            alert("Not matched");
        } else
            addUser();
    }

    const addUser = async() =>{
        console.log('I am called')
        setLoadingVisible(true);
        var API_URL= URLs.SignupURL;
        fetch(API_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name : props.route.params.userName,
                email : props.route.params.email,
                password: passText,
            })
        })
        .then((response)=>response.json())
        .then((response)=>{
            setLoadingVisible(false);
            if(!response.error){
                if (Platform.OS === 'android') {
                    ToastAndroid.show("Account Created", ToastAndroid.SHORT);
                    props.navigation.navigate('Verification',{userName:props.route.params.userName, email: props.route.params.email, password: passText});
                  } else {
                    AlertIOS.alert("Account Created");
                  } 
            }
            else
                alert(response.msg);
        })
        .catch((error)=>{
            alert(" " + error);
        });
    }


    return(
    <>
        <View style={Styles.container}>

        {/* loading screen */}
        <Modal 
            visible={loadingVisible}
            transparent={true}
            >
                <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:"#fff"}}>
                    <ActivityIndicator size={50} color={Colors.primary}/>
                    <Text style={{color:'#000', marginTop:30, fontSize:16, fontWeight:'bold'}}>
                        Creating Account...
                    </Text>
                </View>
        </Modal>


            {/* logo */}
            <Image style={Styles.logo} source={require("../../../Images/smallLogo.png")}/>
            
            {/* signup label */}
            <Text style={Styles.headingTxt}> Secure your account </Text>
            
            {/* input fields */}
            <View style={Styles.fieldsContainer}>
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

                {/* confirm password input */}
                <View style={cPassFocus ? Styles.passwordFocusContainer : Styles.passwordContainer}>
                    <Ionicons style={Styles.passwordIcon} name={"ios-repeat"} color={Colors.Grey} size={20}/>
                    <TextInput 
                        style={Styles.passwordTxt} 
                        placeholder="Confirm Password"
                        onFocus={()=>setCPassFocus(true)}
                        onBlur={()=>setCPassFocus(false)}
                        placeholderTextColor={Colors.lightGrey}
                        secureTextEntry={!confirmPasswordVisible}
                        defaultValue={cPassText}
                        onChangeText={pass=>setCPassText(pass)} 
                    />
                    <TouchableOpacity style={Styles.passwordHideIcon} onPress={()=>confirmPasswordVisible?setConfirmPasswordVisible(false):setConfirmPasswordVisible(true)}>
                        <Ionicons name={confirmPasswordVisible?"ios-eye-off":"ios-eye"} color={Colors.Grey} size={20}/>
                    </TouchableOpacity>
                </View>

                <Text style={Styles.termsAndConditions}>By clicking signup button you are agree to our terms and conditions</Text>
            </View>

            {/* login button */}
            <TouchableOpacity style={Styles.loginBtn} onPress={validateUser}>
                <Text style={Styles.loginBtnTxt}>Sign up</Text>
            </TouchableOpacity>
        </View>
        </>
    );
}

export default Password;