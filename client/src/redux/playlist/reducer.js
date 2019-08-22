import PlaylistActionTypes from "./types";

const initialState = {
  isFetching: false,
  playlist: [],
  errorMessage: undefined,
};

const playlistRedeucer = (state = initialState, action) => {
  switch (action.type) {
    case PlaylistActionTypes.FETCH_PLAYLIST_START:
      return {
        ...state,
        id: action.payload,
        isFetching: true,
      };
    case PlaylistActionTypes.FETCH_PLAYLIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        playlist: action.payload,
      };
    case PlaylistActionTypes.FETCH_PLAYLIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default playlistRedeucer;
