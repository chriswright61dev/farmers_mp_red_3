import React, { useContext } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
import EventCard from "../../../components/EventCard/EventCard";
function OtherVenueEvents() {
  const es = useContext(MainDataContext).mainState.otherVenueEventsData;
  if (es.length === 0) {
    return null;
  } else {
    return (
      <div className="dated_events">
        other venues
        {es.map((anEvent) => {
          return (
            <EventCard
              link="events"
              key={anEvent.id}
              id={anEvent.id}
              venue={anEvent.event_venue}
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

export default OtherVenueEvents;
