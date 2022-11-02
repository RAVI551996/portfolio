import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-sm-6">
          <h1>Ravi Shankar Mehta</h1>
        </div>
        <div className="col-sm-2">
          <button className="btn primary-btn">
            {""}
            About Me{""}
          </button>
        </div>
        <div className="col-sm-2">
          <button className="btn primary-btn">
            {""}
            Resume{""}
          </button>
        </div>
        <div className="col-sm-2">
          <button className="btn primary-btn">
            contact {""}
             Me{""}
          </button>
        </div>
       
      </div>
    </div>
  );
}
