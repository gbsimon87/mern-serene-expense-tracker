import { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalContext from "../../../context/GlobalContext";
import LogOutBtn from "../../auth/LogOutBtn";
import './Navbar.css';

function Navbar() {
  const { loggedIn } = useContext(GlobalContext);
  const history = useHistory();

  return (
    <>
      <header className="header">
        <nav className="header--navbar">
          <div className="header--navbar__left">
            <h3 onClick={() => history.push("/")}>Serene</h3>
          </div>
          <div className="header--navbar__right">
            {loggedIn === false && (
              <>
                <div className="button-register" onClick={() => history.push("/register")}>Register</div>
                <div className="button-login" onClick={() => history.push("/login")}>Log in</div>
              </>
            )}
            {loggedIn === true && (
              <>
                <div className="header--navbar__right-transactions" onClick={() => history.push("/transactions")}>Transactions</div>
                <LogOutBtn />
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
