import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchNewReleasesStart } from "../../redux/browse/actions";
import {
  selectIsNewReleasesFetching,
  selectNewReleasesItems,
} from "../../redux/browse/selectors";

import Spinner from "../../components/layout/Spinner";

const NewReleases = ({ items, isLoading, fetchNewReleasesStart }) => {
  useEffect(() => {
    fetchNewReleasesStart();
  }, [fetchNewReleasesStart]);

  return (
    <div className="grid">
      <h4>NewReleases</h4>
      {isLoading && <Spinner />}
      {items &&
        items.map((item) => {
          return (
            <div style={{ padding: "10%" }} key={item.id}>
              <img src={item.images[2].url} alt="" />
              <h3>{item.name}</h3>
              <span>Released at: {item.release_date}</span>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectNewReleasesItems,
  isLoading: selectIsNewReleasesFetching,
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
