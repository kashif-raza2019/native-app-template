import { View, Text, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles/styles';

// Redux connect 
import { connect } from 'react-redux';
import { signIn } from '../redux/actions/authActions';

const LoginScreen = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // If the username is not valid, set the error message
    const [usernameError, setUsernameError] = useState('');
    // If the password is not valid, set the error message
    const [passwordError, setPasswordError] = useState('');

    console.log('LoginScreen props', props.login);
    if(props.login.isSignedIn) {
        props.navigation.navigate('Home');
    }

    return (
        <View>
            <View>
                <Text style={styles.textCenter}>Login screen</Text>
            </View>
            <View styles={styles.centeredForm}>
                <View style={styles.form}>
                    <TextInput
                        style={usernameError ? styles.inputDanger : styles.input}
                        placeholder="Username"
                        onChangeText={text => {
                            setUsername(text);
                        }}
                    />
                    {usernameError ? (
                        <Text style={styles.textError}>{usernameError}</Text>
                    ) : null}

                    <TextInput
                        style={passwordError ? styles.inputDanger : styles.input}
                        placeholder="Password"
                        textContentType="password"
                        secureTextEntry={true}
                        onChangeText={text => {
                            // Password regex matches
                            // 1. At least one upper case English letter, (?=.*?[A-Z])
                            // 2. At least one lower case English letter, (?=.*?[a-z])
                            // 3. At least one digit, (?=.*?[0-9])
                            // 4. At least one special character, (?=.*?[#?!@$%^&*-])
                            // 5. Minimum eight in length .{8,} (with the anchors)
                            const regex =
                                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
                            if (regex.test(text)) {
                                setPasswordError('');
                                setPassword(text);
                                console.log(text);
                            } else {
                                setPasswordError(
                                    'Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character',
                                );
                                setPassword('');
                            }
                        }}
                    />
                    {passwordError ? (
                        <Text style={styles.textError}>{passwordError}</Text>
                    ) : null}
                    <Button
                        title="Login"
                        onPress={() => props.loginHandler(username)}
                    />
                </View>
            </View>
        </View>
    );
};

const mapStateToProps = state => {
    return {
        login: state.signInReducer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginHandler: (userId) => dispatch(signIn(userId)),
    };
};

export default connect(mapStateToProps ,mapDispatchToProps)(LoginScreen);
