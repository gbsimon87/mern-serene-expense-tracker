import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

function GlobalContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    const loggedInRes = await axios.get(
      "http://localhost:5000/auth/loggedIn"
    );
    setLoggedIn(loggedInRes.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <GlobalContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
export { GlobalContextProvider };
