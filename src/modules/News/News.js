import React, { useContext } from "react";
import { MainDataContext } from "../../data/MainDataContext";
function News() {
  const newsdata = useContext(MainDataContext).mainState.newsData;

  if (newsdata.length === 0) {
    return null;
  } else {
    const newsitems = newsdata.filter((news) => news.news_body);
    return (
      <div className="news">
        <ul>
          {newsitems.map((newsItem) => {
            return (
              <li key={newsItem.id}>
                <h3>{newsItem.news_title}</h3>
                <div className="newsImage">
                  {newsItem.news_image ? (
                    <img src={newsItem.news_image} alt={newsItem.news_title} />
                  ) : null}
                </div>

                <div
                  className="newsbody"
                  dangerouslySetInnerHTML={{ __html: newsItem.news_body }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default News;
