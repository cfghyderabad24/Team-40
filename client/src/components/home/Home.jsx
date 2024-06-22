import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Footer from '../footer/Footer';
import HowToUse from '../HowToUse';

function Home() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
    <div className="home-container d-flex flex-column justify-content-center align-items-center text-center">
      <main className="content">
        <h1 className="display-4 mt-5 text-shadow">NEXT SKILLS 360</h1>
        <p className="lead text-shadow">Select your options</p>
        <div className="button-container mt-4">
          <button 
            className="btn  btn-dark mx-2"
            onClick={() => handleNavigation('/b2b')}
          >
            <i className="fas fa-cogs"></i> NGO
          </button>
          <button
            className="btn btn-dark mx-2"
            onClick={() => handleNavigation('/b2b')}
          >
            <i className="fas fa-lightbulb"></i> CSR
          </button>
          <button
            className="btn  btn-dark mx-2"
            onClick={() => handleNavigation('/b2b')}
          >
            <i className="fas fa-brain"></i> Government Officials
          </button>
          <button
            className="btn btn-dark mx-2"
            onClick={() => handleNavigation('/b2c')}
          >
            <i className="fas fa-rocket"></i> School Principals
          </button>
          <button
            className="btn  btn-dark mx-2"
            onClick={() => handleNavigation('/b2c')}
          >
            <i className="fas fa-magic"></i> Students
          </button>
          <button
            className="btn  btn-dark mx-2"
            onClick={() => handleNavigation('/b2c')}
          >
            <i className="fas fa-check-circle"></i> Parents
          </button>
        </div>
      </main>
    </div>
    <HowToUse/>
     {/* <Footer/>  */}
    </div>
  );
}

export default Home;
