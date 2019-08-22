import { createSelector } from "reselect";

const selectNewReleases = (state) => {
  return state.browse;
};

export const selectIsNewReleasesFetching = createSelector(
  [selectNewReleases],
  (browse) => {
    return browse.isFetching;
  },
);

export const selectNewReleasesItems = createSelector(
  [selectNewReleases],
  (browse) => {
    return browse.newReleases;
  },
);
