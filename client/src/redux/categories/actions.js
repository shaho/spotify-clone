import CategoriesActionTypes from "./types";

export const fetchCategoriesStart = () => {
  return {
    type: CategoriesActionTypes.FETCH_CATEGORIES_START,
  };
};

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  };
};

export const fetchCategoriesFailure = (errorMessage) => {
  return {
    type: CategoriesActionTypes.FETCH_CATEGORIES_FAILURE,
    payload: errorMessage,
  };
};
