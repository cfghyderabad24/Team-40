// Import Font Awesome CSS
import React, { useState } from "react";
import ChatBox from "./ChatBox";

const ChatBot = () => {
  const [isChatBoxVisible, setIsChatBoxVisible] = useState(false);

  const toggleChatBoxVisibility = () => {
    setIsChatBoxVisible(!isChatBoxVisible);
  };
  return (
    <div>
      <button className="bot-icon-button" onClick={toggleChatBoxVisibility}>
        ChatBot
      </button>
      {isChatBoxVisible && <ChatBox />}
    </div>
  );
};

export default ChatBot;
