import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { fetchPlaylistStart } from "../../redux/playlist/actions";
import {
  selectPlaylistItem,
  selectIsPlaylistFetching,
} from "../../redux/playlist/selectors";

import Spinner from "../../components/layout/Spinner";

const Playlist = ({ isPlaylistFetching, fetchPlaylistStart, playlist }) => {
  useEffect(() => {
    fetchPlaylistStart();
  }, [fetchPlaylistStart]);
  return (
    <div className="container">
      <section>
        <div>
          {isPlaylistFetching && <Spinner />}
          <h1>Playlist: {playlist.name}</h1>
          {/* {console.log("clg", playlist)} */}

          {/* <ul>
            {playlist.tracks.items &&
              playlist.tracks.items.map((item) => {
                return <li>1</li>;
              })}
          </ul> */}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isPlaylistFetching: selectIsPlaylistFetching,
  playlist: selectPlaylistItem,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPlaylistStart: () =>
      dispatch(fetchPlaylistStart(ownProps.match.params.id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
