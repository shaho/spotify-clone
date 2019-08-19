import React from "react";
// import {} from "react-router-dom";
import { withRouter } from "react-router-dom";

import "./index.styles.scss";
import SearchForm from "../search/SeacrhForm";

const Header = ({ history }) => {
  return (
    <div className="header">
      <div className="logo-container">
        <div>
          Reactify <span>Spotify</span>
        </div>
      </div>

      <div>
        <button onClick={() => history.push("/search/shajarian")}>
          Search Shajarian
        </button>
      </div>

      <SearchForm />
    </div>
  );
};

export default withRouter(Header);
