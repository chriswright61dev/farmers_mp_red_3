import React from "react";
import "./FoodItem.css";
import FoodItemHeader from "./FoodItemHeader";
import FoodAdditionalHeader from "./FoodAdditionalHeader";
import FoodAdditional from "./FoodAdditional";
import FoodOptions from "./FoodOptions";

function FoodItem(props) {
  const theFoodItem = props.data;

  // console.log("props", props);
  // console.log("theFoodItem", theFoodItem);
  return (
    <div className="food_item">
      <FoodItemHeader
        name={theFoodItem.food_name}
        price={theFoodItem.food_price}
        description={theFoodItem.food_description}
        served={theFoodItem.food_served_with}
      />

      <FoodOptions
        option_name={theFoodItem.food_option_1}
        option_price={theFoodItem.food_option_1_price}
        option_sub1={theFoodItem.food_option_1_suboption_1}
        option_sub2={theFoodItem.food_option_1_suboption_2}
        option_sub3={theFoodItem.food_option_1_suboption_3}
      />
      <FoodOptions
        option_name={theFoodItem.food_option_1}
        option_price={theFoodItem.food_option_1_price}
        option_sub1={theFoodItem.food_option_1_suboption_1}
        option_sub2={theFoodItem.food_option_1_suboption_2}
        option_sub3={theFoodItem.food_option_1_suboption_3}
      />
      <FoodOptions
        option_name={theFoodItem.food_option_2}
        option_price={theFoodItem.food_option_2_price}
        option_sub1={theFoodItem.food_option_2_suboption_1}
        option_sub2={theFoodItem.food_option_2_suboption_2}
        option_sub3={theFoodItem.food_option_2_suboption_3}
      />
      <FoodOptions
        option_name={theFoodItem.food_option_3}
        option_price={theFoodItem.food_option_3_price}
        option_sub1={theFoodItem.food_option_3_suboption_1}
        option_sub2={theFoodItem.food_option_3_suboption_2}
        option_sub3={theFoodItem.food_option_3_suboption_3}
      />

      <FoodAdditionalHeader
        description={theFoodItem.food_addition_description}
        priceDescription={theFoodItem.food_addition_price_description}
      />

      <FoodAdditional
        description={theFoodItem.food_addition_1}
        priceDescription={theFoodItem.food_addition_1_price}
      />

      <FoodAdditional
        description={theFoodItem.food_addition_2}
        priceDescription={theFoodItem.food_addition_2_price}
      />
      <FoodAdditional
        description={theFoodItem.food_addition_3}
        priceDescription={theFoodItem.food_addition_3_price}
      />
      <FoodAdditional
        description={theFoodItem.food_addition_4}
        priceDescription={theFoodItem.food_addition_4_price}
      />
      <FoodAdditional
        description={theFoodItem.food_addition_5}
        priceDescription={theFoodItem.food_addition_5_price}
      />
      <FoodAdditional
        description={theFoodItem.food_addition_6}
        priceDescription={theFoodItem.food_addition_6_price}
      />
    </div>
  );
}

export default FoodItem;
