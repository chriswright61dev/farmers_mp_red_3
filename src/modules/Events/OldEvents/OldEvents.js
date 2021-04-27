import React, { useContext } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
import EventCard from "../../../components/EventCard/EventCard";
import "./OldEvents.css";
function OldEvents() {
  const es = useContext(MainDataContext).mainState.oldEventsData;
  console.log("es", es);
  if (es.length === 0) {
    return null;
  } else {
    return (
      <div className="old_dated_events">
        {es.map((anOldEvent) => {
          return (
            <EventCard
              key={anOldEvent.id}
              link="events"
              id={anOldEvent.id}
              date={anOldEvent.event_date_long}
              name={anOldEvent.event_name}
              imageURL={anOldEvent.event_poster_220_medium}
              description={anOldEvent.description}
              admission={anOldEvent.event_admission}
            />
          );
        })}
      </div>
    );
  }
}

export default OldEvents;
