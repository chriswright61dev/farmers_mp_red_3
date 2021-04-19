import React from "react";
import "./FoodItemHeader.css";
function FoodItemHeader(props) {
  return (
    <div className="food_item_header">
      <h3>
        {props.name} <span className="foodPrice">{props.price}</span>{" "}
      </h3>
      <p>{props.description}</p>
      <p>{props.served}</p>
    </div>
  );
}

export default FoodItemHeader;
