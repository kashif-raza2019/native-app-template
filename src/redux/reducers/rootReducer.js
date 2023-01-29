import { combineReducers } from "redux";
import signInReducer from "./signInReducer";


const rootReducer = combineReducers({
    signInReducer,
});

export default rootReducer;