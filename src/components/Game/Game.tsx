import "./Game.css";

interface Props {
  date: string;
  homeTeamName: string;
  awayTeamName: string;
  homeTeamScore: number;
  awayTeamScore: number;
}

export default function Game(props: Props, i: number) {
  return (
    <>
      {/* Match time div */}
      <div className="gridItem item1">
        <p className="time">{props.date.slice(11, 16)}</p>
      </div>

      {/* Home team name div */}
      <div className="gridItem item2">{props.homeTeamName}</div>

      {/* Home team score div */}
      <div className="gridItem item3">{props.homeTeamScore}</div>

      {/* Away team name div */}
      <div className="gridItem item4">{props.awayTeamName}</div>

      {/* Away team score div */}
      <div className="gridItem item5">{props.awayTeamScore}</div>
    </>
  );
}
