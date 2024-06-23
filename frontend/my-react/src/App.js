import React from 'react';
import HomePage from './components/Homepage.js';
import Chatbot from './components/Chatbot.js';
import Products from './components/products/products.jsx';
import Showcase from './components/statsdash.jsx';
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState("")
  
  return (
    <>
    {(user == 'Parent' || user == 'Learner') &&<div>
      <Products/>
      <HomePage setUser = {setUser} user={user} />
      <Chatbot />
      
    </div> }
    {(user == '') && <div>
      <HomePage setUser = {setUser} user={user} />
      <Chatbot />
      <Products/>
      
    </div> }
    {(user == 'NGO'||'Govt Official') && <div>
      <Showcase/>
      <HomePage setUser = {setUser} user={user} />
      <Chatbot />
      <Products/>
      
    </div> }
    
    </>
     
  );
};

export default App;
