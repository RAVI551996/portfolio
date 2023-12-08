import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import SecondPage from "../components/home/SecondPage";

const About = () => {
  return (
    <div>
      <Navbar />
      <SecondPage
        heading="BIOGRAPHY"
        text="After completing my education,
         I ventured into the professional world. 
         I have had the opportunity to work in PrihirTech.pvt.ltd, StartLazaa.pvt.ltd and Anandpush Technolgies, where I've gained valuable experience in NodeJs,ExpressJs,MongoDb,ReactJs,PostgreSql,AWS EC2 instance, AWS s3 bucket, and etc."
       proExpCount="5+"
        proExp='Project Completed '
        ExpCount="5+"
        Exp='Year Of Experience '
      />

     
      <h2>3+ yeat of experience</h2>
      <br />
      <h1>skills</h1>
      <h3>Experience</h3>
      <h3>Education</h3> 

      <Footer />
    </div>
  );
};

export default About;
