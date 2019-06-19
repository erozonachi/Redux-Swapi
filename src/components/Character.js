import React from "react";
import PropTypes from "prop-types";

const Character = props => {
  return <li>{props.character.name}</li>;
};

Character.propTypes = {
  character: PropTypes.object.isRequired
}

export default Character;
