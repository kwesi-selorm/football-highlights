import axios from "axios";
import { useEffect, useState } from "react";
import NewsArticle from "./NewsArticle";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export default function News() {
  const [articles, setArticles] = useState([]);

  function fetchArticles() {
    axios
      .request({
        method: "GET",
        url: "https://newsapi.org/v2/top-headlines",
        params: {
          apiKey: "b97ef634a2e94b44a723519dbf082470",
          category: "sports",
          country: "gb",
        },
      })
      .then((response) => {
        //Articles is an array of fetched new article objects
        setArticles(response.data.articles);
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
              date={article.publishedAt}
              imageUrl={article.urlToImage}
              title={article.title}
              description={article.description}
              url={article.url}
            />
          );
        })}
      </div>
    </>
  );
}
