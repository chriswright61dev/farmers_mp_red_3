import React from "react";
// import "./Drink.css";
import DrinkHeader from "./DrinkHeader";
import DrinkBody from "./DrinkBody";

function DrinkSpirits(props) {
  const dr = props.data;
  return (
    <div className="drink">
      <DrinkHeader name={dr.drink_name} abv={dr.drink_abv} />
      <DrinkBody
        firstText="Single"
        firstPrice={dr.drink_normal_price_single}
        secondText="Double"
        secondPrice={dr.drink_normal_price_double}
      />
    </div>
  );
}

export default DrinkSpirits;
