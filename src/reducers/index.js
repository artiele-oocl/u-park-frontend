import {combineReducers} from "redux";
import registerReducer from "./register";
import loginReducer from "./login";

const rootReducer = combineReducers({
  registerResource: registerReducer,
  loginResource: loginReducer
});

export default rootReducer;