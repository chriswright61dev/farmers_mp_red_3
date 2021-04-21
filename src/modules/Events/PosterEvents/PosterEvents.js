import React, { useContext } from "react";
import "./PosterEvents.css";
import { MainDataContext } from "../../../data/MainDataContext";
import PosterEvent from "./PosterEvent";
function PosterEvents() {
  const pes = useContext(MainDataContext).mainState.posterEventsData;
  if (pes.length === 0) {
    return null;
  } else {
    return (
      <div className="poster-events">
        {pes.map((anEvent) => {
          return (
            <PosterEvent
              key={anEvent.id}
              name={anEvent.poster_event_title}
              imageURL={anEvent.poster_event_image}
              date={anEvent.poster_event_date}
            />
          );
        })}
      </div>
    );
  }
}

export default PosterEvents;
