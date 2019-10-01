import { createStore } from 'redux';
import { loginReducer } from "./reducer";

const initialState = {
  login: "",
  password: "",
};

export const store = createStore(loginReducer, initialState);
