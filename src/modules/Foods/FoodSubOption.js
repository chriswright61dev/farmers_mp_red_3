import React from "react";
// import "./FoodSubOption.css";
function FoodSubOption(props) {
  return props.option ? (
    <div className="food-suboption">{props.option}</div>
  ) : null;
}

export default FoodSubOption;
