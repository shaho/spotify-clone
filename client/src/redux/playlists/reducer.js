import PlaylistsActionTypes from "./types";

const initialState = {
  isFetching: false,
  playlists: [],
  errorMessage: undefined,
};

const playlistsRedeucer = (state = initialState, action) => {
  switch (action.type) {
    case PlaylistsActionTypes.FETCH_PLAYLISTS_START:
      return {
        ...state,
        id: action.payload,
        isFetching: true,
      };
    case PlaylistsActionTypes.FETCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        playlists: action.payload,
      };
    case PlaylistsActionTypes.FETCH_PLAYLISTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default playlistsRedeucer;
