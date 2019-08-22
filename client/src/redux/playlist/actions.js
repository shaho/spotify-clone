import PlaylistActionTypes from "./types";

export const fetchPlaylistStart = (id) => {
  return {
    type: PlaylistActionTypes.FETCH_PLAYLIST_START,
    payload: id,
  };
};

export const fetchPlaylistSuccess = (playlist) => {
  return {
    type: PlaylistActionTypes.FETCH_PLAYLIST_SUCCESS,
    payload: playlist,
  };
};

export const fetchPlaylistFailure = (errorMessage) => {
  return {
    type: PlaylistActionTypes.FETCH_PLAYLIST_FAILURE,
    payload: errorMessage,
  };
};
