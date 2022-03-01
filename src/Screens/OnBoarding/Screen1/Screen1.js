import React from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import Styles from './Styles';

const Screen1=({navigation})=>{
    return(
        // background image
        <ImageBackground style={Styles.backgroundImage} source={require("../../../Images/FirstScreen.png")} resizeMode='stretch'>

            {/* top divivision of screen */}
            <View style={Styles.topDiv}>
                {/* skip button */}
                <TouchableOpacity style={Styles.skipBtn} onPress={()=>navigation.navigate('MainScreen')}>
                    <Text style={Styles.skipBtnTxt}>Skip</Text>
                </TouchableOpacity>
                {/* heading text */}
                <Text style={Styles.mainHeading}> Let's Explore </Text>
                {/* description text */}
                <Text style={Styles.descTxt}>Checkout what you can{'\n'}get here</Text>
                {/* vector image */}
                <Image style={Styles.vectorImg} source={require("../../../Images/exploreIcon.png")}/>
            </View>
            
            {/* logo at bottom division */}
            <Image style={Styles.logo}source={require("../../../Images/redLogo.png")}/>
        </ImageBackground>
    );
};

export default Screen1;