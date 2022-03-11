import axios from "axios";
import matchStyles from "../styles/Match.module.css";
import cx from "classnames";
import { useEffect } from "react";

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

  // Implement data fetching using axios, extract matches details
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.football-data.org/v2/competitions/PL/matches?dateFrom=2022-03-09&dateTo=2022-03-09",
      headers: { "X-Auth-Token": "ed952d5bc85e4aa2821b1b08b622bdcc" },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        matches = response.data.matches;
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className={matchStyles.gridContainer}>
      {matches.map((match) => {
        <div className={cx(matchStyles.gridItem, matchStyles.item1)}>
          <p key={match.id} className={matchStyles.time}>
            {match.utcDate}
          </p>
        </div>;
        // <div className={cx(matchStyles.gridItem, matchStyles.item2)}>
        //   <span>logo </span>
        //   {matches.homeTeam.name}
        // </div>
        // <div className={cx(matchStyles.gridItem, matchStyles.item3)}>Score1</div>
        // <div className={cx(matchStyles.gridItem, matchStyles.item4)}>
        //   <span>logo </span>
        //   {match.awayTeam.name}
        // </div>
        // <div className={cx(matchStyles.gridItem, matchStyles.item5)}>Score2</div>
      })}
    </div>
  );
}

export default Matches;
