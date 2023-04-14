import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  const { onClick, value, children } = props;

  return (
    <button className="button" onClick={() => onClick(value)}>
      {children || value}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Button;
