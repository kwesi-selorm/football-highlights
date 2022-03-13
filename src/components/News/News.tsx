import axios from "axios";
import { useState } from "react";
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

  axios
    .request({
      method: "GET",
      params: {
        apiKey: "b97ef634a2e94b44a723519dbf082470",
        category: "sports",
        country: "gb",
      },
    })
    .then((response) => {
      console.log(response.data);
      //Articles is an array of fetched new article objects
      setArticles(response.data.articles);
    })
    .catch((err) => console.error(err));

  return articles.map((article: Article) => {
    return (
      <div className="newsList">
        <NewsArticle
          date={article.publishedAt}
          imageUrl={article.urlToImage}
          title={article.title}
          description={article.description}
          url={article.url}
        />
      </div>
    );
  });
}
