import {React,useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Pages from './components/pages/Pages'
import Support from './components/support/Support'
import Navbar from './components/navbar/Navbar';
import B2B from './components/B2B';
import B2C from './components/B2C';
import Footer from './components/footer/Footer';

function App() {

  return (
    <Router>
      <div className="App">
      
          <Navbar/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/support" element={<Support />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/b2b" component={<B2B/>} />
           <Route path="/b2c" component={<B2C/>} />
          </Routes>

      </div>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './Home';
// import B2B from './B2B';
// import B2C from './B2C';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/b2b" component={B2B} />
//         <Route path="/b2c" component={B2C} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
