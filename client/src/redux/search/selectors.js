import { createSelector } from "reselect";

const selectSearch = (state) => {
  // console.log(state.search);
  return state.search;
};

export const selectAlbumsItems = createSelector(
  [selectSearch],
  (albums) => {
    return albums.items;
  },
);
