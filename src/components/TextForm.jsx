import React, { useState } from "react";

export default function TexthtmlForm(props) {
  const [text, setText] = useState("");

  const handleExtraSpace = () => {
    let orgText = text.split(/[ ]+/);
    setText(orgText.join(" "));
    props.showAlert("Removed extra space", "success");
  };

  const handleCopy = () => {
    const copy = document.getElementById("myBox");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    props.showAlert("Copied to Clipboard", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared text", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase ", "success");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div
              style={{
                width: "70vw",
                marginTop: "75px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <label
                htmlFor="myBox"
                className={`form-label fw-bold text-${
                  props.Mode === "light" ? "dark" : "light"
                }`}
              >
                <h3>{props.heading}</h3>
              </label>
              <textarea
                className="form-control"
                value={text}
                onChange={handleChange}
                id="myBox"
                rows="10"
                style={{
                  backgroundColor: props.Mode === "light" ? "white" : "grey",
                  color: props.Mode === "light" ? "black" : "white",
                  width: "100%",
                }}
              ></textarea>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start", // Aligns buttons to the right
                  width: "100%", // Ensures alignment works
                  gap: "10px", // Adds space between buttons
                  marginTop: "10px",
                }}
              >
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleUpClick}
                >
                  Convert to UpperCase
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleLoClick}
                >
                  Convert to LowerCase
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleClearClick}
                >
                  Clear Text
                </button>
                <button className="btn btn-primary btn-sm" onClick={handleCopy}>
                  Copy Text
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleExtraSpace}
                >
                  Remove Extra Space
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          color: props.Mode === "light" ? "black" : "white",
          display: "block",
          textAlign: "left",
          marginLeft: "25px",
          marginTop: "20px",
        }}
      >
        <h5
          style={{
            marginTop: "5px",
          }}
        >
          Your text summary!
        </h5>
        <p
          style={{
            marginBottom: "3px",
          }}
        >
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h5>Preview</h5>
        <p>{text.length > 0 ? text : "Enter your text to preview it here"}</p>
      </div>
    </>
  );
}
