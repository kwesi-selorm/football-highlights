import "./Matches.css";
import { useEffect, useState } from "react";
import axios from "axios";
import League from "../League/League";
import moment from "moment";
import { Match } from "../../types";

function Matches() {
  // Get current day's date to carry out initial fetch. Modify date later
  let todayDate = moment().format().slice(0, 10);

  // const [live, setLive] = useState(false);
  const [matchDate, setMatchDate] = useState(todayDate);
  const [gameDate] = useState("dateFrom=" + matchDate + "&dateTo=" + matchDate);
  const [matches, setMatches] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("PL");
  const [url, setUrl] = useState(
    "https://api.football-data.org/v2/matches?" + gameDate
  );

  // Display dates on match date buttons
  let twoDaysAgo = moment().subtract(2, "days").format("MMM Do");
  let yesterday = moment().subtract(1, "day").format("MMM Do");
  let tomorrow = moment().add(1, "day").format("MMM Do");
  let twoDaysFromNow = moment().add(2, "days").format("MMM Do");

  //Get dates for when match date buttons are clicked for use in click handler
  let twoDaysAgoDate = moment().subtract(2, "days").format().slice(0, 10);
  let yesterdayDate = moment().subtract(1, "day").format().slice(0, 10);
  let tomorrowDate = moment().add(1, "day").format().slice(0, 10);
  let twoDaysFromNowDate = moment().add(2, "days").format().slice(0, 10);

  //Change list of matches based on user-selected match date
  function handleClickDate(event: { currentTarget: HTMLButtonElement }) {
    const target = event.currentTarget;
    setMatchDate(target.name);
    setUrl(
      "https://api.football-data.org/v2/competitions/" +
        selectedLeague +
        "/matches?dateFrom=" +
        matchDate +
        "&dateTo=" +
        matchDate
    );
    console.log(matchDate);
    console.log(url);
  }

  // Change the league name in the API request URL when the league button is clicked.
  //handleClickLeague function can be improved
  function handleClickLeague(event: { currentTarget: any }) {
    const target = event.currentTarget as HTMLButtonElement;
    setSelectedLeague(target.name);
    setUrl(
      "https://api.football-data.org/v2/competitions/" +
        selectedLeague +
        "/matches?dateFrom=" +
        matchDate +
        "&dateTo=" +
        matchDate
    );
    console.log(url);
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
      <div className="timeList">
        <button
          className="timeButton liveButton"
          style={{ backgroundColor: "#9B0000", borderRadius: "3px" }}
        >
          Live
        </button>
        <button
          name={twoDaysAgoDate}
          onClick={handleClickDate}
          onMouseDown={handleClickDate}
          className="timeButton"
        >
          {twoDaysAgo}
        </button>
        <button
          name={yesterdayDate}
          onClick={handleClickDate}
          onMouseDown={handleClickDate}
          className="timeButton"
        >
          {yesterday}
        </button>
        <button
          name={todayDate}
          onClick={handleClickDate}
          onMouseDown={handleClickDate}
          className="timeButton"
        >
          Today
        </button>
        <button
          name={tomorrowDate}
          onClick={handleClickDate}
          onMouseDown={handleClickDate}
          className="timeButton"
        >
          {tomorrow}
        </button>
        <button
          name={twoDaysFromNowDate}
          onClick={handleClickDate}
          onMouseDown={handleClickDate}
          className="timeButton"
        >
          {twoDaysFromNow}
        </button>
      </div>

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
