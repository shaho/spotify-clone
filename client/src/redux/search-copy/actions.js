import SearchActionTypes from "./types";

export const fetchAlbumsStart = (query) => {
  return {
    type: SearchActionTypes.FETCH_SEARCH_ALBUMS_START,
    payload: query,
  };
};

export const fetchAlbumsSuccess = (albums) => {
  return {
    type: SearchActionTypes.FETCH_SEARCH_ALBUMS_SUCCESS,
    payload: albums,
  };
};

export const fetchAlbumsFailure = (errorMessage) => {
  return {
    type: SearchActionTypes.FETCH_SEARCH_ALBUMS_FAILURE,
    payload: errorMessage,
  };
};
