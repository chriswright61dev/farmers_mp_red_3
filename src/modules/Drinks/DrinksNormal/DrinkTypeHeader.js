import React from "react";
import "./DrinkTypeHeader.css";
function DrinkTypeHeader(props) {
  return (
    <div className="drink_type_header">
      <h3>{props.drinkType}</h3>
      <p>{props.drinkTypeInfo}</p>
    </div>
  );
}

export default DrinkTypeHeader;
