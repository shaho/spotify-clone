import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchSearchStart } from "../../redux/search/actions";
import { selectAlbumsItems } from "../../redux/search/selectors";

import "./index.styles.scss";

const Search = ({ items, fetchSearchStart }) => {
  useEffect(() => {
    fetchSearchStart();
  }, [fetchSearchStart]);
  return (
    <div>
      {/* const items  */}
      <h4>Search</h4>

      <div className="grid">
        {/* {items.map((item) => {
          return (
            <div style={{ padding: "10%" }} key={item.id}>
              <img src={item.images[2].url} alt="" />
              <h3>{item.name}</h3>
              <span>Released at: {item.release_date}</span>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log("State:", state.search);
  return {
    items: state.search.results.albums,
  };
};
// const mapStateToProps = createStructuredSelector({
//   albums: selectAlbumsItems,
// });

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSearchStart: () =>
      dispatch(fetchSearchStart(ownProps.match.params.query)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
