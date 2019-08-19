import SearchActionTypes from "./types";

const initialState = {
  isFetching: false,
  albums: [],
  query: "",
  errorMessage: undefined,
};

const searchRedeucer = (state = initialState, action) => {
  switch (action.type) {
    case SearchActionTypes.FETCH_SEARCH_ALBUMS_START:
      return {
        ...state,
        query: action.payload,
        isFetching: true,
      };
    case SearchActionTypes.FETCH_SEARCH_ALBUMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        albums: action.payload,
      };
    case SearchActionTypes.FETCH_SEARCH_ALBUMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default searchRedeucer;
