import React from "react";
import "./Profile.css";
import Logo from "../Profile/sallem.jpg";
import Pex from "../Profile/pex1.jpeg";

const Profile = ({ fullName, bio, profession, Name }) => {
  return (
    <div className="container">
      <div className="header-container">
        <img src={Pex} alt="pc" className="header-image" />
        <div className="header">
          <h1 className="main-heading">{fullName}</h1>
          <span className="tag">{profession}</span>
        </div>{" "}
        {/* END header */}
      </div>

      <div className="body">
        <img src={Logo} alt="sallem" className="body-image" />
        <div className="body-action-button u-flex-center">
          <button
            onClick={(e) => {
              Name(e.target.value);
            }}
            className="btn btn:hover"
          >
            +
          </button>
        </div>
        <div className="u-clearfix" />
        <div className="body-info body-more">
          <p> {bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
