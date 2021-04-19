import React, { useContext } from "react";
import { MainDataContext } from "../data/MainDataContext";
import Loading from "../components/Loading/Loading";
import Venue from "../modules/Venue/Venue";
import DrinksDraughtOffers from "../modules/Drinks/DrinksDraughtOffers/DrinksDraughtOffers";
import DrinksTypeHeader from "../modules/Drinks/DrinksNormal/DrinkTypeHeader";
import DrinksDraught from "../modules/Drinks/DrinksNormal/DrinksDraught";
import DrinksSpirits from "../modules/Drinks/DrinksNormal/DrinksSpirits";
function Drinks() {
  const feedCount = useContext(MainDataContext).mainState.feedsCount;
  const allLoaded = useContext(MainDataContext).mainState.loadCount;

  if (allLoaded !== feedCount) {
    return <Loading />;
  } else {
    return (
      <div className="theme_dark">
        <div className="container">
          <div className="info_column">
            <DrinksDraughtOffers />
          </div>
          <div className="info_column">
            <DrinksTypeHeader drinkType="Draught" drinkTypeInfo="" />
            <DrinksDraught />
          </div>
          <div className="info_column">
            <DrinksTypeHeader
              drinkType="Spirits"
              drinkTypeInfo="Single 25ml  Double 50ml"
            />
            <DrinksSpirits />
          </div>
          <div className="info_column">
            <Venue />
          </div>
        </div>
      </div>
    );
  }
}

export default Drinks;
