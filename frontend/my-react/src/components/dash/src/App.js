// App.js
import React, { useState } from 'react';
import Navbar from './component/Navbar';

import Track from './component/Track';

import Lead from './component/Lead';
import './App.css';

const App = () => {
  const [content, setContent] = useState(null);

  const handleNavClick = (item) => {
    if (item === 'tracks') {
      setContent(<Track />);
    } else if (item === 'leads') {
      setContent(<Lead />);
    }
  };

  return (
    <div className="wrapper">
      
      <div id="content">
        <Navbar onNavClick={handleNavClick} /> {/* Pass onNavClick prop here */}
        <div className="container-fluid">
          {content}
        </div>
      </div>
    </div>
  );
};

export default App;
