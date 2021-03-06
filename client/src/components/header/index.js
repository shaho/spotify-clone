import React from "react";
// import {} from "react-router-dom";
import { Link } from "react-router-dom";

import "./index.styles.scss";
import SearchForm from "../search/SeacrhForm";

const Header = () => {
  return (
    <div className="header">
      <Link to="/categories">
        <div className="logo-container">
          <div>
            Reactify <span>Spotify</span>
          </div>
        </div>
      </Link>

      <Link to="/categories">categories</Link>
      <Link to="/newrealeses">New Releases</Link>
      <SearchForm />
    </div>
  );
};

export default Header;
