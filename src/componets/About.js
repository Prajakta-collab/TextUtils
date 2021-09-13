import React, { useState } from "react";

export default function About() {
  const [mystyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "black",
    border: "1px solid white",
  });

  const [btntext, setBtnText] = useState("Enable dark mode");

  let onEnable = () => {
    if (mystyle.backgroundColor === "white") {
      setMyStyle({
        backgroundColor: "black",
        color: "white",
        border: "1px solid white",
      });

      setBtnText("Enable Light mode");
    } else {
      setMyStyle({
        backgroundColor: "white",
        color: "black",
      });
      setBtnText("Enable dark mode");
    }
  };
  return (
    <div className="container" style={mystyle}>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              About Us 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={mystyle}
          >
            <div className="accordion-body">
              <strong>This website is developed by Prajakta Badgujar.</strong> It is
             a simple text utility which will help you in manipulating your text.<br/>
             <strong>Want to stay connected ? <br/>Follow me here ! - <a href="https://github.com/Prajakta-collab">Prajakta-collab</a></strong>
            </div>
          </div>
        </div>
       
         
      </div>
    
    </div>
  );
}
