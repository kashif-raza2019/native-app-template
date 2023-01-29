import React from 'react';
import { View , useColorScheme} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';

// Route names for navigation between screens
import { HOME, PROFILE } from '../../screens/screenRoutes';


// Tab navigator
const Tab = createBottomTabNavigator();

const BottomNavigator = (props) => {

    return (
        <Tab.Navigator
            initialRouteName={HOME}
            screenOptions={
                ({ route }) => ({
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        borderTopColor: '#fff',
                    },
                    headerShown: false,
                    tabBarShowLabel: true,
                })
            }
        >
            <Tab.Screen name={HOME} component={HomeScreen} options={
                { headerShown: false }
            } />
            <Tab.Screen name={PROFILE} component={ProfileScreen} options={{headerShown: false}} />
        </Tab.Navigator>
    );
};

export default BottomNavigator;

