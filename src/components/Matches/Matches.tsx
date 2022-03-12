import "./Matches.css";
import { useEffect, useState } from "react";
import axios from "axios";
import League from "../League/League";
import MatchTimes from "../MatchTimes/MatchTimes";
import moment from "moment";
import { Match } from "../../types";

function Matches() {
  // Get today's date to carry out initial fetch. Modify date later based on user selection
  // of match times. Slice to copy only the date section
  let matchDate = moment().format().slice(0, 10);
  matchDate = "dateFrom=" + matchDate + "&dateTo=" + matchDate;
  console.log(matchDate);

  // const [live, setLive] = useState(false);
  const [gameDate, setGameDate] = useState(matchDate);
  const [matches, setMatches] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("PL");
  const [url, setUrl] = useState(
    "https://api.football-data.org/v2/matches?" + matchDate
  );

  // Change the league name in the API request URL when the league button is clicked.
  //handleClickLeague function can be improved
  function handleClickLeague(event: {
    preventDefault: () => void;
    currentTarget: any;
  }) {
    const target = event.currentTarget as HTMLButtonElement;
    setSelectedLeague(target.name);
    setUrl(
      "https://api.football-data.org/v2/competitions/" +
        selectedLeague +
        "/matches?" +
        gameDate
    );
    console.log(selectedLeague);
  }

  // Fetch matches info for played or scheduled matches
  useEffect(() => {
    axios
      .request({
        method: "GET",
        url: url,
        headers: { "X-Auth-Token": "ed952d5bc85e4aa2821b1b08b622bdcc" },
      })
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((error) => console.error(error));
  }, [selectedLeague, url]);

  return (
    <>
      {/* League buttons */}
      <div className="leagues">
        <League
          imgLink="https://img.icons8.com/color/48/000000/england.png"
          leagueName="Premier League"
          function1={handleClickLeague}
          function2={handleClickLeague}
          name="PL"
        />
        <League
          imgLink="https://img.icons8.com/color/48/000000/spain-2.png"
          leagueName="La Liga"
          function1={handleClickLeague}
          function2={handleClickLeague}
          name="PD"
        />
        <League
          imgLink="https://img.icons8.com/color/48/000000/italy.png"
          leagueName="Serie A"
          function1={handleClickLeague}
          function2={handleClickLeague}
          name="SA"
        />
        <League
          imgLink="https://img.icons8.com/color/48/000000/germany.png"
          leagueName="Bundesliga"
          function1={handleClickLeague}
          function2={handleClickLeague}
          name="BL1"
        />
      </div>

      {/* Match times component */}
      <MatchTimes />

      {/* Matches list container */}

      {matches.map((match: Match) => {
        return (
          <div className="gridContainer">
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
    </>
  );
}

export default Matches;
