import React,{useState, useCallback, useRef} from 'react';
import {Text, View, Image, useWindowDimensions, TouchableOpacity, FlatList} from 'react-native';
import Colors from '../values/colors/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const getPostImage = (image)=>{
    switch(image){
        case "firstPost":
            return(require('../Images/postImage.jpg'));
            break;
        case "secondPost":
            return(require('../Images/postImage2.jpg'));
            break;
    }
}
const getUserImage = (image)=>{
    switch(image){
        case "firstUser":
            return(require('../Images/user1.png'));
            break;
        case "secondUser":
            return(require('../Images/user2.png'));
            break;
    }
}

const Posts = props =>{
    const windowWidth=useWindowDimensions().width;
    const [liked, setLiked] = useState(false);
    const [picIndex, setPicIndex] = useState(1);
    const post = props.post; 
    
    // const onUpdateImage = useCallback(({viewableItems}) => {
    //     if (viewableItems.length > 0) {
    //       setPicIndex(viewableItems[0].index+1 || 0);
    //     }
    //   }, []); 

    const viewConfigRef = useRef(
        {
            viewAreaCoveragePercentThreshold: 50,
            // minimumViewTime: 300
        }
    );

    const onUpdateImage = useRef(({viewableItems}) => {
        if (viewableItems.length > 0) {
          setPicIndex(viewableItems[0].index+1 || 0);
        }
      }); 
    
    return(
        <View style={{ backgroundColor:Colors.fullWhite, marginVertical:5}}>
            {post.setLiked}
            {/* header design */}
            <View style={{flexDirection:'row', alignItems:'center', marginTop:10, marginBottom:5, marginLeft:10}}>

                {/* user image */}
                <Image style={{width: 40, height: 40}} source={getUserImage(post.creatorImage)}/>

                {/* details of user */}
                <View style={{flexDirection:'column', paddingLeft:10}}>
                    <Text style={{color:Colors.fullBlack, fontWeight:'bold'}}>{post.creatorName}</Text>
                    <Text style={{color:Colors.lightGrey, lineHeight:15}}>{post.creatorAbout}</Text>
                    <Text style={{color:Colors.lightGrey, lineHeight:15}}>{post.time}</Text>
                </View>
            </View>

            {/* Post caption */}
            <Text style={{color:Colors.fullBlack, marginLeft:10}}>{post.caption}</Text>
            
            {/* Post image container */}
            {(post.imageAddress || post.imageAddress.length<=0)&& (
                <>
            {post.imageAddress.length>1 &&
                <View style={{alignItems:'flex-end', marginRight:10}}>
                    <Text style={{color:Colors.lightGrey}}>{picIndex}/{post.imageAddress.length}</Text>
                </View>
            }
            <FlatList 
                data={post.imageAddress}
                renderItem={
                    ({item})=>
                    <View>
                        <Image style={{height:windowWidth, width:windowWidth}} source={getPostImage(item)} resizeMode="contain"/>
                    </View>
                    
                }
                keyExtractor={(value,index)=>`${post.id}-${index}`}
                showsHorizontalScrollIndicator={false}
                // snapToInterval={windowWidth-10}
                snapToInterval={windowWidth}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onUpdateImage.current}
                horizontal
            />
            </>
            )
            }
            
            {(post.noOfLikes>0 || liked || post.noOfComments>0 || post.noOfShares>0)&&(
                <>

            {/* likes counts and view comments button */}
            <View style={{flexDirection:'row', paddingHorizontal:15, justifyContent:'space-between', height:17, alignItems:'center', marginTop:3}}>
                {(post.noOfLikes<=0 && !liked)?
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{color:Colors.Grey, fontSize:12, marginRight:2}}>
                    </Text>
                </View>
                :
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{color:Colors.Grey, fontSize:12, marginRight:2}}>
                        {liked? parseInt(post.noOfLikes)+1: post.noOfLikes}
                    </Text>
                    <FontAwesome5 name={'thumbs-up'} color={Colors.Grey} size={11} />
                </View>
                }
                
                <View style={{flexDirection:'row'}}>
                    {post.noOfComments > 0 &&
                        <TouchableOpacity>
                            <Text style={{ fontSize: 13, color: Colors.Grey }}>
                                {post.noOfComments}Comments
                            </Text>
                        </TouchableOpacity>}

                {post.noOfShares>0 &&
                <TouchableOpacity>
                    <Text style={{fontSize:13, color:Colors.Grey}}>
                        .{post.noOfShares}shares
                    </Text>
                </TouchableOpacity>}
                </View>
            </View>


            {/* horizontal line */}
            <View style={{height:1, backgroundColor:Colors.lightestGrey, marginVertical:5}} />
            </>
            )}

            {/* like share and comment buttons */}
            <View style={{flexDirection:'row', justifyContent:'space-between', height:35, alignItems:'center'}}>
                <TouchableOpacity style={{flex:1}} onPress={()=>{liked?setLiked(false):setLiked(true)}}>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:'100%'}}>
                        {liked?
                        <FontAwesome5 name={'thumbs-up'} color={Colors.primary} size={15} solid/> 
                        :<FontAwesome5 name={'thumbs-up'} color={Colors.lightGrey} size={15}/> }
                        
                        <Text style={{color:liked?Colors.primary:Colors.lightGrey, fontSize:14, marginLeft:5, fontWeight:liked?'bold':'normal'}}>Like</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={{flex:1}}>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:'100%'}}>
                    <FontAwesome5 name={'comment-dots'} color={Colors.lightGrey} size={15}/>
                        <Text style={{color:Colors.lightGrey, fontSize:14, marginLeft:5}}>Comment</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={{flex:1}}>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center',  height:'100%'}}>
                        <FontAwesome5 name={'share'} color={Colors.lightGrey} size={15}/>
                        <Text style={{color:Colors.lightGrey, fontSize:14, marginLeft:5}}>Share</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Posts;