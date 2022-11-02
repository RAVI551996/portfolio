import React from "react";
import Typical from "react-typical";
import './Profile.css'
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.google.co.in/">
                <i className="fa fa-google-plus-square"></i>
              </a>

              <a href="https://twitter.com/home">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'am{" "}
              <span className="highligted-text">Ravi Shankar Mehta</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer ",
                    2000,
                    "MERN Stack Developer",
                    2000,
                    "Node.js Developer",
                    2000,
                    "React/React-nativ Developer",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagling">
                knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{""}
            </button>
            <a href="resume.pdf" download="resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        {/* <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div> */}
      </div>
    </div>
  );
}
