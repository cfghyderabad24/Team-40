import React from "react";
import HomePage from "./components/Homepage.js";

import Products from "./components/products/products.jsx";
import Showcase from "./components/statsdash.jsx";
import About from "./components/about_us/about_us/src/components/About.js";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ChatBot from "./components/chatbot/ChatBot.jsx";
const App = () => {
  const [user, setUser] = useState("");
  
  return (
    <>
     <Navbar />
      <ChatBot />
      {(user == "Parent" || user == "Learner") && (
        <div>
          <Products />
          <HomePage setUser={setUser} user={user} />
        </div>
      )}
      {user == "" && (
        <div>
          <HomePage setUser={setUser} user={user} />

          <Products />
        </div>
      )}
      {(user == "NGO" || user == "Govt Official") && (
        <div>
          <Showcase />
          <About />
          <HomePage setUser={setUser} user={user} />

          <Products />
        </div>
      )}
    </>
  );
};

export default App;
