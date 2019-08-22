import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
    <div className="container">
      <h4>NewReleases</h4>
      {isLoading && <Spinner />}
      {items &&
        items.map((item) => {
          return (
            <Link to={`/album/${item.id}`} key={item.id}>
              <div
                className="Categories"
                style={{
                  backgroundImage: `url(${item.images[1].url})`,
                }}
              >
                <h5>{item.name}</h5>
              </div>
            </Link>
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
