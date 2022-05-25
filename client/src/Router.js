import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Transactions from "./components/transactions/Transactions";
import Navbar from "./components/layout/Navbar";
import GlobalContext from "./context/GlobalContext";
import Home from "./components/layout/Home";

function Router() {
  const { loggedIn } = useContext(GlobalContext);

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {loggedIn === false && (
            <>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </>
          )}
          {loggedIn === true && (
            <>
              <Route path="/transactions">
                <Transactions />
              </Route>
            </>
          )}
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default Router;
