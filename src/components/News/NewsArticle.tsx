import "./News.css";

interface Props {
  pubDate: string;
  image_url: string;
  title: string;
  description: string;
  link: string;
}

export default function NewsArticle(props: Props) {
  return (
    <div className="article">
      <h2 className="articleDateTime">{props.pubDate}</h2>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img
          src={props.image_url}
          alt="news-article"
          className="articlePhoto"
        ></img>
      </a>
      <h3 className="articleTitle">{props.title}</h3>
      <p className="articleDescription">{props.description}</p>
      <span>
        <a
          className="articleLink"
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          more...
        </a>
      </span>
    </div>
  );
}
