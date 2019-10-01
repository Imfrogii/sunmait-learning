import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionChangeLogin, actionChangePassword } from "../store/actions";
import '../App.css';


const correct =  {
  login: "admin",
  password: "1234",
}

export const Login = ({setLogined}) => {

  const login = useSelector(state => state.login);
  const password = useSelector(state => state.password);

  const dispatch = useDispatch();
  const changeLogin = (strLogin) => dispatch(actionChangeLogin(strLogin));
  const changePassword = (strPassword) => dispatch(actionChangePassword(strPassword));

  const [error, setError] = useState("");

  const confirm = (e) => {
    if(correct.login === login && correct.password === password){
      setError("");
      setLogined(true);
    }
    else{
      e.preventDefault();
      setError("Неправильный логин или пароль");
    }
  };

  return (
      <div className="login">
        <span>Enter your <em>login</em> and <em>password</em></span>
        <input
          type="text"
          placeholder="Username"
          onChange={(e)=>changeLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>changePassword(e.target.value)}
          />
        <Link to="/"><button
                        className="confirm_button"
                        type="button"
                        onClick={confirm}>
                        OK
                      </button></Link>
        <span className="error">{error}</span>
      </div>

  )
}
