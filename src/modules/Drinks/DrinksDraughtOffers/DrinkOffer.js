import React from "react";
import "./DrinkOffer.css";
function DrinkOffer(props) {
  const dr = props.data;
  return (
    <div className="drink_offer">
      {/* {dr.drink_type} */}
      <p className="drink_offer__name"> {dr.drink_name}</p>
      <div className="drink_offer__container">
        <div className="drink_offer__image">
          <img src={dr.drink_image_thumbnail} alt={dr.drink_name} />
        </div>
        <div className="drink_offer__body">
          <p className="drink_offer_price">£ {dr.drink_offer_price}</p>
          <p>a Pint</p>
        </div>
      </div>
    </div>
  );
}

export default DrinkOffer;
