import React, { useState } from 'react';
import Screen from './components/Screen';
import Button from './components/Button';
import './App.css';

function App() {
  const [value, setValue] = useState('0');

  const handleButtonClick = (buttonValue) => {
    setValue((prevValue) => prevValue + buttonValue);
  };

  const handleClearButtonClick = () => {
    setValue('0');
  };

  const handleEqualButtonClick = () => {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue('Error');
    }
  };

  return (
    <div className="calculator">
      <Screen value={value} />
      <div className="container">
        <Button onClick={() => handleButtonClick('+')} value="+" />
        <Button onClick={() => handleButtonClick('-')} value="-" />
        <Button onClick={() => handleButtonClick('*')} value="*" />
        <Button onClick={() => handleButtonClick('/')} value="/" />
        <Button onClick={() => handleButtonClick('.')} value="." />
        <Button className="btn__special btn__double" onClick={() => handleEqualButtonClick()} value="=" />
        <Button className="btn__special btn__double" onClick={() => handleClearButtonClick()} value="C" />
        <Button onClick={() => handleButtonClick('1')} value="1" />
        <Button onClick={() => handleButtonClick('2')} value="2" />
        <Button onClick={() => handleButtonClick('3')} value="3" />
        <Button onClick={() => handleButtonClick('4')} value="4" />
        <Button onClick={() => handleButtonClick('5')} value="5" />
        <Button onClick={() => handleButtonClick('6')} value="6" />
        <Button onClick={() => handleButtonClick('7')} value="7" />
        <Button onClick={() => handleButtonClick('8')} value="8" />
        <Button onClick={() => handleButtonClick('9')} value="9" />
        <Button onClick={() => handleButtonClick('0')} value="0" />
      </div>
    </div>
  );
}

export default App;
