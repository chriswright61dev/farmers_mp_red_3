import React from "react";
import "./EventCard.css";
import EventDate from "./EventDate/EventDate";
import EventDay from "./EventDay/EventDay";
import EventVenue from "./EventVenue/EventVenue";
import ImageContainer from "../ImageContainer/ImageContainer";
import { Link } from "react-router-dom";
function EventCard(props) {
  return (
    <div className="event_card">
      <Link to={`/${props.link}/${props.id}`}>
        <h4>{props.name}</h4>
        <div className="event_card_body">
          <div className="event_card_image">
            <ImageContainer source={props.imageURL} altText={props.name} />
          </div>

          <div className="event_card_text">
            {props.venue ? <EventVenue venue={props.venue} /> : null}
            {props.day ? (
              <EventDay day={props.day} time={props.time} />
            ) : (
              <EventDate date={props.date} />
            )}

            <p className="event_card_description">{props.description} </p>
            <p className="event_card_admission">{props.admission} </p>
          </div>
        </div>{" "}
      </Link>
    </div>
  );
}

export default EventCard;
