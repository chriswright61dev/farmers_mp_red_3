import React, { useContext } from "react";
import "./HeaderLogo.css";
import { MainDataContext } from "../../data/MainDataContext";
import { Link } from "react-router-dom";
function HeaderLogo() {
  const allData = useContext(MainDataContext);
  const vs = allData.mainState.venueData;
  // console.log("logo", vs);
  // const vs = useContext(VenueContext).venueState.theVenueData;
  if (vs.length === 0) {
    return null;
  } else {
    return (
      <Link to="/">
        <div className="header_logo">
          <img src={vs.venue_logo} alt={vs.venue_name} />
        </div>
      </Link>
    );
  }
}

export const MemoizedHeaderLogo = React.memo(HeaderLogo);

export default HeaderLogo;
