import { createSelector } from "reselect";

const selectSearch = (state) => {
  return state.search;
};

export const selectAlbumsItems = createSelector(
  [selectSearch],
  (search) => {
    return search.albums;
  },
);
