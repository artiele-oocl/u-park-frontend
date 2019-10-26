import {combineReducers} from "redux";
import registerReducer from "./register";
import loginReducer from "./login";
import parkingLotReducer from './parkinglot'

const rootReducer = combineReducers({
    registerResource: registerReducer,
    loginResource: loginReducer,
    parkingLotResource: parkingLotReducer
});

export default rootReducer;