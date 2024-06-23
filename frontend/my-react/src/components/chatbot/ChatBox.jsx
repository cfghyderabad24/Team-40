import React, { useState } from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import axios from "axios";
import "./ChatBox.css";

const ChatBox = ({ toggleChatBoxVisibility }) => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    const userMessage = { sender: "user", text: message };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          message,
        }
      );

      const botMessage = {
        sender: "bot",
        text: `Received response with ID: ${response.data.id}`,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        sender: "bot",
        text: "Failed to fetch response from the bot.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div className="chat-box">
      <button onClick={toggleChatBoxVisibility}>Close</button>
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatBox;
