import React, { useState } from "react";
import ProfilePopup from "./ProfilePopup";
import Video from "./demo";
import "./Homepage.css";

const HomePage = ({ setUser, user }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="homepage">
      <div className="content">
        {showPopup && <h1>Welcome to the HomePage</h1>}
        {user != "" && <Video />}
        {!user && (
          <button
            onClick={togglePopup}
            className="btn btn-success profile-button"
          >
            Select Profile
          </button>
        )}
        {showPopup && (
          <ProfilePopup togglePopup={togglePopup} setUser={setUser} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
