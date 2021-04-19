import React, { useContext } from "react";
import { MainDataContext } from "../../data/MainDataContext";
import "./Announcement.css";
function Announcement() {
  const newsdata = useContext(MainDataContext).mainState.newsData;
  const announcements = newsdata.filter((news) => news.news_announcement);
  if (announcements.length > 0) {
    const announcement = announcements[0].news_announcement;

    return (
      <div className="announcement">
        <h3>{announcement}</h3>
      </div>
    );
  } else {
    return "stand by for an announcement";
  }
}

export default Announcement;
