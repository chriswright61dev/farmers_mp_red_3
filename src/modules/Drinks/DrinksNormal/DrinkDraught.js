import React from "react";
// import "./Drink.css";
import DrinkHeader from "./DrinkHeader";
import DrinkBody from "./DrinkBody";
function DrinkDraught(props) {
  const dr = props.data;

  return (
    <div className="drink">
      <DrinkHeader name={dr.drink_name} abv={dr.drink_abv} />
      <DrinkBody
        firstPrice={dr.drink_normal_price}
        firstText="a Pint"
        secondPrice={dr.drink_normal_price_half_pint}
        secondText=" ( half Pint )"
      />
    </div>
  );
}

export default DrinkDraught;
