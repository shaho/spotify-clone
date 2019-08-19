import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const SearchForm = ({ history }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Start typing..."
          required
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default withRouter(SearchForm);
