import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [user, setUser] = useState("User");

  // const userchange = () => {
  //   setUser(user);
  // };
  const userchange = (event) => {
    setUser(event.target.value);
  };

  let handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to upper case !", "success");
  };
  let handleLowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Changed to lower case !", "success");
  };
  let handleClearClick = () => {
    setText(" ");
    props.showAlert("Text Cleared!", "success");
  };

  let handleONChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <label for="mybox" className="form-label" my-1>
          {" "}
        </label>
      
        <textarea
          className="form-control my-3"
          id="username"
          value={user}
          rows="1"
          width="40vw"
          onChange={userchange}
          style={{
            backgroundColor: props.mode === "dark" ? "#495057" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>

        {/* <button className="btn btn-primary mx-2" onClick={userchange}>
          Go
        </button> */}
        <h1>{`Hii ${user} ! Analyze your text here`}</h1>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <label for="mybox2" className="form-label">
          {" "}
        </label>
        <textarea
          className="form-control"
          id="mybox"
          value={text}
          onChange={handleONChange}
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "#495057" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>{" "}
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert to Lowecase
      </button>
      <button className="btn btn-danger mx-2" onClick={handleClearClick}>
        Clear Text
      </button>
      <div
        className="container"
        my-3
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text summary here</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} Characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something here "}</p>
      </div>
    </>
  );
}
