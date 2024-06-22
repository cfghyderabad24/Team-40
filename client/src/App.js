import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Pages from './components/pages/Pages'
import Support from './components/support/Support'
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
      
          <Navbar/>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/support" element={<Support />} />
            <Route path="/pages" element={<Pages />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;