import React from 'react';
import PropTypes from 'prop-types';
import './Screen.css';

function Screen(props) {
  const { value } = props;

  return <div className="screen">{value}</div>;
}

Screen.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Screen;
