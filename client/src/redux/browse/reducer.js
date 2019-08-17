import BrowseActionTypes from "./types";

const initialState = {
  isFetching: false,
  newReleases: [],
  errorMessage: undefined,
};

const browseRedeucer = (state = initialState, action) => {
  switch (action.type) {
    case BrowseActionTypes.FETCH_NEW_RELEASES_START:
      return {
        ...state,
        isFetching: true,
      };
    case BrowseActionTypes.FETCH_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        newReleases: action.payload,
      };
    case BrowseActionTypes.FETCH_NEW_RELEASES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default browseRedeucer;
