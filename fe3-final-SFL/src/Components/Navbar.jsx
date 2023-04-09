import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { state: { isthemeBlack }, dispatch } = useContext(ContextGlobal);

  function changeTheme() {
    dispatch({ type: "TOGGLE_THEME" });
  }

  return (
    <nav className={isthemeBlack ? "dark" : ""}>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/favs">Favs</Link>
        </li>
      </ul>
      <button className={isthemeBlack ? "dark" : ""} onClick={changeTheme}>
        {isthemeBlack ? "🌞" : "🌑"}
      </button>
    </nav>
  );
};

export default Navbar;

