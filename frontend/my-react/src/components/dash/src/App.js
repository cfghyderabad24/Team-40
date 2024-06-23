import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Track from "./component/Track";
import Lead from "./component/Lead";
import SendNotification from "./component/SendNotification";
import "./App.css";

const App = () => {
  const [content, setContent] = useState(null);

  const handleNavClick = (item) => {
    if (item === "tracks") {
      setContent(<Track />);
    } else if (item === "leads") {
      setContent(<Lead />);
    } else if (item === "update") {
      setContent(<SendNotification />);
    }
  };

  return (
    <div className="wrapper">
      <div id="content">
        <Navbar onNavClick={handleNavClick} />
        <div className="container-fluid">{content}</div>
      </div>
    </div>
  );
};

export default App;
