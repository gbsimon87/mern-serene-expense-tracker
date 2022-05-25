import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import GlobalContext from "../../context/GlobalContext";

import "./auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(GlobalContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await axios.post(
        "http://localhost:5000/auth/login",
        loginData
      );
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="page-login">
      <h1>Log in to your account</h1>
      <form className="form" onSubmit={login}>
        <div class="form__inputContainer">
          <input
            type="email"
            className="form__inputContainer"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div class="form__inputContainer">
          <input
            type="password"
            className="form__inputContainer"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div class="form__inputContainer">
          <button className="change-to-button-primary" type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
