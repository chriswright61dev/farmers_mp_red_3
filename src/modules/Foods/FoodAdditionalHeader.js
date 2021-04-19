import React from "react";
import "./FoodAdditionalHeader.css";
function FoodAdditionalHeader(props) {
  return props.description ? (
    <div className="food-additional-header">
      <h4>{props.description}</h4>
      <p>{props.priceDescription}</p>
    </div>
  ) : null;
}

export default FoodAdditionalHeader;
