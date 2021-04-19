import React from "react";
import { Link } from "react-router-dom";
import "./HeaderLinks.css";
function HeaderLinks() {
  return (
    <nav className="header-links">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">What's On</Link>
        </li>
        <li>
          <Link to="/drinks">Drinks</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderLinks;
