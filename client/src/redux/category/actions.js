import CategoryActionTypes from "./types";

export const fetchCategoryStart = () => {
  return {
    type: CategoryActionTypes.FETCH_CATEGORY_START,
  };
};

export const fetchCategorySuccess = (category) => {
  return {
    type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS,
    payload: category,
  };
};

export const fetchCategoryFailure = (errorMessage) => {
  return {
    type: CategoryActionTypes.FETCH_CATEGORY_FAILURE,
    payload: errorMessage,
  };
};
