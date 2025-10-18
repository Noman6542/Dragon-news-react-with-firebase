import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const CategoreNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoreNews, setCategoreNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoreNews(data);
      return;
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoreNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      setCategoreNews(filterNews);
    }
  }, [data, id]);
  return (
    <div>
      <h1 className="mb-5 font-bold">Total news found: {categoreNews.length}</h1>
      <div className="grid grid-cols-1">
        {categoreNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoreNews;
