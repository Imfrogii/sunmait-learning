import { ACTION_CHANGE_USER, USER_HAS_ERRORED } from "../actionsTypes";
import { doLogIn } from "../../store/server";

export const actionChangeUser = ({login, password}) => dispatch =>{
  doLogIn(login, password)
    .then(
      result => {
        dispatch(userHasErrored(""));
        localStorage.setItem("isLogged", true);
        dispatch({
          type: ACTION_CHANGE_USER,
          payload: login
        });
      },
      err => {
        throw new Error("Wrong login or password");
      }
    )
    .catch(err => dispatch(userHasErrored(err)));
};
export const userHasErrored = (error) => {
  return{
    type: USER_HAS_ERRORED,
    payload: error,
  }
};

