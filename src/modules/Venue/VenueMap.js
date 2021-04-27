import React, { useContext } from "react";
import { MainDataContext } from "../../data/MainDataContext";
import "./VenueMap.css";
function VenueMap() {
  const allData = useContext(MainDataContext);
  const vs = allData.mainState.venueData;

  // venue_map_src the old way

  if (vs.length === 0) {
    return null;
  } else {
    let mapsrc = vs.venue_map_src;

    if (vs.map_pb) {
      const pb = vs.map_pb;
      mapsrc = "https://www.google.com/maps/embed?pb=" + pb;
    }

    return (
      <div className="venue_map">
        <iframe
          src={mapsrc}
          width="100%"
          height="400"
          loading="lazy"
          title={vs.mapTitle}
        ></iframe>
      </div>
    );
  }
}

export default VenueMap;
