import {combineReducers} from "redux";
import registerReducer from "./register";
import loginReducer from "./login";
import parkingLotReducer from './parkinglot'
import profileReducer from './profile'

const rootReducer = combineReducers({
    registerResource: registerReducer,
    loginResource: loginReducer,
    parkingLotResource: parkingLotReducer,
    profileResource: profileReducer
});

export default rootReducer;