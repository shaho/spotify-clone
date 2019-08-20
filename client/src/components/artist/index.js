import React from "react";

import "./index.styles.scss";

const Artist = ({ artist }) => {
  return (
    <div className="AlbumItemContainer">
      <img src={artist.images[2].url} alt="" className="BackgroundImage" />
      <h3>{artist.name}</h3>
      {/* <span>{artist.artists[0].name}</span> */}
    </div>
  );
};

export default Artist;
