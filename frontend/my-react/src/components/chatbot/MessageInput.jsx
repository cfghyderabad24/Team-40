import React, { useState } from "react";
import "./ButtonStyle.css";
const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button className="button-chatbot" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
