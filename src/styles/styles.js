import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
    },
    textCenter:{
        fontSize: 30,
        color: 'grey',
        textAlign: 'center',
    },
    textDanger: {
        fontSize: 30,
        color: 'red',
    },
    textPrimary: {
        fontSize: 30,
        color: 'cyan',
    },
    textSuccess: {
        fontSize: 30,
        color: 'green',
    },
    splashscreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#01284D',
    },
    light: {
        backgroundColor: 'white',
        color: 'black',
    },
    dark: {
        backgroundColor: 'black',
        color: 'white',
    },
})