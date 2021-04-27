import React from "react";
import { Link } from "react-router-dom";
import "./OldEvent.css";
import EventCard from "../../components/EventCard/EventCard";

function OldEvent(props) {
  return (
    <Link to={`/events/${props.id}`}>
      <EventCard
        date={props.date}
        name={props.name}
        imageURL={props.imageURL}
        id={props.id}
        description={props.description}
        admission={props.admission}
        venue={props.venue}
      />
    </Link>
  );
}

export default OldEvent;
