import React from "react";
import "./FoodOptions.css";
import FoodSubOption from "./FoodSubOption";
function FoodOptions(props) {
  return props.option_name ? (
    <div className="food-options">
      <p>{props.option_name}</p>
      {props.option_price}
      <FoodSubOption option={props.option_sub1} />
      <FoodSubOption option={props.option_sub2} />
      <FoodSubOption option={props.option_sub3} />
    </div>
  ) : null;
}

export default FoodOptions;
