import PlaylistsActionTypes from "./types";

export const fetchPlaylistsStart = (id) => {
  return {
    type: PlaylistsActionTypes.FETCH_PLAYLISTS_START,
    payload: id,
  };
};

export const fetchPlaylistsSuccess = (playlists) => {
  return {
    type: PlaylistsActionTypes.FETCH_PLAYLISTS_SUCCESS,
    payload: playlists,
  };
};

export const fetchPlaylistsFailure = (errorMessage) => {
  return {
    type: PlaylistsActionTypes.FETCH_PLAYLISTS_FAILURE,
    payload: errorMessage,
  };
};
