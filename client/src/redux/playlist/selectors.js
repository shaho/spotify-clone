import { createSelector } from "reselect";

const selectPlaylist = (state) => {
  return state.playlist;
};

export const selectIsPlaylistFetching = createSelector(
  [selectPlaylist],
  (playlist) => {
    return playlist.isFetching;
  },
);

export const selectPlaylistItem = createSelector(
  [selectPlaylist],
  (playlist) => {
    return playlist.playlist;
  },
);
