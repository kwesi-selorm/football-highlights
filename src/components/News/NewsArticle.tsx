import "./News.css";

interface Props {
  date: string;
  imageUrl: string;
  title: string;
  description: string;
  url: string;
}

export default function NewsArticle(props: Props) {
  return (
    <div className="article">
      <h2 className="dateTime">
        {props["date"].slice(0, 10) + ", " + props["date"].slice(11, 16)}
      </h2>
      <a href={props.url}>
        <img
          src={props.imageUrl}
          alt="news-article"
          className="articlePhoto"
        ></img>
      </a>
      <h3 className="title">{props.title}</h3>
      <p className="description">{props.description}</p>
    </div>
  );
}
