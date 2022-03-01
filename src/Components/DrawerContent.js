import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  ImageBackground
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Colors from '../values/colors/Colors';

const DrawerContent = (props) => {

    const BASE_PATH ='https://raw.githubusercontent.com/AboutReact/sampleresource/master/';

  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Header */}
      <ImageBackground style={{backgroundColor:Colors.primary, paddingVertical:10}} source={require('../Images/drawer.png')}>
        <View style={styles.sideMenuProfileIconContainer}>
            <Image
                source={require('../Images/usman.jpg')}
                style={styles.sideMenuProfileIcon}
            />
        </View>
        <Text style={{width:'80%', color:'#fff', fontWeight:'bold', fontSize:18, textAlign:'center', alignSelf:'center', marginTop:10, fontStyle:'italic'}}>
            Usman Ali Shah
        </Text>
      </ImageBackground>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL('https://aboutreact.com/')}
        />
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>
            Rate Us
          </Text>
          <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
        </View>
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
        bottom
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIconContainer:{
    marginTop:10,
    justifyContent:'center', 
    alignItems:'center', 
    alignSelf:'center', 
    backgroundColor:'white', 
    width:101, 
    height:101, 
    borderWidth:1, 
    borderRadius:51
  },
  sideMenuProfileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DrawerContent;