import PlayerActionTypes from "./types";

export const addItem = (url) => {
  return {
    type: PlayerActionTypes.ADD_ITEM,
    payload: url,
  };
};
