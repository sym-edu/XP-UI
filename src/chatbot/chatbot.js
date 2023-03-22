import React, { useState } from 'react';
import axios from 'axios';
import './chatbot.css';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const sendMessage = () => {
    axios.post('/api/chatbot/', { message })
      .then(response => {
        setBotResponse(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
    setMessage('');
  };

  return (
    <div className='chatbot-container'>
      <div className='chatbot-response'>{botResponse}</div>
      <form onSubmit={handleSubmit}>
        <input className='chatbot-input' type="text" value={message} onChange={handleChange} placeholder='Type a message...' />
        <button className='chatbot-send' type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
