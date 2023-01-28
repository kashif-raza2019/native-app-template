import { View, Text, Button } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

import { styles } from '../styles/styles'


const HomeScreen = () => {

  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.textCenter}
      >Home Screen</Text>
    </View>
  )
}

export default HomeScreen