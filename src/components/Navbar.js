import React, { useState }  from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
export default function Navbar(props) {
    useEffect(() => {
      props.togglemode();
    }, []);
    
    const [highlighthomes, sethighlighthomes] = useState("active");
    const [highlightabouts, sethighlightabouts] = useState("");
    const highlighthome=()=>{
      sethighlighthomes("active");
      sethighlightabouts("");

    }
    const highlightabout=()=>{
      sethighlighthomes("");
      sethighlightabouts("active");

    }
  return (
   
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className={`navbar-brand ${highlighthomes}`} onClick={highlighthome} to="/Textutils123">
          {props.title}
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${highlighthomes}`} onClick={highlighthome} aria-current="page" to="/Textutils123">
                Home
              </Link>
              
            </li>
            
            <li className="nav-item">
              <Link className={`nav-link ${highlightabouts}`} onClick={highlightabout} to="/About">
                About TextUtils
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              onClick={props.togglemode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`orm-check-label text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Light Mode
            </label>
            
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.protoTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "TextUtils",
};
