import axios from "axios";
import querySring from "query-string";

import * as config from "../constants";

export const getNewReleases = () => {
  let parsed = querySring.parse(window.location.search);
  let accessToken = parsed.access_token;
  // console.log(accessToken);

  try {
    return axios.get(config.NEW_RELEASES, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const getSearchByAlbum = (query) => {
  let parsed = querySring.parse(window.location.search);
  let accessToken = parsed.access_token;

  console.log("getSearchByAlbum query: ", query);

  try {
    const tets = axios.get(
      `${config.SEARCH}?q=${query}&type=album&limit=${config.LIMIT}`,
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
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
  let parsed = querySring.parse(window.location.search);
  let accessToken = parsed.access_token;

  // console.log("getSearchByAlbum query: ", query);

  try {
    const tets = axios.get(
      `${config.SEARCH}?q=${query}&type=album,artist,playlist,track&limit=${
        config.LIMIT
      }`,
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    );
    console.log(tets);
    return tets;
  } catch (error) {
    throw error;
  }
};
