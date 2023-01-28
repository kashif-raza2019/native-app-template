import { useColorScheme } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomNavigator from '../bottom/BottomNavigator';
import { styles } from '../../styles/styles';
import CustomDrawerContent from './CustomDrawerContent';
import { APP_NAME } from '../../screens/screenRoutes';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName={APP_NAME}
      defaultStatus='open'
      drawerContent={(props) => <CustomDrawerContent {...props} /> }
    >
        <Drawer.Screen name={APP_NAME} component={BottomNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator