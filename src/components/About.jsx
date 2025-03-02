import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const toggleMode = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#36454F",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <div
      className="container"
      style={{
        ...myStyle,
        minHeight: "40vh",
        paddingTop: "50px",
        marginTop: "120px",
      }}
    >
      <h3>About Us</h3>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Our Purpose:</strong> This website is designed to help
              users effortlessly manipulate text. Whether you need to convert
              text to
              <strong>uppercase</strong>, <strong>lowercase</strong>, or simply
              <strong>copy</strong> it with one click, we make text editing fast
              and easy.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Key Features:</strong>
              <ul>
                <li>
                  🔠 Convert text to <strong>UPPERCASE</strong>
                </li>
                <li>
                  🔡 Convert text to <strong>lowercase</strong>
                </li>
                <li>
                  📋 <strong>Copy</strong> text with a single click
                </li>
                <li>
                  🔄 <strong>Clear</strong> text instantly
                </li>
                <li>
                  🔢 Count <strong>words & characters</strong>
                </li>
              </ul>
              Our tools are simple, fast, and completely free!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Why Choose Us?</strong>
              <p>
                Unlike other text editors, our tool is lightweight, ad-free, and
                works instantly. No installations or logins required—just paste
                your text and get the job done!
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary my-3" onClick={toggleMode}>
        {btnText}
      </button>
    </div>
  );
}
