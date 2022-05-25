import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import GlobalContext from "../../context/GlobalContext";

import "./auth.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(GlobalContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };

      await axios.post("http://localhost:5000/auth/", registerData);
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="page-register">
      <h1>Create a new account</h1>
      <form className="form" onSubmit={register}>
        <div className="form__inputContainer">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form__inputContainer">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form__inputContainer">
          <input
            type="password"
            placeholder="Verify your password"
            onChange={(e) => setPasswordVerify(e.target.value)}
            value={passwordVerify}
          />
        </div>
        <div className="form__inputContainer">
          <button className="change-to-button-primary" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
