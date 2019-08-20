import { createSelector } from "reselect";

const selectCategories = (state) => {
  return state.categories;
};

export const selectCategoriesItems = createSelector(
  [selectCategories],
  (categories) => {
    return categories.categories;
  },
);
