import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/player/actions";

import "./index.styles.scss";

const Track = ({ track, addItem }) => {
  const { album, name, artists, preview_url } = track;
  return (
    <div className="AlbumItemContainer">
      <img src={album.images[2].url} alt="" className="BackgroundImage" />
      <h3>{name}</h3>
      <span>{artists[0].name}</span>
      <button onClick={() => addItem(preview_url)}>Play</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Track);
