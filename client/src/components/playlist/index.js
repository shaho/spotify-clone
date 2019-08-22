import React from "react";
import { Link } from "react-router-dom";

import "./index.styles.scss";

const Playlist = ({ playlist }) => {
  return (
    <div className="AlbumItemContainer">
      <img src={playlist.images[0].url} alt="" className="BackgroundImage" />
      <h3>
        <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
      </h3>
    </div>
  );
};

export default Playlist;
