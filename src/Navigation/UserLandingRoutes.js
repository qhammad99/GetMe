import React from 'react';
import {Text, View} from 'react-native';
import Colors from '../values/colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/UserScreens/Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeHeader from '../Components/HomeHeader';

const Tab = createBottomTabNavigator();

function NetworkScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: Colors.fullBlack }}>Show the connections</Text>
        </View>
    );
}
function PostScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: Colors.fullBlack }}>Create a post</Text>
        </View>
    );
}

function NotificationScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: Colors.fullBlack}}>Show notifications</Text>
        </View>
    );
}
function JobsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: Colors.fullBlack }}>show jobs</Text>
        </View>
    );
}

const UserLandingRoutes= props =>{
    return(
        <Tab.Navigator initialRouteName='Home'
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home-outline';
              } else if (route.name === 'Network') {
                iconName = focused
                  ? 'ios-people'
                  : 'ios-people-outline';
              } else if (route.name === 'Post') {
                iconName = focused
                  ? 'ios-add-circle'
                  : 'ios-add-circle-outline';
              } else if (route.name === 'Notification') {
                iconName = focused
                  ? 'ios-notifications'
                  : 'ios-notifications-outline';
              } else if (route.name === 'Jobs') {
                iconName = focused
                  ? 'ios-briefcase'
                  : 'ios-briefcase-outline';
              } 
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: Colors.primary,
            tabBarInactiveTintColor: Colors.Grey,
          })}>
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{ headerTitle: () => <HomeHeader drawer={props.navigation}/>}}
            />
            <Tab.Screen name="Network" component={NetworkScreen} options={{headerShown:false}}/>
            <Tab.Screen name="Post" component={PostScreen} options={{headerShown:false}}/>
            <Tab.Screen name="Notification" component={NotificationScreen} options={{headerShown:false}}/>
            <Tab.Screen name="Jobs" component={JobsScreen} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
}

export default UserLandingRoutes;