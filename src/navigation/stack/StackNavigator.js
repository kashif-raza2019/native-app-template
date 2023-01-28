import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from '../drawer/DrawerNavigator';
import SplashScreen from '../../screens/SplashScreen';

const Stack = createNativeStackNavigator();


const StackNavigator = () => {
    // User logged in or not
    const isLoggedIn = true;

    return (
        <NavigationContainer>

            {isLoggedIn  ? (
                <Stack.Navigator
                    initialRouteName="SplashScreen"
                >
                    <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator
                    initialRouteName="SplashScreen"
                >
                    <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    )
}

export default StackNavigator