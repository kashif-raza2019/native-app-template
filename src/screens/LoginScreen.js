import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'

const LoginScreen = () => {
    return (
        <View
            styles={styles.container}
        >
            <Text style={styles.textCenter} >LoginScreen</Text>
        </View>
    )
}

export default LoginScreen