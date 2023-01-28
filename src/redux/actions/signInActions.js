// actions for signing in in redux

import { SIGN_IN, SIGN_OUT, REGISTER } from '../enums';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
}

// actions for signing out in redux
export const signOut = () => {
    return {
        type: SIGN_OUT
    };
}

// actions for registering in redux
export const register = (userId) => {
    return {
        type: REGISTER,
        payload: userId
    };
}

