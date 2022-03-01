// Landing screen of User
import React from 'react';
import DrawerContent from '../Components/DrawerContent';
import UserLandingRoutes from './UserLandingRoutes';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="home" component={UserLandingRoutes} options={{headerShown:false, drawerLabel:'Home'}}/>
        </Drawer.Navigator>
    );
};

export default DrawerRoutes;