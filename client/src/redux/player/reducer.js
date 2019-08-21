import PlayerActionTypes from "./types";

const initialState = {
  url: [],
};

const playerRedeucer = (state = initialState, action) => {
  switch (action.type) {
    case PlayerActionTypes.ADD_ITEM:
      return {
        ...state,
        url: action.payload,
      };
    default:
      return state;
  }
};

export default playerRedeucer;
