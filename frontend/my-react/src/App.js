import React from "react";
import HomePage from "./components/Homepage.js";
import Chatbot from "./components/Chatbot.js";
import Products from "./components/products/products.jsx";
import Showcase from "./components/statsdash.jsx";
import About from "./components/about_us/about_us/src/components/About.js";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer.jsx";
const App = () => {
  const [user, setUser] = useState("");

  return (
    <>
      <Navbar />
      {(user == "Parent" || user == "Learner") && (
        <div>
          <Products />
          <HomePage setUser={setUser} user={user} />

          <About />
          <Showcase />
          <Footer />
        </div>
      )}
      {user == "" && (
        <div>
          <HomePage setUser={setUser} user={user} />
          <Products />
          <About />
          <Showcase />
          <Footer />
        </div>
      )}
      {(user == "NGO" || user == "Govt Official") && (
        <div>
          <Showcase />
          <About />
          <HomePage setUser={setUser} user={user} />
          <About />
          <Products />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
