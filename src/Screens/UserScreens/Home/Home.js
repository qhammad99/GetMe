import React from 'react';
import {Text, View} from 'react-native';
import Colors from '../../../values/colors/Colors';

const Home = () =>{
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: Colors.fullBlack }}>Shows Posts of network fellows and following companies</Text>
        </View>
    );
}

export default Home;