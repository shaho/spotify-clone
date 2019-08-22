import React from "react";

import "./index.styles.scss";

const Artist = ({ artist }) => {
  const { images, name } = artist;
  return (
    <div className="AlbumItemContainer">
      <img
        src={images.length ? images[2].url : ""}
        alt=""
        className="BackgroundImage"
      />
      <h3>{name}</h3>
    </div>
  );
};

export default Artist;
