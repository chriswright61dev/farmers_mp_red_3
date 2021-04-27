import React, { useContext } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
import EventCard from "../../../components/EventCard/EventCard";

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
            <EventCard
              link="events"
              key={anEvent.id}
              id={anEvent.id}
              name={anEvent.event_name}
              date={anEvent.event_date_long}
              description={anEvent.event_description}
              admission={anEvent.event_admission}
              imageURL={anEvent.event_poster_220_medium}
            />
          );
        })}
      </div>
    );
  }
}

export default DatedEvents;
