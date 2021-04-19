import React, { useContext } from "react";
import "./Venue.css";
import { MainDataContext } from "../../data/MainDataContext";

function VenueAbout() {
  const vs = useContext(MainDataContext).mainState.venueData;

  if (vs.length === 0) {
    return null;
  } else {
    return (
      <div className="venue_about">
        <p> {vs.venue_about}</p>
      </div>
    );
  }
}
export default VenueAbout;
