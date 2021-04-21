import React, { useContext } from "react";
import "./Venue.css";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import { MainDataContext } from "../../data/MainDataContext";
function Venue() {
  const allData = useContext(MainDataContext);
  const vs = allData.mainState.venueData;

  if (vs.length === 0) {
    return null;
  } else {
    return (
      <div className="venue">
        <ImageContainer
          source={vs.venue_image_large_480}
          altText={vs.venue_name}
        />
        <div className="venue-info">
          <h1>{vs.venue_name}</h1>
          <p> {vs.venue_address_1}</p>
          <p> {vs.venue_address_2}</p>
          <p> {vs.venue_address_3}</p>
          <p> {vs.venue_postcode}</p>
          <p> {vs.venue_email}</p>
          <p> {vs.venue_telephone}</p>
        </div>
      </div>
    );
  }
}

export default Venue;
