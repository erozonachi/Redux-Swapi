import React from "react";
import PropTypes from "prop-types";

const Character = props => {
  return <li>{props.character.name}</li>;
};

Character.propTypes = {
  character: PropTypes.objectOf(PropTypes.shape({name: PropTypes.string})).isRequired
}

export default Character;
