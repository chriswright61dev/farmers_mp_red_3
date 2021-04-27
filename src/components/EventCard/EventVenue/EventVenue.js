import React from "react";

function EventVenue(props) {
  return (
    <>
      <h5>An event at </h5>
      <h3>{props.venue}</h3>
    </>
  );
}

export default EventVenue;
