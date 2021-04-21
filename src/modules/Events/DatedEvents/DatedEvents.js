import React, { useContext } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
import DatedEvent from "./DatedEvent";
import "./DatedEvents.css";
function DatedEvents() {
  const es = useContext(MainDataContext).mainState.eventsData;

  if (es.length === 0) {
    return null;
  } else {
    return (
      <div className="dated_events">
        {es.map((anEvent) => {
          return (
            <DatedEvent
              key={anEvent.id}
              id={anEvent.id}
              name={anEvent.event_name}
              date={anEvent.event_date_long}
              description={anEvent.event_description}
              imageURL={anEvent.event_poster_220_medium}
            />
          );
        })}
      </div>
    );
  }
}

export default DatedEvents;
