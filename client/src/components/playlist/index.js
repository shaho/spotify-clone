import React from "react";

import "./index.styles.scss";

const Playlist = ({ playlist }) => {
  return (
    <div className="AlbumItemContainer">
      <img src={playlist.images[0].url} alt="" className="BackgroundImage" />
      <h3>{playlist.name}</h3>
      {/* <span>{playlist.artists[0].name}</span> */}
    </div>
  );
};

export default Playlist;
