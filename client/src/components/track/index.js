import React from "react";

import "./index.styles.scss";

const Track = ({ track }) => {
  return (
    <div className="AlbumItemContainer">
      <img src={track.album.images[2].url} alt="" className="BackgroundImage" />
      <h3>{track.name}</h3>
      <span>{track.artists[0].name}</span>
    </div>
  );
};

export default Track;
