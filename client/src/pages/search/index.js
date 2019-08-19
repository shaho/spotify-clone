import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import { fetchAlbumsStart } from "../../redux/search/actions";

const Search = ({ albums, fetchAlbumsStart, ...props }) => {
  console.log(props);
  useEffect(() => {
    fetchAlbumsStart();
  }, [fetchAlbumsStart]);
  return (
    <div>
      <h4>NewReleases</h4>
      <div
        style={{
          display: "inline-block",
          padding: "10px",
          backgroundColor: "#c0c0c0",
        }}
      />
      {albums.length ? (
        <div>
          {albums.map((item) => {
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

const mapStateToProps = (state) => {
  return {
    albums: state.search.albums,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // const searchQuery = ownProps.match.params.query;
  // console.log("QUERY: ", query);
  return {
    fetchAlbumsStart: () =>
      dispatch(fetchAlbumsStart(ownProps.match.params.query)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
