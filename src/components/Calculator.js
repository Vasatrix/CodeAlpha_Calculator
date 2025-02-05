import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [isOn, setIsOn] = useState(true);

  const handleClick = (value) => {
    if (!isOn) return;
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    if (!isOn) return;
    setInput("");
  };

  const handleCalculate = () => {
    if (!isOn) return;
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleDelete = () => {
    if (!isOn) return;
    setInput(input.slice(0, -1));
  };

  const togglePower = () => {
    setIsOn(!isOn);
    setInput(""); // Clear the display when turning off
  };

  const handlePercentage = () => {
    if (!isOn) return;
    try {
      const percentage = parseFloat(input) / 100;
      setInput(percentage.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className={`calculator ${isOn ? "on" : "off"}`}>
      <h1 className="title">CALCULATOR</h1>
      <div className="display">{input}</div>
      <div className="buttons">
        <Button onClick={togglePower} value={isOn ? "Off" : "On"} />
        <Button onClick={handleClear} value="C" />
        <Button onClick={handleDelete} value="Del" />
        <Button onClick={handleClick} value="/" />

        <Button onClick={handleClick} value="7" />
        <Button onClick={handleClick} value="8" />
        <Button onClick={handleClick} value="9" />
        <Button onClick={handleClick} value="*" />

        <Button onClick={handleClick} value="4" />
        <Button onClick={handleClick} value="5" />
        <Button onClick={handleClick} value="6" />
        <Button onClick={handleClick} value="-" />

        <Button onClick={handleClick} value="1" />
        <Button onClick={handleClick} value="2" />
        <Button onClick={handleClick} value="3" />
        <Button onClick={handleClick} value="+" />

        <Button onClick={handleClick} value="0" />
        <Button onClick={handleClick} value="." />
        <Button onClick={handlePercentage} value="%" />
        <Button onClick={handleCalculate} value="=" />
      </div>
      <footer className="footer">
        <p>© Designed by Vasanth Kumar S</p>
      </footer>
    </div>
  );
};

export default Calculator;
