import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <h4>Chatbot</h4>
          <button className="close-btn" onClick={toggleChatbot}>x</button>
        </div>
        <div className="chatbot-body">
          {/* Placeholder for chatbot API integration */}
          <p>Chatbot content goes here...</p>
        </div>
      </div>
      <div className="chat-icon" onClick={toggleChatbot}>
        💬
      </div>
    </>
  );
};

export default Chatbot;
