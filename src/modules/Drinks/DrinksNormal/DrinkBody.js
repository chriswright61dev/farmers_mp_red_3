import React from "react";
import "./DrinkBody.css";
function DrinkBody(props) {
  return (
    <div className="drink__price__container">
      <p className="drink_price">
        {props.firstPrice ? `£ ${props.firstPrice} ${props.firstText}` : null}
      </p>
      <p className="drink_price">
        £ {props.secondPrice} {props.secondText}
      </p>
      {/* <p>value = {(dr.drink_abv / dr.drink_normal_price).toFixed(2)} </p> */}
    </div>
  );
}

export default DrinkBody;
