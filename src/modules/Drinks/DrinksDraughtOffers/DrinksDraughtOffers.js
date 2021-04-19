import React, { useContext } from "react";
import "./DrinksDraughtOffers.css";
import DrinksOffersHeader from "./DrinksOffersHeader";
import DrinkOffer from "./DrinkOffer";
import { MainDataContext } from "../../../data/MainDataContext";
function DrinksDraughtOffers() {
  const allData = useContext(MainDataContext);

  const drinksdata = allData.mainState.drinksData;

  const draughtOffersData = drinksdata.filter(
    (drink) => drink.drink_offer_price && drink.drink_type === "draught"
  );

  return (
    <div className="drinks_offers">
      <DrinksOffersHeader />
      {draughtOffersData.map((drink) => {
        return <DrinkOffer key={drink.id} data={drink}></DrinkOffer>;
      })}
    </div>
  );
}

export default DrinksDraughtOffers;
