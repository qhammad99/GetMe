import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Colors from '../values/colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DrawerContent = (props) => {

  return (
    <SafeAreaView style={styles.container}>
      {/*Top Header */}
      <ImageBackground style={styles.backgroundImage} source={require('../Images/drawer.png')}>
        <View style={styles.sideMenuProfileIconContainer}>
            <Image
                source={require('../Images/usman.jpg')}
                style={styles.sideMenuProfileIcon}
            />
        </View>
        <Text style={styles.nameText}>
            Usman Ali Shah
        </Text>
        <Text style={styles.numberOfConnection}>
            Connections: 0
        </Text>
      </ImageBackground>

      {/* drawer screens */}
      <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />

          <View style={{width:'100%', borderColor:Colors.lightestGrey, marginVertical:10, borderWidth:1}}/>

          <View style={{paddingHorizontal:60, marginTop:10}}>
            <TouchableOpacity style={{backgroundColor:Colors.primary, padding:10, flexDirection:'row', alignItems:'center', justifyContent:"space-around"}}>
              <FontAwesome5 name={"plus"} size={18} color={Colors.fullWhite}/>
              <Text style={{color:'#fff', fontWeight:'bold', fontSize:16}}>Create Page</Text>
              </TouchableOpacity>    
          </View>

  
          
      </DrawerContentScrollView>

      {/* bottom */}
      {/* <DrawerItem
          label="Logout"
          labelStyle={styles.bottomItem}
          icon={()=><Ionicons name="exit-outline" size={22} color={Colors.primary}/>}
          onPress={() => alert('Logout called')}
        /> */}
        <View style={{marginBottom:10}}>
          <Text style={{color:Colors.Grey, alignSelf:'center', fontSize:12}}>powered by</Text>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'#d6550f', alignSelf:'center', fontSize:20, letterSpacing:2, fontWeight:'bold', alignItems:'center'}}>
            Infini</Text>
            <Text style={{marginTop:3}}>
              <Ionicons name="infinite" size={22} color={Colors.fullBlack}/>
          </Text>
          <Text style={{color:'#d6550f', alignSelf:'center', fontSize:20, letterSpacing:2, fontWeight:'bold', alignItems:'center'}}>
            y</Text>
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor:Colors.lightColor
  },
  backgroundImage:{
    paddingVertical:10, 
    backgroundColor:Colors.primary, 
    borderBottomRightRadius:40
  },
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
  nameText:{
    width:'80%', 
    color:'#fff', 
    fontWeight:'bold', 
    fontSize:18, 
    textAlign:'center', 
    alignSelf:'center', 
    marginTop:10, 
    fontStyle:'italic'
  },
  numberOfConnection:{
    width:'80%', 
    color:'#fff', 
    fontSize:14, 
    textAlign:'center', 
    alignSelf:'center'
  },
  bottomItem:{
    marginLeft:-25, 
    fontSize:15, 
    color:Colors.primary
  }
});

export default DrawerContent;