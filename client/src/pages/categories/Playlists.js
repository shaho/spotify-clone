import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { fetchPlaylistsStart } from "../../redux/playlists/actions";
import {
  selectPlaylistsItems,
  selectIsPlaylistsFetching,
} from "../../redux/playlists/selectors";

import Spinner from "../../components/layout/Spinner";

const Playlists = ({ isPlaylistFetching, fetchPlaylistsStart, playlists }) => {
  useEffect(() => {
    fetchPlaylistsStart();
  }, [fetchPlaylistsStart]);
  return (
    <div className="temp-container">
      <section>
        <h3>Genres and Moods</h3>

        <div className="grid">
          {isPlaylistFetching && <Spinner />}
          {playlists.items &&
            playlists.items.map((item) => {
              return (
                <div key={item.id}>
                  <Link to={`/categories/${item.id}`}>
                    <div
                      style={{
                        backgroundImage: `url(${item.images[0].url})`,
                        backgroundSize: "cover",
                        width: "100px",
                        height: "100px",
                        margin: "10px 10px",
                      }}
                    >
                      <h5>{item.name}</h5>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isPlaylistFetching: selectIsPlaylistsFetching,
  playlists: selectPlaylistsItems,
});

// const mapStateToProps = (state) => {
//   return {
//     playlists: state.playlists,
//   };
// };

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPlaylistsStart: () =>
      dispatch(fetchPlaylistsStart(ownProps.match.params.id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlists);
