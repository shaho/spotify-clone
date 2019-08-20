import SearchActionTypes from "./types";

const initialState = {
  isFetching: false,
  results: [],
  query: "",
  errorMessage: undefined,
};

const searchRedeucer = (state = initialState, action) => {
  switch (action.type) {
    case SearchActionTypes.FETCH_SEARCH_START:
      return {
        ...state,
        query: action.payload,
        isFetching: true,
      };
    case SearchActionTypes.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        results: action.payload,
      };
    case SearchActionTypes.FETCH_SEARCH_FAILURE:
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
