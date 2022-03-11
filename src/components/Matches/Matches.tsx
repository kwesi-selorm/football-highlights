import "./Matches.css";
import { useEffect, useState } from "react";
import League from "../League/League";

interface HomeTeam {
  name: string;
  logo: string;
}

interface AwayTeam {
  name: string;
  logo: string;
}

interface Match {
  id: number;
  status: string;
  utcDate: string;
  homeTeam: HomeTeam;
  awayTeam: AwayTeam;
}

function Matches() {
  let matches: Match[] = [];
  const [data, setData] = useState(null);

  function handleClick() {
    console.log("clicked");
  }

  // Implement data fetching using axios, extract matches details
  useEffect(() => {
    fetch(
      "https://api.football-data.org/v2/competitions/PL/matches?dateFrom=2022-03-09&dateTo=2022-03-09",
      {
        method: "GET",
        headers: { "X-Auth-Token": "ed952d5bc85e4aa2821b1b08b622bdcc" },
      }
    )
      .then((response) => response.json())
      .then(setData)
      .catch((err) => console.error(err));
  }, []);

  console.log("data:", data);

  return (
    <div className="gridContainer">
      <div className="leagues">
        <League
          imgLink="https://img.icons8.com/color/48/000000/england.png"
          leagueName="Premier League"
          function={handleClick}
          name="PL"
        />
        <League
          imgLink="https://img.icons8.com/color/48/000000/spain-2.png"
          leagueName="La Liga"
          function={handleClick}
          name="PD"
        />
        <League
          imgLink="https://img.icons8.com/color/48/000000/italy.png"
          leagueName="Serie A"
          function={handleClick}
          name="SA"
        />
        <League
          imgLink="https://img.icons8.com/color/48/000000/germany.png"
          leagueName="Bundesliga"
          function={handleClick}
          name="BL1"
        />
      </div>

      {/* {matches.map((match) => {
        <div className="gridItem item1">
          <p key={match.id} className="time">
            {match.utcDate}
          </p>
        </div>; */}
      {/* // <div className={cx(matchStyles.gridItem, matchStyles.item2)}>
        //   <span>logo </span>
        //   {matches.homeTeam.name}
        // </div>
        // <div className={cx(matchStyles.gridItem, matchStyles.item3)}>Score1</div>
        // <div className={cx(matchStyles.gridItem, matchStyles.item4)}>
        //   <span>logo </span>
        //   {match.awayTeam.name}
        // </div>
        // <div className={cx(matchStyles.gridItem, matchStyles.item5)}>Score2</div>
      })} */}
    </div>
  );
}

export default Matches;
