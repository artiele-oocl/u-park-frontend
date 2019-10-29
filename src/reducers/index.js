import {combineReducers} from "redux";
import registerReducer from "./register";
import loginReducer from "./login";
import parkingLotReducer from './parkinglot'
import checkoutReducer from './checkout'
import profileReducer from './profile'

const rootReducer = combineReducers({
    registerResource: registerReducer,
    loginResource: loginReducer,
    parkingLotResource: parkingLotReducer,
    checkoutResource: checkoutReducer,
    profileResource: profileReducer
});

export default rootReducer;