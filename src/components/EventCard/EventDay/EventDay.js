import React from "react";

function EventDay(props) {
  return (
    <p className="event_card_date">
      Every {props.day} at {props.time}
    </p>
  );
}

export default EventDay;
