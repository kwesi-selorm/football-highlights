import "./Matches.css";
import { useEffect, useState } from "react";
import axios from "axios";
import League from "../League/League";
import MatchTimes from "../MatchTimes/MatchTimes";

interface HomeTeam {
  id?: number;
  name: string;
}

interface AwayTeam {
  id?: number;
  name: string;
}

interface FullTime {
  homeTeam: number;
  awayTeam: number;
}

interface Score {
  fullTime: FullTime;
}

interface Match {
  id: number;
  status: string;
  utcDate: string;
  homeTeam: HomeTeam;
  awayTeam: AwayTeam;
  score: Score;
}

function Matches() {
  const [matches, setMatches] = useState([]);

  // Function to change name of league used in fetching match data
  function handleClick() {
    console.log("clicked");
  }

  // Implement data fetching using axios, extract matches details
  useEffect(() => {
    axios
      .request({
        method: "GET",
        url: "https://api.football-data.org/v2/competitions/PL/matches?dateFrom=2022-03-10&dateTo=2022-03-10",
        headers: { "X-Auth-Token": "ed952d5bc85e4aa2821b1b08b622bdcc" },
      })
      .then((response) => {
        console.log(response.data.matches);
        setMatches(response.data.matches);
        // console.log(matches);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {/* League buttons */}
      <div className="leagues">
        <League
          imgLink="https://img.icons8.com/color/48/000000/england.png"
          leagueName="Premier League"
          function1={handleClick}
          function2={handleClick}
          name="PL"
        />
        <League
          imgLink="https://img.icons8.com/color/48/000000/spain-2.png"
          leagueName="La Liga"
          function1={handleClick}
          function2={handleClick}
          name="PD"
        />
        <League
          imgLink="https://img.icons8.com/color/48/000000/italy.png"
          leagueName="Serie A"
          function1={handleClick}
          function2={handleClick}
          name="SA"
        />
        <League
          imgLink="https://img.icons8.com/color/48/000000/germany.png"
          leagueName="Bundesliga"
          function1={handleClick}
          function2={handleClick}
          name="BL1"
        />
      </div>

      {/* Match times component */}
      <MatchTimes />

      {/* Matches list container */}
      <div className="gridContainer">
        {matches.map((match: Match) => {
          return (
            <div>
              {/* Match time div */}
              <div className="gridItem item1">
                <p key={match.id} className="time">
                  {match.utcDate.slice(11, 16)}
                </p>
              </div>

              {/* Home team name div */}
              <div className="gridItem item2">{match.homeTeam.name}</div>

              {/* Home team score div */}
              <div className="gridItem item3">
                {match.score.fullTime.homeTeam}
              </div>

              {/* Away team name div */}
              <div className="gridItem item4">{match.awayTeam.name}</div>

              {/* Away team score div */}
              <div className="gridItem item5">
                {match.score.fullTime.awayTeam}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Matches;
