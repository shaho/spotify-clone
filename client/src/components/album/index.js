import React from "react";

import "./index.styles.scss";

const Album = ({ album }) => {
  // console.log("nAme", props.item.name);
  // const albumImageUrl = images[2].url;
  // const { artists, name, images } = album;
  return (
    <div className="AlbumItemContainer">
      <img src={album.images[2].url} alt="" className="BackgroundImage" />
      <h3>{album.name}</h3>
      <span>{album.artists[0].name}</span>
    </div>
  );
};

export default Album;
