import React, { useContext } from "react";
import "./VenueOpeningTimes.css";
import { MainDataContext } from "../../data/MainDataContext";

function VenueOpeningTimes() {
  const vs = useContext(MainDataContext).mainState.venueData;
  const special = vs.venue_opening_special;
  if (vs.length === 0) {
    return null;
  } else {
    return (
      <div className="venue_opening_times">
        <h3>Opening Times</h3>
        <p>Monday: {vs.venue_opening_monday}</p>
        <p>Tuesday: {vs.venue_opening_tuesday}</p>
        <p>Wednesday: {vs.venue_opening_wednesday}</p>
        <p>Thursday: {vs.venue_opening_thursday}</p>
        <p>Friday: {vs.venue_opening_friday}</p>
        <p>Saturday: {vs.venue_opening_saturday}</p>
        <p>Sunday: {vs.venue_opening_sunday}</p>
        {special ? <p> vs.venue_opening_special</p> : null}
      </div>
    );
  }
}

export default VenueOpeningTimes;
