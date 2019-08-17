import BrowseActionTypes from "./types";

export const fetchNewReleasesStart = () => {
  return {
    type: BrowseActionTypes.FETCH_NEW_RELEASES_START,
  };
};

export const fetchNewReleasesSuccess = (albums) => {
  return {
    type: BrowseActionTypes.FETCH_NEW_RELEASES_SUCCESS,
    payload: albums,
  };
};

export const fetchNewReleasesFailure = (errorMessage) => {
  return {
    type: BrowseActionTypes.FETCH_NEW_RELEASES_FAILURE,
    payload: errorMessage,
  };
};
