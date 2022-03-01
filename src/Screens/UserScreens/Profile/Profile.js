import React, { useState } from 'react';
import {Text, View, Image, useWindowDimensions, UseState, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../values/colors/Colors';


const Profile = props =>{
    const window = useWindowDimensions();
    // const [detail, setDetail] = useState({
    //     name: "Raja Hassan Ali Janjua",
    //     bio: 'Market Research | Process Expert | Advance Reporting',
    //     status: 'Working',
    //     about: 'I am a self motivated, enthusiastic and workaholic person who seeks opportunities and challenges to be set as objectives and then give the best shot to achieve those goals, enhance existing skills and learning new ones.',

    // });
    const [detail, setDetail] = useState({
        name: 'Usman Ali Shah',
        bio: "SEO Expert | Restaurant Management",
        status: 'Working',
        about: 'I am a self motivated, enthusiastic and workaholic person who seeks opportunities and challenges to be set as objectives and then give the best shot to achieve those goals, enhance existing skills and learning new ones.',

    });
    return(
        <>
        <ScrollView>
        <View style={{flex:1, backgroundColor:Colors.lightestGrey, position:'relative'}}>

            {/* first container */}
            <View style={{width:'100%', backgroundColor:Colors.fullWhite, paddingBottom:5, borderBottomEndRadius:10, borderBottomStartRadius:10}}>
                {/* cover photo */}
                <View style={{ width:'100%', position:'relative'}}>
                    {/* <View style={{borderRadius:50, backgroundColor:'rgba(0,0,0,0.1)', position:'absolute', right:1, top:1, zIndex:1, height:30, width:30, justifyContent:'center', alignItems:'center'}}>
                        <Feather name={'camera'} size={20} color='black'/>
                    </View> */}
                    <Image source={require('../../../Images/coverPhoto.png')} style={{resizeMode:'stretch', position:'relative', width:'100%', height:150, backgroundColor:'black'}}/>
                </View>

                {/* profile photo */}
                <View style={{position:'absolute', width:'100%', top:120}}>
                    <View style={{position:'relative'}}>
                        <View style={{justifyContent:'center', alignItems:'center', position:'relative', width:'100%'}}>
                            <View style={{width:107, height:107, borderRadius:57, borderWidth:7, borderColor:'rgba(0,0,0,1)', justifyContent:'center', alignItems:'center'}}>
                                <Image source={require('../../../Images/raja.jpg')} style={{width:100, height:100, borderRadius:50}} />
                            </View>
                        </View>
                        {/* <View style={{borderRadius:50, backgroundColor:'rgba(0,0,0,0.1)', position:'absolute', right:(((window.width)/2)-40), top:80, zIndex:1, height:20, width:20, justifyContent:'center', alignItems:'center'}}>
                            <Feather name={'camera'} size={15} color='black'/>
                        </View> */}
                    </View>
                </View>
                

                {/*container for name and bio */}
                <View style={{position:'relative', width:'100%', marginTop:70, padding:10}}>

                    {/* name */}
                    <View style={{justifyContent:'center', alignItems:'center', position:'relative', flexDirection:'row'}}>
                        <Text style={{color:'black', fontSize:20, fontWeight:'bold', fontStyle:'italic'}}>{detail.name}</Text>
                    </View>

                    {/* bio */}
                    <View style={{justifyContent:'center', alignItems:'center', position:'relative', flexDirection:'row'}}>
                        <Text style={{color:'grey', fontSize:16, textAlign:'center'}}>{detail.bio}</Text>
                    </View>
                </View>

                <View style={{ alignItems:'center', position:'relative', flexDirection:'row', justifyContent:'center'}}>
                    <Text style={{color:'black', fontSize:16, fontWeight:'bold'}}>Status: </Text>
                    <Text style={{color:'black', fontSize:16}}>{detail.status}</Text>
                </View>
            </View>


            {/*container for status */}
            {/* <View style={{width:'100%', backgroundColor:Colors.fullWhite, borderRadius:10, marginTop:7, padding:10}}>

                {/* Status */}
                {/* <View style={{ alignItems:'center', position:'relative', flexDirection:'row'}}>
                    <Text style={{color:'black', fontSize:16, fontWeight:'bold'}}>Current Status: </Text>
                    <Text style={{color:'black', fontSize:16}}>{status}</Text>
                </View>
            </View> */}
            
            {/* container for About */}
            <View style={{width:'100%', backgroundColor:Colors.fullWhite, borderRadius:10, marginTop:7, padding:10}}>

                {/* Status */}
                <View style={{}}>
                    <Text style={{color:'black', fontSize:18, fontWeight:'bold', marginBottom:5}}>About</Text>
                    <Text style={{color:Colors.Grey, fontSize:15, lineHeight:20}} >{detail.about}</Text>
                </View>
            </View>

            {/* container for Experience */}
            <View style={{width:'100%', backgroundColor:Colors.fullWhite, borderRadius:10, marginTop:7, padding:10}}>

                {/* Status */}
                <View style={{}}>
                    <Text style={{color:'black', fontSize:18, fontWeight:'bold', marginBottom:5}}>Experience</Text>
                    {/* company container */}
                    <View style={{width:'100%'}}>
                        <View style={{width:'100%', flexDirection:'row', alignItems:'center'}}>
                            <View style={{flex:1, height:70, backgroundColor:Colors.lightestGrey, padding:2}}>
                                <Image source={require('../../../Images/techobix.jpg')} style={{width:'100%', height:'100%', resizeMode:'contain'}}/>
                            </View>
                            
                            <View style={{flex:4, marginLeft:5}}>
                                <Text style={{color:Colors.fullBlack, fontSize:16}}> CEO</Text>
                                
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{color:Colors.fullBlack, fontSize:14}}> Techobix</Text>
                                    <Text style={{color:Colors.fullBlack, fontSize:14}}>  |  FullTime </Text>
                                </View>
                                
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{color:Colors.Grey, fontSize:14}}> Jan2018 - Present</Text>
                                    <Text style={{color:Colors.Grey, fontSize:14}}>    3 yr 8 mos</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{color:Colors.fullBlack, fontSize:14}}> * Detail Bullet Points</Text>
                    </View>

                    <View  style={{height:1, backgroundColor:Colors.lightestGrey, marginVertical:5}}/>

                    {/* second company container */}
                    <View style={{width:'100%'}}>
                        <View style={{width:'100%', flexDirection:'row', alignItems:'center'}}>
                            <View style={{flex:1, height:70, backgroundColor:Colors.lightestGrey, padding:2}}>
                                <Image source={require('../../../Images/almaidah.jpg')} style={{width:'100%', height:'100%', resizeMode:'contain'}}/>
                            </View>
                            
                            <View style={{flex:4, marginLeft:5}}>
                                <Text style={{color:Colors.fullBlack, fontSize:16}}> Waiter</Text>
                                
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{color:Colors.fullBlack, fontSize:14}}> Al-Maidah Restaurant</Text>
                                    <Text style={{color:Colors.fullBlack, fontSize:14}}>  |  FullTime </Text>
                                </View>
                                
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{color:Colors.Grey, fontSize:14}}> Jan2018 - Present</Text>
                                    <Text style={{color:Colors.Grey, fontSize:14}}>    3 yr 8 mos</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{color:Colors.fullBlack, fontSize:14}}> * Detail Bullet Points</Text>
                    </View>

                    {/* second company container */}
                    <View style={{width:'100%'}}>
                        <View style={{width:'100%', flexDirection:'row', alignItems:'center'}}>
                            <View style={{flex:1, height:70, backgroundColor:Colors.lightestGrey, padding:2}}>
                                <Image source={require('../../../Images/almaidah.jpg')} style={{width:'100%', height:'100%', resizeMode:'contain'}}/>
                            </View>
                            
                            <View style={{flex:4, marginLeft:5}}>
                                <Text style={{color:Colors.fullBlack, fontSize:16}}> Waiter</Text>
                                
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{color:Colors.fullBlack, fontSize:14}}> Al-Maidah Restaurant</Text>
                                    <Text style={{color:Colors.fullBlack, fontSize:14}}>  |  FullTime </Text>
                                </View>
                                
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{color:Colors.Grey, fontSize:14}}> Jan2018 - Present</Text>
                                    <Text style={{color:Colors.Grey, fontSize:14}}>    3 yr 8 mos</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{color:Colors.fullBlack, fontSize:14}}> * Detail Bullet Points</Text>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
        <View style={{width:60, height:60, position:'absolute', zIndex:1, backgroundColor:Colors.primary, borderRadius:50, right:10, bottom:20, justifyContent:'center', alignItems:'center'}}>
            <MaterialCommunityIcons name={'account-edit-outline'} size={40} color={Colors.fullWhite}/>
        </View>
        </>
    );
};

export default Profile;