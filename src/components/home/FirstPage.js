import "./FirstPage.css";
import React from "react";
import IntroImg from "../../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import ramResumePDF from '../../assets/ramResume.pdf';

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A </p>
        <h1>Mern Stack Developer</h1>
        <div>
        <a href={ramResumePDF} className="btn">
            Resume
          </a>
          <Link to="/contact" className="btn btn-light ">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
