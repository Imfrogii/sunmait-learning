import { loginReducer } from "./login/reducer";
import { blocksReducer } from "./blocks/reducer";
import { combineReducers } from "redux";


export const allReducers = combineReducers({
  loginReducer,
  blocksReducer,
});

