import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-title"> To-Do-List </div>
      <a
        href="https://github.com/shyamsundar-10/to-do-app"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <button className="github-button">
        <i className="fa-brands fa-github"></i> shyamsundar-10
        </button>
      </a>
    </div>
  );
}

export default NavBar;
