import React from 'react';
import './chatbot.css'; // import the CSS file

function Chatbot() {
  return (
    <div className='container'>
    <div className="wrapper">
      <div className="title">Talk bot</div>
      <div className="box">
        <div className="item">
          <div className="icon">
            <i className="fa fa-user"></i>
          </div>
          <div className="msg">
            <p>Speak Your Mind!!</p>
          </div>
        </div>
      </div>
      <div className="typing-area">
        <div className="input-field">
          <input type="text" placeholder="Type your message" required />
          <button>Send</button>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Chatbot;
