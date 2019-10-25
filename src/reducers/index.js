import loginReducer from "./login";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  loginResource: loginReducer,
});

export default rootReducer;
