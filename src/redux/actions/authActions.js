// actions for authentication in redux

import { SIGN_IN, SIGN_OUT, REGISTER } from '../enums';

export const signIn = (userId) => {
    console.log('signIn action called', userId);
    return {
        type: SIGN_IN,
        payload: { isSignedIn: true, userId: userId }
    };
}

// actions for signing out in redux
export const signOut = () => {
    return {
        type: SIGN_OUT,
        payload: { isSignedIn: false, userId: null }
    };
}

// actions for registering in redux
export const register = (userId) => {
    return {
        type: REGISTER,
        payload: { isSignedIn: false, userId: userId }
    };
}

