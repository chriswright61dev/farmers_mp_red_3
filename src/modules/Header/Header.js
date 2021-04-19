import React from "react";
import "./Header.css";
import HeaderLogo from "./HeaderLogo";
import HeaderLinks from "./HeaderLinks";
import HeaderVenueDescription from "./HeaderVenueDescription";
import Announcement from "../News/Announcement";
function Header() {
  return (
    <div className="Header">
      <HeaderLogo />
      <HeaderVenueDescription />
      <HeaderLinks />
      <Announcement />
    </div>
  );
}

export default Header;
