import React, { useContext } from "react";
import FoodHeader from "./FoodHeader";
import FoodItem from "./FoodItem";
import "./Foods.css";
import { MainDataContext } from "../../data/MainDataContext";

function Foods() {
  const allData = useContext(MainDataContext);

  const foodsdata = allData.mainState.foodsData;

  return (
    <div>
      <FoodHeader />

      {foodsdata.map((fooditem) => {
        return <FoodItem key={fooditem.id} data={fooditem} />;
      })}
    </div>
  );
}
export default Foods;
