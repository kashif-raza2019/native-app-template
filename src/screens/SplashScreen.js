import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../styles/styles'
import { useNavigation } from '@react-navigation/native'



const SplashScreen = (props) => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            // Check if user is logged in or not and navigate accordingly
            navigation.navigate('Home') || navigation.navigate('Login')
        }, 2000)
    })
    return (
        <View
            style={styles.splashscreen}
        >
            <Text
                style={{color: 'white'}}
            >Splash Screen</Text>
        </View>
    )
}

export default SplashScreen