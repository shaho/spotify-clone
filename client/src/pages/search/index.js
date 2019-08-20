import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchSearchStart } from "../../redux/search/actions";
import {
  selectIsSearchFetching,
  selectAlbums,
  selectArtists,
  selectPlaylists,
  selectTracks,
} from "../../redux/search/selectors";

import Spinner from "../../components/layout/Spinner";
import Album from "../../components/album";
import Artist from "../../components/artist";
import Track from "../../components/track";
import Playlist from "../../components/playlist";

import "./index.styles.scss";

const Search = ({
  isSearchFetching,
  fetchSearchStart,
  albums,
  artists,
  playlists,
  tracks,
}) => {
  useEffect(() => {
    fetchSearchStart();
  }, [fetchSearchStart]);
  return (
    <div className="temp-container">
      <section>
        <h3>Songs</h3>
        <div className="grid">
          {isSearchFetching && <Spinner />}
          {tracks &&
            tracks.items.map((item) => {
              return <Track track={item} key={item.id} />;
            })}
        </div>
      </section>

      <section>
        <h3>Artists</h3>
        <div className="grid">
          {isSearchFetching && <Spinner />}
          {artists &&
            artists.items.map((item) => {
              return <Artist artist={item} key={item.id} />;
            })}
        </div>
      </section>

      <section>
        <h3>Albums</h3>
        <div className="grid">
          {isSearchFetching && <Spinner />}
          {albums &&
            albums.items.map((item) => {
              return <Album album={item} key={item.id} />;
            })}
        </div>
      </section>

      <section>
        <h3>Playlists</h3>
        <div className="grid">
          {isSearchFetching && <Spinner />}
          {playlists &&
            playlists.items.map((item) => {
              return <Playlist playlist={item} key={item.id} />;
            })}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isSearchFetching: selectIsSearchFetching,
  albums: selectAlbums,
  artists: selectArtists,
  playlists: selectPlaylists,
  tracks: selectTracks,
});

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
