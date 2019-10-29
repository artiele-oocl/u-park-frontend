import {combineReducers} from "redux";
import registerReducer from "./register";
import loginReducer from "./login";
import parkingLotReducer from './parkinglot';
import transactionOrderReducer from './transactionorder';

const rootReducer = combineReducers({
    registerResource: registerReducer,
    loginResource: loginReducer,
    parkingLotResource: parkingLotReducer,
    transactionOrderResource: transactionOrderReducer
});

export default rootReducer;