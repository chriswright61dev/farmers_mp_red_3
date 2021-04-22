import React from "react";
import "./OldEventsHere.css";
import { Link } from "react-router-dom";
function OldEventsHere() {
  return (
    <Link to={`/pastevents/`}>
      <div className="old_events_here">
        <h3>OLD Events Are Listed Here</h3>
      </div>
    </Link>
  );
}

export default OldEventsHere;
