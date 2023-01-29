import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from '../drawer/DrawerNavigator';
import SplashScreen from '../../screens/SplashScreen';
import LoginScreen from '../../screens/LoginScreen';

const Stack = createNativeStackNavigator();


const StackNavigator = (props) => {
    // User logged in or not
    const isLoggedIn = true;
    console.log('Stack navigator props', props);
    

    return (
        <NavigationContainer>
            <Stack.Navigator
                    initialRouteName="SplashScreen"
                >
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                {isLoggedIn  ? (
                        <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
                ) : (
                        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator