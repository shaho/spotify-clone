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

// export const fetchCategoryStart = () => {
//   return {
//     type: CategoryActionTypes.FETCH_CATEGORY_START,
//   };
// };

// export const fetchCategorySuccess = (category) => {
//   return {
//     type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS,
//     payload: category,
//   };
// };

// export const fetchCategoryFailure = (errorMessage) => {
//   return {
//     type: CategoryActionTypes.FETCH_CATEGORY_FAILURE,
//     payload: errorMessage,
//   };
// };
