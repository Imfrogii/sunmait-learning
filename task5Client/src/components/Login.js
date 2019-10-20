import React, { useState, useEffect } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionChangeUser } from "../store/login/actions";
import "../App.css";

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const changeUser = (userLogin, userPassword) => dispatch(actionChangeUser(userLogin, userPassword));
  const { user, error } = useSelector(state => state.loginReducer);

  const validateUser = ({ login, password }) => {
    const regExpLogin = /^[0-9A-Za-z]+$/;
    const regExpPassword = /^\w+$/;
    if (login.length < 3) {
      setLoginError("Enter 3+ symbols");
    } else {
      if (!regExpLogin.test(login)) {
        setLoginError("Enter only letters or numbers");
      } else setLoginError("");
    }

    if (password.length < 4) {
      setPasswordError("Enter 4+ symbols");
    } else {
      if (!regExpPassword.test(password)) {
        setPasswordError("Enter only letters or numbers or '_'");
      } else setPasswordError("");
    }
  };

  useEffect(() => {
    validateUser({ login, password });
  }, [login, password]);

  const confirm = e => {
    if (loginError === "" && passwordError === "") {
      changeUser( login, password );
    }
  };

  const handlerKeyPress = event => {
    if (event.key === "Enter") confirm();
  };

  useEffect(() => {
    window.addEventListener("keypress", handlerKeyPress);
    return function() {
      window.removeEventListener("keypress", handlerKeyPress);
    };
  });

  return (
    <div className="login">
      <h2>Sign in</h2>
      <span>
        Enter your <em>login</em> and <em>password</em>
      </span>
      <input
        type="text"
        placeholder="Username"
        onChange={e => setLogin(e.target.value)}
      />
      <span className="error">{loginError}</span>
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <span className="error">{passwordError}</span>
      <button className="confirm_button" type="button" onClick={confirm}>
        OK
      </button>
      {user === null ? null : <Redirect to="/" />}
      <span className="error">{error.message}</span>
      <span>Don't have an account? <br/>
        <NavLink to="/signup" style={{color:"blue"}}> Sign up now!</NavLink>
      </span>
    </div>
  );
};
