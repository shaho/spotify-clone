import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchNewReleasesStart } from "../redux/browse/actions";
import { selectNewReleasesItems } from "../redux/browse/selectors";

const NewReleases = ({ items, fetchNewReleasesStart }) => {
  useEffect(() => {
    fetchNewReleasesStart();
  }, [fetchNewReleasesStart]);

  return (
    <div>
      <h1>NewReleases</h1>
      <div
        style={{
          display: "inline-block",
          padding: "10px",
          backgroundColor: "#c0c0c0",
        }}
      />
      {items ? (
        <div>
          {items.map((item) => {
            return (
              <div style={{ padding: "10%" }} key={item.id}>
                <img src={item.images[2].url} alt="" />
                <h3>{item.name}</h3>
                <span>Released at: {item.release_date}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <button
          onClick={() => (window.location = "http://localhost:8888/login")}
          style={{ padding: "20px", fontSize: "50px", marginTop: "20px" }}
        >
          Sign in with Soptify
        </button>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectNewReleasesItems,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewReleasesStart: () => dispatch(fetchNewReleasesStart()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewReleases);
