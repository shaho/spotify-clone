import React, { useEffect } from "react";
import NewReleases from "../../components/newReleases/NewReleases";
import querySring from "query-string";

const HomePage = () => {
  useEffect(() => {
    const parsed = querySring.parse(window.location.search);
    const accessToken = parsed.access_token;
    if (accessToken) sessionStorage.setItem("accessToken", accessToken);
  }, []);
  return (
    <div>
      <h1>HomePage Content</h1>
      <NewReleases />
    </div>
  );
};

export default HomePage;
