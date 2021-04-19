import React, { useContext } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
import DrinkDraught from "./DrinkDraught";
function DrinksDraught() {
  const allData = useContext(MainDataContext);

  const drinksdata = allData.mainState.drinksData;
  if (!drinksdata) {
    return "loading";
  } else {
    const draughtData = drinksdata.filter(
      (drink) => drink.drink_type === "draught"
    );

    return (
      <div className="drinks_drught">
        {/* <DrinksOffersHeader /> */}
        {draughtData.map((drink) => {
          return <DrinkDraught key={drink.id} data={drink}></DrinkDraught>;
        })}
      </div>
    );
  }
}

export default DrinksDraught;
