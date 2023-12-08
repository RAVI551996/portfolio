import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <div>
              {" "}
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </div>
            <div>
              {" "}
              <p>Arti Bhawan,T.V Center</p>
              <p>Katihar,Bihar,854105</p>
              <p>India</p>
            </div>
          </div>{" "}
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 8051719168
            </h4>
          </div>{" "}
          <br />
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              nitravi.m@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About My Self</h4>
          <p>
            Hi, I am Ravi Shankar Mehta,I Enjoy discussing new project and
            design challenges.
          </p>
          <div>
            {" "}
            <div className="social">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
