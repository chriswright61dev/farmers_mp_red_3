import React from "react";

function OldEventDate(props) {
  return (
    <div>
      <p>This is an OLD event from </p>
      <h3>
        {props.date.month} {props.date.year}
      </h3>
    </div>
  );
}

export default OldEventDate;
