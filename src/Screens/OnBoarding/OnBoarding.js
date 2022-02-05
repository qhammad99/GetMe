import React from 'react';
import {View} from 'react-native';
import Styles from './Styles';
import Swiper from 'react-native-swiper';

import Screen1 from './Screen1/Screen1';
import Screen2 from './Screen2/Screen2';
import Screen3 from './Screen3/Screen3';
import Screen4 from './Screen4/Screen4';

const OnBoarding=({navigation})=>{
    return(
        <View style={Styles.container}>
            <Swiper 
                loop={false} 
                autoplay={true} 
                autoplayTimeout={4}
                dot={<View style={Styles.paginationDot} />}
                activeDot={<View style={Styles.paginationActiveDot} />}
                >
                <Screen1 navigation={navigation}/>
                <Screen2 navigation={navigation}/>
                <Screen3 navigation={navigation}/>
                <Screen4 navigation={navigation}/>
            </Swiper>
        </View>
    );
}

export default OnBoarding;