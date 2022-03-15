import "./Matches.css";
import { useEffect, useState } from "react";
import axios from "axios";
import League from "../League/League";
import moment from "moment";
import { Match } from "../../types";
import Game from "../Game/Game";
import ClubDetails from "../ClubDetails/ClubDetails";

function Matches() {
  // Get current day's date to carry out initial fetch. Modify date later
  let todayDate = moment().format().slice(0, 10);

  const [matchDate, setMatchDate] = useState(todayDate);
  const [gameDate] = useState("dateFrom=" + matchDate + "&dateTo=" + matchDate);
  const [matches, setMatches] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("");
  const [url, setUrl] = useState(
    "https://api.football-data.org/v2/matches?" + gameDate
  );
  // const [homeLineup, setHomeLineup] = useState([]);
  // const [homeBench, setHomeBench] = useState([]);
  // const [awayLineup, setAwayLineup] = useState([]);
  // const [awayBench, setAwayBench] = useState([]);

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
    selectedLeague === "" && setSelectedLeague("PL");
    setUrl(
      "https://api.football-data.org/v2/competitions/" +
        selectedLeague +
        "/matches?dateFrom=" +
        matchDate +
        "&dateTo=" +
        matchDate
    );
  }

  // Handle live button click event
  document.querySelector(".liveButton")?.addEventListener("click", () => {
    //Display live matches from all leagues
    setUrl("https://api.football-data.org/v2/matches?status=LIVE");
  });

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
          style={{ backgroundColor: "#9B0000" }}
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
          autoFocus
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

      <ClubDetails />

      {/* Matches list container */}

      {matches.map((match: Match, i: number) => {
        return (
          <div className="gridContainer" key={i}>
            <Game
              date={match.utcDate}
              homeTeamName={match.homeTeam.name}
              awayTeamName={match.awayTeam.name}
              homeTeamScore={match.score.fullTime.homeTeam}
              awayTeamScore={match.score.fullTime.awayTeam}
            />
          </div>
        );
      })}
    </>
  );
}

export default Matches;
