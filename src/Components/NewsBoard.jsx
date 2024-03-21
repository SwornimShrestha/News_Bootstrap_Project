import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ec783a9aafd84d83962f7ca40891d7c4`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className=" badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            url={news.url}
            src={news.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
