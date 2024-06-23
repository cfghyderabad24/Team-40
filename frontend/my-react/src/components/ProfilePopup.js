import React from 'react';
import './ProfilePopup.css';
import image1 from './profileimages/1.png'
import image2 from './profileimages/2.png'
import image3 from './profileimages/3.png'
import image4 from './profileimages/4.png'

const ProfilePopup = ({ togglePopup, setUser }) => {
  const profiles = [
    { name: 'Parent', image: image1 },
    { name: 'Learner', image: image2 },
    { name: 'Govt Official', image: image3 },
    { name: 'NGO', image: image4 },
  ];
  const handleClick = (profileName) => {
    if(profileName == "Parent"){
        setUser("Parent");
        console.log("parent")
    }
    else if(profileName == "Learner"){
        setUser("Learner");
        console.log("Learner")
        }
        else if(profileName == "Govt Official"){
            setUser("Govt Official");
            console.log("GOvt Official")
            }
            else if(profileName == "NGO"){
                setUser("NGO");
                console.log("NGO")
                }
    togglePopup()
    

 }
  return (
    <div className="popup-overlay" onClick={togglePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Select Your Profile</h2>
        <div className="profile-options">
          {profiles.map((profile, index) => (
            <div key={index} className="profile-option" onClick={(e) => {handleClick(profile.name)}}>
              <img src={profile.image} alt={profile.name} className="profile-image" />
              <p>{profile.name}</p>
            </div>
          ))}
        </div>
        <button className="close-button" onClick={togglePopup}>Close</button>
      </div>
    </div>
  );
};

export default ProfilePopup;
