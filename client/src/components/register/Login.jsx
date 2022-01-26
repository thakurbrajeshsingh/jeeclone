import React, { useState } from "react";

import { authenticatelogin } from "../../service/api";
import "./login.css";
import FooterMain from "../footer/Main";

const URL = "https://i.ibb.co/vJJxyjV/melogo.png";
const Login = () => {
  const loginInitialValues = {
    identity: "",
    password: "",
  };

  const [login, setLogin] = useState(loginInitialValues);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div id="body">
        <main id="main-holder">
          <h1 id="login-header">JEE MAINS LOGIN 2022</h1>
          <img src={URL} alt="" srcset="" />
          <div id="login-error-msg-holder">
            <p id="login-error-msg">
              Invalid username
              <span id="error-msg-second-line">and/or password</span>
            </p>
          </div>

          <form id="login-form">
            <input
              type="text"
              name="identity"
              onChange={(e) => onInputChange(e)}
              id="username-field"
              class="login-form-field"
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              onChange={(e) => onInputChange(e)}
              id="password-field"
              class="login-form-field"
              placeholder="Password"
            />
            <input type="submit" value="Login" id="login-form-submit" />
          </form>
        </main>
      </div>
      <FooterMain />
    </>
  );
};

export default Login;
