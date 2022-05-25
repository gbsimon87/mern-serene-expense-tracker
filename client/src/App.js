import React from "react";
import axios from "axios";

import Router from "./Router";
import { GlobalContextProvider } from "./context/GlobalContext";
import "./App.css";

axios.defaults.withCredentials = true;

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Router />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
