import React, { useContext } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
import OldEvent from "./OldEvent";
import "./OldEvents.css";
function OldEvents() {
  const es = useContext(MainDataContext).mainState.oldEventsData;

  if (es.length === 0) {
    return null;
  } else {
    return (
      <div className="old_dated_events">
        {es.map((anOldEvent) => {
          return (
            <OldEvent
              key={anOldEvent.id}
              id={anOldEvent.id}
              name={anOldEvent.event_name}
              date={anOldEvent.event_date_long}
              description={anOldEvent.event_description}
              imageURL={anOldEvent.event_poster_220_medium}
            />
          );
        })}
      </div>
    );
  }
}

export default OldEvents;
