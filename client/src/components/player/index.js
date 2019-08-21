import React from "react";
import { connect } from "react-redux";

import "./index.styles.scss";

const Player = (props) => {
  return (
    <div className="PlayerWrapper">
      <audio src={props.url} controls autoPlay />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    url: state.player.url,
  };
};

export default connect(mapStateToProps)(Player);
