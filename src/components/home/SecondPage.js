import React from "react";
import "./SecondPage.css";

const SecondPage = (props) => {
  return (
    <div className="secondPage-img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
        <h1 className="count">{props.proExpCount}</h1>
        <h1>{props.proExp}</h1> 
        <h1 className="count">{props.ExpCount}</h1>
        <h1>{props.Exp}</h1>
      </div>
    </div>
  );
};

export default SecondPage;
