import {
  ACTION_CHANGE_USER,
  USER_HAS_ERRORED
} from "../actionsTypes";

export const actionChangeUser = (login, password) => dispatch => {
  fetch("http://localhost:3001/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({ login, password })
  })
    .then(result =>
      result.json().then(data => {        
        if (data.login) {
          dispatch(userHasErrored(""));
          localStorage.setItem("isLogged", true);
          dispatch({
            type: ACTION_CHANGE_USER,
            payload: login
          });
        } else throw new Error("Wrong login or password");
      })
    )
    .catch(err => dispatch(userHasErrored(err)));
};

export const actionCreateUser = (
  login,
  password,
  firstName,
  lastName,
  age
) => dispatch => {
  fetch("http://localhost:3001/users/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({ login, password, firstName, lastName, age })
  })
    .then(data => {      
        if (data.ok) {
          dispatch(userHasErrored(""));
          localStorage.setItem("isLogged", true);
          dispatch({
            type: ACTION_CHANGE_USER,
            payload: login
          });
        } else throw new Error("Something went wrong :(");
      })
    .catch(err => dispatch(userHasErrored(err)));
};

export const userHasErrored = error => {
  return {
    type: USER_HAS_ERRORED,
    payload: error
  };
};
