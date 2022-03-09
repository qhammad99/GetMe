import React, { useState } from 'react';
import {Text, View, Image, ImageBackground, TouchableOpacity, useWindowDimensions, UseState, ScrollView} from 'react-native';
import Colors from '../../../../values/colors/Colors';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Rating from '../../../../Components/Rating';

const Theme1 = props =>{
    const window = useWindowDimensions();
    const [detail, setDetail] = useState({
        name: "Usman Ali Shah",
        status: "Student at Arid University",
        location: "Rwp, Punjab, Pakistan",
        rating: 3.2,
        about: 'I am a self motivated, enthusiastic and workaholic person who seeks opportunities and challenges to be set as objectives and then give the best shot to achieve those goals, enhance existing skills and learning new ones.',

    });
    return(
        <>
        <ScrollView>
        <View style={styles.container}>
            {/* cover photo */}
            <View style={styles.coverPhotoContainer}>
                <ImageBackground
                    style={styles.coverPhoto}
                    source={require('../../../../Images/coverPhoto.png')}></ImageBackground>
                <View style={styles.coverPhotoBottom} />
            </View>

            <View style={styles.profileContainer}>
            
                {/* profile photo */}
                <View>
                    <View style={styles.profilePhotoBorder}>
                        <Image source={require('../../../../Images/usman.jpg')} style={styles.profilePhoto} />
                    </View>
                    <Rating rating={detail.rating}/>
                </View>
            
                {/*container for name and bio */}
                <View style={styles.nameAndBioContainer}>
                    {/* customize icon */}
                    <TouchableOpacity style={styles.customizeIconContainer} onPress={()=>console.log('customize pressed')}>
                            <Image source={require('../../../../Images/cutomizeIcon.png')} style={styles.customizeIcon} />
                    </TouchableOpacity>

                    {/* name */}
                    <Text style={styles.name}>
                        {detail.name}
                    </Text>

                    {/* status */}
                    <View style={styles.status}>
                        <Entypo name="graduation-cap" size={16} color='#4a4a4a'/>
                        <Text style={styles.statusText}>{detail.status}</Text>
                    </View>

                    {/* location */}
                    <View style={styles.location}>
                        <Entypo name="location" size={14} color='#4a4a4a'/>
                        <Text style={styles.locationText}>{detail.location}</Text>
                    </View>

                    {/* connections and info */}
                    <View style={styles.connectionAndInfoContainer}>
                        {/* no of connection */}
                        <TouchableOpacity>
                            <Text style={styles.connectionsBtn}>200 connections</Text>
                        </TouchableOpacity>

                        {/* contacts info */}
                        <TouchableOpacity>
                            <Text style={styles.infoBtn}>Contact Info</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* open to buttons */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.highlightedButton}>
                    <Text>Open to</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.highlightedButton}>
                    <Text>Add Profile Section</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>More</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
        </>
    );
};

export default Theme1;