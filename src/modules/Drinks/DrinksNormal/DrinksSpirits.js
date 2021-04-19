import React, { useContext } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
import DrinkSpirits from "./DrinkSpirits";

function DrinksSpirits() {
  const allData = useContext(MainDataContext);

  const drinksdata = allData.mainState.drinksData;
  //   const drinksdata = useContext(DrinksContext).drinksState.theDrinksData;
  if (!drinksdata) {
    return "loading";
  } else {
    const draughtData = drinksdata.filter(
      (drink) => drink.drink_type === "spirit"
    );
    return (
      <div className="drinks_spirits">
        {/* <DrinksOffersHeader /> */}
        {draughtData.map((drink) => {
          return <DrinkSpirits key={drink.id} data={drink}></DrinkSpirits>;
        })}
      </div>
    );
  }
}
export default DrinksSpirits;
