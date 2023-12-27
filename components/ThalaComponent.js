"use client"
import React, { useState } from 'react';

const ThalaComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\s/g, ''); // Remove spaces from the input
    setInputValue(value);

    // Check if input has 7 alphabets (excluding spaces)
    if (/^[a-zA-Z]{7}$/.test(value)) {
      setResult('Thala for a reason');
    } else {
      setResult('Not Thala');
    }
  };

  return (
    <div>
      <label htmlFor="inputField">Enter 7 Alphabets:</label>
      <input
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div>{result}</div>
    </div>
  );
};

export default ThalaComponent;
