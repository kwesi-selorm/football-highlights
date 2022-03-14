import axios from "axios";
import { useEffect, useState } from "react";
import NewsArticle from "./NewsArticle";
const soccerball = require("../../assets/soccer-ball.png");

interface Article {
  title: string;
  description: string;
  link: string;
  image_url: string;
  pubDate: string;
}

export default function News() {
  const [articles, setArticles] = useState([]);

  function fetchArticles() {
    // newsdata.io API
    axios
      .request({
        method: "GET",
        url: "https://newsdata.io/api/1/news",
        params: {
          apiKey: "pub_54595d431631337fae7043a69d95aa397a10",
          category: "sports",
          country: "gb,es,de,it,no",
          language: "en",
        },
      })
      .then((response) => {
        //Articles is an array of fetched new article objects
        setArticles(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => console.error(err));
  }

  // Call fetchArticles funtion of interface load
  useEffect(fetchArticles, []);

  return (
    <>
      <div className="newsList">
        {articles.map((article: Article, i: number) => {
          return (
            <NewsArticle
              key={i}
              pubDate={article.pubDate}
              image_url={
                article.image_url == null ? soccerball : article.image_url
              }
              title={article.title}
              description={article.description}
              link={article.link}
            />
          );
        })}
      </div>
    </>
  );
}
