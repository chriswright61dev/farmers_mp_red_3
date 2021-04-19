import React, { useContext } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
import { Link } from "react-router-dom";
import "./OldEventLinkBlock.css";
function OldEventLinkBlock() {
  const es = useContext(MainDataContext).mainState.oldEventsData;
  if (es.length === 0) {
    return null;
  } else {
    return (
      <Link to="/pastevents/">
        <div className="OldEventLinkBlock">
          <h3>Old Events</h3>

          <img src={es[0].event_poster_220_medium} alt="old_events" />
          <p>Events that are gone but not forgotten</p>
        </div>
        ;
      </Link>
    );
  }
}

export default OldEventLinkBlock;
