import React from 'react';
import './statsdash.css';
import classroomImage from './Screenshot 2024-06-23 064741.png';
import impactImage from './Orange White Green Neo Brutalism Business Performance Dashboard Graph.png';

const Showcase = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={classroomImage} alt="Classroom" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <img src={impactImage} alt="Impact" className="img-fluid rounded shadow" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col text-center">
          <h2 className="impact-title">Impact Nationally</h2>
          <p className="impact-description">A growing community of 75% of students are benefiting from our product, offering a hands-on coding experience.</p>
          <div className="impact-percentage">75%</div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
