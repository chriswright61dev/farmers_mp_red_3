import React, { useContext } from "react";
import "./HeaderVenueDescription.css";
import { MainDataContext } from "../../data/MainDataContext";

function HeaderVenueDescription() {
  const allData = useContext(MainDataContext);
  const vs = allData.mainState.venueData;
  if (vs.length === 0) {
    return null;
  } else {
    return (
      <div className="header-venue-description">
        {vs.field_venue_description}
      </div>
    );
  }
}

export default HeaderVenueDescription;
