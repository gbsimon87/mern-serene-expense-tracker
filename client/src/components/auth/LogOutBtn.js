import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";

function LogOutBtn() {
  const { getLoggedIn } = useContext(GlobalContext);

  const history = useHistory();

  async function logOut() {
    await axios.get(
      "http://localhost:5000/auth/logout"
    );
    await getLoggedIn();
    history.push("/");
  }

  return <button className="button-logout" onClick={logOut}>Log out</button>;
}

export default LogOutBtn;
