import { createSelector } from "reselect";

const selectPlaylists = (state) => {
  return state.playlists;
};

export const selectIsPlaylistsFetching = createSelector(
  [selectPlaylists],
  (playlists) => {
    return playlists.isFetching;
  },
);

export const selectPlaylistsPlaylists = createSelector(
  [selectPlaylists],
  (playlists) => {
    return playlists;
  },
);

export const selectPlaylistsItems = createSelector(
  [selectPlaylistsPlaylists],
  (playlists) => {
    return playlists.playlists;
  },
);
