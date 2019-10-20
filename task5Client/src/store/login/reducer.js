import { ACTION_CHANGE_USER, USER_HAS_ERRORED } from "../actionsTypes";

const initialState = {
  user: null,
  error: "",
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_USER:
      return {
        ...state,
        user: action.payload
      };
    case USER_HAS_ERRORED:
      return {
        ...state,
        error: action.payload
      }
    default: {
      return state;
    }
  }
};
