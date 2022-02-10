import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import Styles from './Styles';


const MainScreen =({navigation})=>{
    return(
        <View style={Styles.container}>

            {/* topDiv -> image and logo */}
            <View style={Styles.topDiv}>
                <Image style={Styles.logo} source={require("../../Images/redLogo.png")}/>
                <Image style={Styles.vectorImg} source={require("../../Images/login.png")}/>
            </View>

            {/* bottomDiv */}
            <View style={Styles.bottomDiv}>

                {/* signup button */}
                <TouchableOpacity style={Styles.signupBtn} onPress={()=>navigation.navigate('NameEmail')}>
                    <Text style={Styles.signupBtnTxt}>Get in</Text>
                </TouchableOpacity>

                {/* google join button */}
                <TouchableOpacity style={Styles.googleBtn}>
                    <Text style={Styles.googleBtnTxt}>Continue with Google</Text>
                </TouchableOpacity>

                {/* signin button */}
                <TouchableOpacity style={Styles.signinBtn}
                onPress={()=>navigation.navigate('Login')}>
                    <Text style={Styles.signinBtnTxt}>Sign in</Text>
                </TouchableOpacity>
        
            </View>
        </View>
    );
};

export default MainScreen;