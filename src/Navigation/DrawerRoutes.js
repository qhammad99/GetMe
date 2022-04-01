// Landing screen of User
import React, {useState} from 'react';
import DrawerContent from '../Components/DrawerContent';
import UserLandingRoutes from './UserLandingRoutes';
import Colors from '../values/colors/Colors';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Theme1, Theme2 } from '../Screens/UserScreens/Profile';
import MyPosts from '../Screens/UserScreens/MyPosts/MyPosts';
import Settings from '../Screens/UserScreens/Settings/Settings';
import MyPages from '../Screens/Pages/Pages';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
// if no page then show option of create page else show the page icon and name
// button added in drawer content 


const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
    const [theme, setTheme]=useState(1);
    return (
        <Drawer.Navigator 
        drawerContent={props => <DrawerContent {...props} />}
        initialRouteName="home"
        screenOptions={{
            headerShown:false,
            drawerActiveTintColor: Colors.primary,
            drawerInactiveTintColor:Colors.primary,
            drawerLabelStyle:{
                marginLeft:-25,
                fontSize:15
            }
        }}
        >
            <Drawer.Screen name="home" 
                component={UserLandingRoutes} 
                options={{
                    drawerLabel:'Home',
                    drawerIcon:({color})=><Ionicons name="home-outline" size={22} color={color}/>
                }}/>
                {/* ////////////////////////////////////////////////////////// profile themes */}
                <Drawer.Screen name="profile" 
                    component={theme==1?Theme1:Theme2} 
                    options={{
                        drawerLabel:'Profile', 
                        drawerIcon:({color})=><Ionicons name="person-circle-outline" size={22} color={color}/>
                    }}/>

            
            <Drawer.Screen name="myPosts" 
                component={MyPosts} 
                options={{
                    drawerLabel:'My Posts',
                    drawerIcon:({color})=><Entypo name="documents" size={22} color={color}/>
                }}
                
                initialParams={{
                    params: "Home"
                }}
                />

            <Drawer.Screen name="myPages" 
                component={MyPages} 
                options={{
                    drawerLabel:'Pages',
                    drawerIcon:({color})=><Entypo name="flag" size={22} color={color}/>
                }}/>
            
            <Drawer.Screen name="settings" 
                component={Settings} 
                options={{
                    drawerLabel:'Settings',
                    drawerIcon:({color})=><Ionicons name="settings-outline" size={22} color={color}/>
                }}/>
        </Drawer.Navigator>
    );
};

export default DrawerRoutes;