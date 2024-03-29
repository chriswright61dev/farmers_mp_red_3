import React, { useContext } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
import EventCard from "../../../components/EventCard/EventCard";
function RegularEvents() {
  const es = useContext(MainDataContext).mainState.regularEventsData;

  if (es.length === 0) {
    return null;
  } else {
    return (
      <div className="regular_events">
        {es.map((anEvent) => {
          return (
            <EventCard
              link={"regularevents"}
              key={anEvent.id}
              id={anEvent.id}
              name={anEvent.event_name}
              imageURL={anEvent.event_poster_220_medium}
              description={anEvent.event_description}
              day={anEvent.event_regular_day}
              time={anEvent.event_regular_time}
              admission={anEvent.event_admission}
            />
          );
        })}
      </div>
    );
  }
}

export default RegularEvents;
