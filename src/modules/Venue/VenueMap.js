import React, { useContext } from "react";
import { MainDataContext } from "../../data/MainDataContext";
import "./VenueMap.css";
function VenueMap() {
  const allData = useContext(MainDataContext);
  const vs = allData.mainState.venueData;

  //   const vs = useContext(VenueContext).venueState.theVenueData;

  if (vs.length === 0) {
    return null;
  } else {
    const pb = vs.map_pb;
    const mapsrc = "https://www.google.com/maps/embed?pb=" + pb;

    // src={vs.venue_map_src}
    return (
      <div className="venue_map">
        <iframe
          src={mapsrc}
          width="100%"
          height="400"
          loading="lazy"
          title="Freds Ale House"
        ></iframe>
      </div>
    );
  }
}

export default VenueMap;
