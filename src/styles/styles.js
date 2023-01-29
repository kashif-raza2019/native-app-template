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
        color: 'white',
    },
    light: {
        backgroundColor: 'white',
        // color: 'black',
    },
    dark: {
        backgroundColor: 'black',
        color: 'white',
    },
    form:{
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 30,
        paddingLeft: 40,
        paddingRight: 40,
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    inputDanger:{
        height: 40,
        borderColor: 'red',
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    textError: {
        fontSize: 10,
        color: 'red',
        textAlign: 'center',
        paddingBottom: 20,
    },
    centeredForm:{
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: 80,
        paddingLeft: 40,
        paddingRight: 40,
    }
})