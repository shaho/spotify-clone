import axios from "axios";
// import querySring from "query-string";

import * as config from "../constants";

export const getNewReleases = () => {
  // console.log("service", sessionStorage.getItem("accessToken"));

  try {
    return axios.get(config.NEW_RELEASES, {
      headers: {
        authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const getSearchByAlbum = (query) => {
  console.log("getSearchByAlbum query: ", query);

  try {
    const tets = axios.get(
      `${config.SEARCH}?q=${query}&type=album&limit=${config.LIMIT}`,
      {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      },
    );
    console.log(tets);
    return tets;
  } catch (error) {
    throw error;
  }
};

export const getSearch = (query) => {
  try {
    return axios.get(
      `${config.SEARCH}?q=${query}&type=album,artist,playlist,track&limit=${
        config.LIMIT
      }`,
      {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      },
    );
  } catch (error) {
    throw error;
  }
};

export const getCategories = () => {
  try {
    return axios.get(config.CATEGORIES, {
      headers: {
        authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
  } catch (error) {
    throw error;
  }
};
