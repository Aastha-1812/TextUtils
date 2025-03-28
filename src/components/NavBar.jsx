import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function NavBar(props) {
  console.log(props.DMode);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.DMode} bg-${
          props.DMode === "light" ? "light" : "black"
        } fixed-top py-1`}
        style={{
          minHeight: "60px",
          marginBottom: "30px",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand form-control-sm" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 small">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about"> */}
                {/* {props.aboutText} */}
                {/* </Link> */}
              </li>
            </ul>
          </div>
          <div
            className={`form-check form-switch text-${
              props.DMode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.changeMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

NavBar.defaultProps = {
  title: "set a title",
  aboutText: "write a text here",
};
