import {combineReducers} from "redux";
import registerReducer from "./register";
import loginReducer from "./login";
import parkingLotReducer from './parkinglot'
import checkoutReducer from './checkout'

const rootReducer = combineReducers({
    registerResource: registerReducer,
    loginResource: loginReducer,
    parkingLotResource: parkingLotReducer,
    transactionResource: checkoutReducer

});

export default rootReducer;