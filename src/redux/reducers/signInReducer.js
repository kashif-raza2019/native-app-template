import { SIGN_IN, SIGN_OUT, REGISTER } from '../enums';

// signIn Reducer
const initialState = {
    isSignedIn: false,
    userId: null
};

export default signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            console.log('signIn reducer called', action.payload)
            return { ...state, isSignedIn: true, userId: action.payload };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null };
        case REGISTER:
            return { ...state, isSignedIn: true, userId: action.payload };
        default:
            return state;
    }
};

