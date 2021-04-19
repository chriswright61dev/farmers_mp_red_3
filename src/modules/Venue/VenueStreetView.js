import React, { useContext } from "react";
import { MainDataContext } from "../../data/MainDataContext";
import "./VenueStreetView.css";
function VenueStreetView() {
  const allData = useContext(MainDataContext);
  const vs = allData.mainState.venueData;

  //   const vs = useContext(VenueContext).venueState.theVenueData;

  if (vs.length === 0) {
    return null;
  } else {
    return (
      <div className="venue_map">
        <iframe
          title={vs.streetviewTitle}
          src={vs.venue_streetview_src}
          width="100%"
          height="400"
          frameBorder="0"
          //   style="border:0"
        />
      </div>
    );
  }
}

export default VenueStreetView;
