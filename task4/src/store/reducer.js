import { ACTION_CHANGE_LOGIN, ACTION_CHANGE_PASSWORD } from "./actions";

export const loginReducer = (state = {}, action) => {
  switch (action.type){
    case ACTION_CHANGE_LOGIN:
      return{
        ...state, login: action.payload,
      }
    case ACTION_CHANGE_PASSWORD:
      return{
        ...state, password: action.payload,
      }
    default:{}
  }
  return state;
};
