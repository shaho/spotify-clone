import SearchActionTypes from "./types";

export const fetchSearchStart = (query) => {
  return {
    type: SearchActionTypes.FETCH_SEARCH_START,
    payload: query,
  };
};

export const fetchSearchSuccess = (results) => {
  return {
    type: SearchActionTypes.FETCH_SEARCH_SUCCESS,
    payload: results,
  };
};

export const fetchSearchFailure = (errorMessage) => {
  return {
    type: SearchActionTypes.FETCH_SEARCH_FAILURE,
    payload: errorMessage,
  };
};
