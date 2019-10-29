import {combineReducers} from "redux";
import registerReducer from "./register";
import loginReducer from "./login";
import checkoutReducer from './checkout'
import profileReducer from './profile'
import parkingLotReducer from './parkinglot';
import transactionOrderReducer from './transactionorder';

const rootReducer = combineReducers({
    registerResource: registerReducer,
    loginResource: loginReducer,
    parkingLotResource: parkingLotReducer,
    checkoutResource: checkoutReducer,
    profileResource: profileReducer,
    transactionOrderResource: transactionOrderReducer
});

export default rootReducer;