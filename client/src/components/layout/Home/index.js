import { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalContext from "../../../context/GlobalContext";
import heroImage from "../../../images/budget_1-modified.png";
import heroImageTwo from "../../../images/budget_2-modified.png";

import "./Home.css";

function Home() {
  let history = useHistory();
  const { loggedIn } = useContext(GlobalContext);

  const handleClick = (event) => {
    event.preventDefault();
    if (loggedIn) return history.push("/transactions");
    return history.push("/login");
  };

  return (
    <div className="home">
      <section className="home--intro">
        <h1 className="home--heading">Get your money in your hands</h1>
        <p className="home--sub-heading">
          Simplest way to manage your finances, optimise your spending, and
          crush your financial goals
        </p>
        <div>
          <img
            className="home--hero-image"
            src={heroImageTwo}
            alt="Financial control"
          />
        </div>
        <div>
          <button className="button__primary" onClick={handleClick}>
            {loggedIn ? "SEE TRANSACTIONS" : "TRY IT FOR FREE"}
          </button>
        </div>
      </section>
      <section className="home--take-control">
        <div>
          <img
            className="home--hero-image"
            src={heroImage}
            alt="Financial control 2"
          />
        </div>
        <h2>Personal finance at ease</h2>
        <p>
          Managing your money can be simple. The SC Tracker budgeting software
          and its intuitive approach will help you organize your finances, plan
          your escape from debt, and most importantly, let you envision your
          financial goals faster.
        </p>
      </section>
      <section className="home--how-it-works">
        <h2>Real results</h2>
        <p>
          Managing your money can be simple. On average, new budgeters save over
          $5,000 their first year, and close to $1000 their first two months.
        </p>
        <div>
          <button className="button__secondary" onClick={handleClick}>
            {loggedIn ? "SEE TRANSACTIONS" : "GIVE IT A SHOT"}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
