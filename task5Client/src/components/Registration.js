import React, { useState, useEffect } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreateUser } from "../store/login/actions";
import "../App.css";

export const Registration = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [ageError, setAgeError] = useState("");

  const dispatch = useDispatch();
  const createUser = (
    login,
    password,
    repeatPassword,
    firstName,
    lastName,
    age
  ) =>
    dispatch(
      actionCreateUser(
        login,
        password,
        repeatPassword,
        firstName,
        lastName,
        age
      )
    );
  const { user, error } = useSelector(state => state.loginReducer);

  const validateLogin = login => {
    const regExp = /^[0-9A-Za-z]+$/;
    if (login.length < 3) {
      setLoginError("Enter 3+ symbols");
    } else {
      if (!regExp.test(login)) {
        setLoginError("Enter only letters or numbers");
      } else setLoginError("");
    }
  };

  const validatePassword = password => {
    const regExp = /^\w+$/;
    const regExpLetter = /^\w*[A-Za-z]+\w*/;
    const regExpDigit = /^\w*[0-9]+\w*/;
    if (password.length < 4) {
      setPasswordError("Enter 4+ symbols");
    } else {
      if (!regExp.test(password)) {
        setPasswordError("Enter only letters or numbers or '_'");
      } else {
        if (!regExpLetter.test(password))
          setPasswordError("Password must contain at least 1 letter");
        else {
          if (!regExpDigit.test(password))
            setPasswordError("Password must contain at least 1 digit");
          else setPasswordError("");
        }
      }
    }
  };

  const validateRepeatPassword = repeatPassword => {
    password !== repeatPassword
      ? setRepeatPasswordError("Passwords must be equal")
      : setRepeatPasswordError("");
  };

  const validateName = (name, setError) => {
    const regExp = /^[A-Za-z]+$/;
    if (name.length < 3) {
      setError("Enter 3+ letters");
    } else {
      if (!regExp.test(name)) {
        setError("Enter only letters");
      } else setError("");
    }
  };

  const validateAge = age => {
    const regExp = /^\d+$/;
    if (age.length > 3) {
      setAgeError("You're too old");
    } else {
      if (!regExp.test(age)) {
        setAgeError("Enter only digits");
      } else {
        if (age === "0") setAgeError("Age can't be 0");
        else setAgeError("");
      }
    }
  };

  const confirm = e => {
    if (
      loginError === "" &&
      passwordError === "" &&
      repeatPasswordError === "" &&
      firstNameError === "" &&
      lastNameError === "" &&
      ageError === "" &&
      login !== "" &&
      password !== "" &&
      repeatPassword !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      age !== ""
    ) {
      createUser(login, password, firstName, lastName, age);
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
    <div className="registration">
      <h2>Sign up</h2>
      <span>
        Enter your <em>login</em> and <em>password</em>
      </span>
      <input
        type="text"
        placeholder="Username"
        onChange={e => {
          setLogin(e.target.value);
          validateLogin(e.target.value);
        }}
      />
      <span className="error">{loginError}</span>

      <input
        type="password"
        placeholder="Password"
        onChange={e => {
          setPassword(e.target.value);
          validatePassword(e.target.value);
        }}
      />
      <span className="error">{passwordError}</span>

      <input
        type="password"
        placeholder="Repeat password"
        onChange={e => {
          setRepeatPassword(e.target.value);
          validateRepeatPassword(e.target.value);
        }}
      />
      <span className="error">{repeatPasswordError}</span>

      <input
        type="text"
        placeholder="First name"
        onChange={e => {
          setFirstName(e.target.value);
          validateName(e.target.value, setFirstNameError);
        }}
      />
      <span className="error">{firstNameError}</span>

      <input
        type="text"
        placeholder="Last name"
        onChange={e => {
          setLastName(e.target.value);
          validateName(e.target.value, setLastNameError);
        }}
      />
      <span className="error">{lastNameError}</span>

      <input
        type="text"
        placeholder="Age"
        onChange={e => {
          setAge(e.target.value);
          validateAge(e.target.value);
        }}
      />
      <span className="error">{ageError}</span>

      <button className="confirm_button" type="button" onClick={confirm}>
        OK
      </button>
      {user === null ? null : <Redirect to="/" />}
      <span className="error">{error.message}</span>
      <span>
        Have an account? <br />
        <NavLink to="/login" style={{ color: "blue" }}>
          Sign in now!
        </NavLink>
      </span>
    </div>
  );
};
