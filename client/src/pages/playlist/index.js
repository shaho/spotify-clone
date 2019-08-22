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

          <h5 style={{ color: "red" }}>
            note: Spotify API doesn't provide preview_url in their playlist's
            object
          </h5>

          {playlist && playlist.tracks && playlist.tracks.items && (
            <ul>
              {console.log(playlist.tracks.items)}
              {playlist.tracks.items.map((item) => {
                return <li>{item.track.name}</li>;
              })}
            </ul>
          )}
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
