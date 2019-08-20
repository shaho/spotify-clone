import { createSelector } from "reselect";

const selectSearch = (state) => {
  return state.search;
};

export const selectIsSearchFetching = createSelector(
  [selectSearch],
  (search) => {
    return search.isFetching;
  },
);

export const selectResults = createSelector(
  [selectSearch],
  (search) => {
    return search.results;
  },
);

export const selectAlbums = createSelector(
  [selectResults],
  (results) => {
    return results.albums;
  },
);

export const selectArtists = createSelector(
  [selectResults],
  (results) => {
    return results.artists;
  },
);

export const selectPlaylists = createSelector(
  [selectResults],
  (results) => {
    return results.playlists;
  },
);

export const selectTracks = createSelector(
  [selectResults],
  (results) => {
    return results.tracks;
  },
);
