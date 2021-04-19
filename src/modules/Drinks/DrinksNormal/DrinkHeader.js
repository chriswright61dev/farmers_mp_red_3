import React from "react";
import "./DrinkHeader.css";
function DrinkHeader(props) {
  return (
    <div className="drink_header">
      <p className="drink_header_name">{props.name}</p>
      <p>ABV {props.abv}</p>
    </div>
  );
}

export default DrinkHeader;
