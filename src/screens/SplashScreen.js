import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../styles/styles'
import { useNavigation } from '@react-navigation/native'



const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
            // console.log('SplashScreen')
        }, 2000)
    })
    return (
        <View
            style={styles.splashscreen}
        >
            <Text>Splash Screen...</Text>
        </View>
    )
}

export default SplashScreen