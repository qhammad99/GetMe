import React from 'react';
import {View, FlatList} from 'react-native';
import Posts from '../../../Components/Posts';
import Colors from '../../../values/colors/Colors';
import postDetail from '../../../values/postDetail';

const Home = () =>{
    return(
        <View style={{flex:1, backgroundColor:Colors.lightestGrey}}>
            <FlatList
                data = {postDetail}
                renderItem = {({item})=> <Posts post={item}/>}
            />
        </View>
    );
}

export default Home;