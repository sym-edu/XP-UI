import React, { useState } from 'react';
import './uploader.css';

function TextBoxWithSubmit() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the input value, e.g. send it to the server
    console.log(inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit} className="textbox-form">
      <input 
        type="text" 
        placeholder="Type something..." 
        value={inputValue} 
        onChange={handleInputChange} 
        className="textbox-input"
      />
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default TextBoxWithSubmit;
