import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Layout.css';

function Layout(props) {
  const { onButtonClick } = props;

  return (
    <div className="layout">
      <div className="row">
        <Button onClick={onButtonClick} value="7" />
        <Button onClick={onButtonClick} value="8" />
        <Button onClick={onButtonClick} value="9" />
        <Button className="function__btn" onClick={onButtonClick} value="/" />
      </div>
      <div className="row">
        <Button onClick={onButtonClick} value="4" />
        <Button onClick={onButtonClick} value="5" />
        <Button onClick={onButtonClick} value="6" />
        <Button className="function__btn" onClick={onButtonClick} value="*" />
      </div>
      <div className="row">
        <Button onClick={onButtonClick} value="1" />
        <Button onClick={onButtonClick} value="2" />
        <Button onClick={onButtonClick} value="3" />
        <Button className="function__btn" onClick={onButtonClick} value="-" />
      </div>
      <div className="row">
        <Button onClick={onButtonClick} value="0" />
        <Button onClick={onButtonClick} value="." />
        <Button className="btn__double" onClick={onButtonClick} value="=" />
        <Button className="function__btn" onClick={onButtonClick} value="+" />
      </div>
    </div>
  );
}

Layout.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Layout;
