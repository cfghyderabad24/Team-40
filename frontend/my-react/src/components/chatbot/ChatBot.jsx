// Import Font Awesome CSS
import React, { useState } from "react";
import ChatBox from "./ChatBox";
import "./ButtonStyle.css"; // Import the CSS file for the 'bot-icon-bu
const ChatBot = () => {
  const [isChatBoxVisible, setIsChatBoxVisible] = useState(false);

  const toggleChatBoxVisibility = () => {
    setIsChatBoxVisible(!isChatBoxVisible);
  };
  return (
    <div onClick={toggleChatBoxVisibility}>
      <button className="button-chatbot-toggle">ChatBot</button>
      {isChatBoxVisible && (
        <ChatBox toggleChatBoxVisibility={toggleChatBoxVisibility} />
      )}
    </div>
  );
};

export default ChatBot;
