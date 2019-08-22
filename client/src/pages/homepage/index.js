import React from "react";
// import NewReleases from "../../components/newReleases/NewReleases";
import querySring from "query-string";
import { Redirect } from "react-router-dom";

import Spinner from "../../components/layout/Spinner";

const HomePage = () => {
  const parsed = querySring.parse(window.location.search);
  const accessToken =
    parsed.access_token || sessionStorage.getItem("accessToken");
  if (accessToken) {
    sessionStorage.setItem("accessToken", accessToken);
  } else {
    window.location.href = "http://localhost:8888/login";
  }

  return (
    <div>
      <Spinner />
      {accessToken && <Redirect to="/categories" />}
    </div>
  );
};

export default HomePage;
