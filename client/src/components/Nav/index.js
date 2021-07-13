import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function Nav() {
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">
            🛍️
          </span>
          -Shop-Shop
        </Link>
      </h1>
    </header>
  );
}

export default Nav;
