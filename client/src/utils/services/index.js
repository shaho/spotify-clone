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
