import React, { useState, useEffect } from 'react';
import {Text, View, Image, ImageBackground, TouchableOpacity, useWindowDimensions, UseState, ScrollView} from 'react-native';
import Colors from '../../../../values/colors/Colors';
// import styles from './styles';
import styleFactory from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Rating from '../../../../Components/Rating';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

const Theme1 = props =>{
    const window = useWindowDimensions();
    const [detail, setDetail] = useState({
        name: "Usman Ali Shah",
        status: "Student at Arid University",
        location: "Rwp, Punjab, Pakistan",
        rating: 3.2,
        about: 'I am a self motivated, enthusiastic and workaholic person who seeks opportunities and challenges to be set as objectives and then give the best shot to achieve those goals, enhance existing skills and learning new ones.',
        profileViews: '10K',
        searchAppear: '20K',
        skills:["Graphic Designer", "Node", "Express", "React", "Mongo"]
    });

    const [dbColors, setDbColors] = useState({
        // primary: '#d60000',
        primary: '#6bb8db',
        // primary: '#000',
        text: "rgba(245, 245, 245, 1)",
        background: "#000"
    });
    let styles = styleFactory.getSheet(dbColors);

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
                        <Entypo name="graduation-cap" size={16} color={dbColors.text}/>
                        <Text style={styles.statusText}>{detail.status}</Text>
                    </View>

                    {/* location */}
                    <View style={styles.location}>
                        <Entypo name="location" size={14} color={dbColors.text}/>
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

            {/* main skill */}
            <View style={styles.mainSkillContainer}>
                <Text style={styles.mainSkillText}>
                    &nbsp;App Developer&nbsp;
                </Text>
            </View>

            {/* open to buttons */}
            <View style={styles.buttonsContainer}>
                <LinearGradient colors={[dbColors.primary, dbColors.primary, dbColors.primary]} style={styles.highlightedButton}>
                    <TouchableOpacity>
                        <Text style={styles.highlightedText}>Open to</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <LinearGradient colors={[dbColors.primary, dbColors.primary, dbColors.primary]} style={styles.highlightedButton}>
                    <TouchableOpacity>
                        <Text style={styles.highlightedText}>Add Profile Section</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <View style={styles.outlinedButtonBorder}>
                <LinearGradient colors={[Colors.fullWhite, Colors.lightestGrey, Colors.lightestGrey]} style={styles.outlinedButton}>
                    <TouchableOpacity>
                        <Text style={styles.outlinedText}>More</Text>
                    </TouchableOpacity>
                </LinearGradient>
                </View>
            </View>

            {/* option ads */}
            <View style={{flexDirection:'row'}}>
            <ScrollView horizontal>

                    {/* ad1 */}
                <View style={styles.adContainer}>
                    <Text style={styles.heading}>
                        Share that you're hiring &nbsp;
                        <Text style={styles.caption}> 
                        and attract the qualified candidates.
                        </Text>
                    </Text>
                    <TouchableOpacity style={{alignSelf:'flex-end'}}>
                        <Text style={styles.getStartBtn}>Get Started</Text>
                    </TouchableOpacity>
                </View>

               {/* ad2 */}
               <View style={styles.adContainer}>
                <Text style={styles.heading}>
                    Find potential clients &nbsp;
                    <Text style={styles.caption}> 
                    by showcasing the services you provide.
                    </Text>
                </Text>
                <TouchableOpacity style={{alignSelf:'flex-end'}}>
                    <Text style={styles.getStartBtn}>Get Started</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
            </View>

            {/*  about*/}
            <View style={{marginHorizontal:5}}>
                <View style={styles.aboutContainer}>
                    <Text style={styles.aboutHeading}>
                        About
                    </Text>
                    <View style={styles.aboutTextContainer}>
                        <Text style={styles.aboutText}>
                            {detail.about}
                        </Text>
                    </View>
                </View>
            </View>


            {/* projects */}
            <View style={{marginHorizontal:5}}>
            <View style={styles.cardContainer}>
                <View>
                    <Text style={styles.containerHeading}>Projects Completed</Text>
                </View>

                <Swiper 
                    loop={false}
                    showsPagination={false}
                    showsButtons
                    nextButton={
                        <Text style={styles.buttonText}>›</Text>
                    }
                    prevButton={
                        <Text style={styles.buttonText}>‹</Text>
                    }
                    style={styles.swiperContainer}
                    >
                    <View style={styles.slide}>
                        <Text style={styles.text}>Emergency services</Text>
                        <Image style={styles.slideImage} source={require('../../../../Images/project1.jpg')}/>
                    </View>
                    <View style={styles.slide}>
                        <Text style={styles.text}>e-store</Text>
                        <Image style={styles.slideImage} source={require('../../../../Images/project2.jpg')}/>
                    </View>
                    <View style={styles.slide}>
                        <Text style={styles.text}>shoe-store</Text>
                        <Image style={styles.slideImage} source={require('../../../../Images/project3.jpg')}/>
                    </View>
                </Swiper>
            </View>
            </View>

            {/* analytics */}
            <View style={{marginHorizontal:5}}>
            <View style={styles.cardContainer}>
                <Text style={[styles.containerHeading, {marginBottom:-5}]}>
                    Analytics
                </Text>
                
                {/* only you can see */}
                <View style={styles.smallSizeContainer}>
                    <Entypo name={"eye"} color={dbColors.text} />
                    <Text style={styles.smallSizeText}>
                        Only you can see
                    </Text>
                </View>


                {/* Views */}
                <View style={styles.viewsContainer}>
                    {/* item 1 */}
                    <TouchableOpacity style={styles.viewItemContainer}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Entypo name={"users"} color={dbColors.text}  size={30}/>
                            <Text style={styles.viewItemCount}>{detail.profileViews}</Text>
                        </View>
                        <Text style={styles.viewItemHeading}>
                            Profile Views
                        </Text>
                        <Text style={styles.viewItemSubHeading}>
                            Discover who's  viewed your profile
                        </Text>
                    </TouchableOpacity>

                    <View style={{height:'80%', width:1, backgroundColor:dbColors.primary, marginHorizontal:10}} />

                    {/* item 2 */}
                    <TouchableOpacity style={styles.viewItemContainer}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Entypo name={"magnifying-glass"} color={dbColors.text}  size={30}/>
                            <Text style={styles.viewItemCount}>{detail.searchAppear}</Text>
                        </View>
                        <Text style={styles.viewItemHeading}>
                            appearances
                        </Text>
                        <Text style={styles.viewItemSubHeading}>
                            See how often you appear in search results.
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            
            {/* Other skills */}
            <View style={{marginHorizontal:5}}>
            <View style={styles.cardContainer}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={[styles.containerHeading, {marginBottom:-5}]}>
                        Other Skills
                    </Text>
                    <TouchableOpacity style={{marginRight:10}}>
                        <Entypo name={"plus"} color={dbColors.primary} size={26}/>
                    </TouchableOpacity>
                </View>

                {/* Skills */}
                <View style={styles.skillViewsContainer}>
                    {detail.skills.map((item, index)=>
                        <LinearGradient key={`${item}-${index}`} colors={[Colors.zeroGrey, Colors.zeroGrey, Colors.zeroGrey]} style={styles.skillContainer}>
                            <Text style={{ color: dbColors.text, fontSize: 14, fontWeight: '400' }}>
                                {item}
                            </Text>
                        </LinearGradient>
                    )}
                </View>
            </View>
            </View>
        </View>
        </ScrollView>
        </>
    );
};

export default Theme1;