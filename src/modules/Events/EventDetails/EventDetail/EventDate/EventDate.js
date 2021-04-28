import React from "react";

function EventDate(props) {
  return (
    <div>
      <h3>
        {props.date.dayofweek} {props.date.daysuffix} {props.date.month} at{" "}
        {props.date.ampm}
      </h3>
    </div>
  );
}

export default EventDate;
