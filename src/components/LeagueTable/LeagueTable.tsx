import { MouseEvent, useEffect, useState } from "react";
import axios from "axios";
import League from "../League/League";
import "./LeagueTable.css";

interface Team {
  id: number;
  name: string;
  crestUrl: string;
}

interface Club {
  position: number;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
  team: Team;
}

// https://stackoverflow.com/questions/54513548/destructure-a-function-parameter-in-typescript
function LeagueTable() {
  const [selectedLeague, setSelectedLeague] = useState("PL");
  const [, setData] = useState([]);
  const [table, setTable] = useState([]);

  // Change the league name in the API request URL when the league button is clicked.
  //handleClick function can be improved
  function handleClick(event: MouseEvent) {
    event.preventDefault();
    const target = event.currentTarget as HTMLButtonElement;
    setSelectedLeague(target.name);
    console.log(selectedLeague);
  }

  // Fetch data from football-data API using axios
  useEffect(() => {
    axios
      .request({
        method: "GET",
        url:
          "https://api.football-data.org/v2/competitions/" +
          selectedLeague +
          "/standings",
        headers: {
          "X-Auth-Token": "ed952d5bc85e4aa2821b1b08b622bdcc",
        },
      })
      .then(function (response) {
        // Set the response data with the standings property
        setData(response.data.standings);

        // Set the table state with the table property. Table is an array of 20 club objects
        setTable(response.data.standings[0].table);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [selectedLeague]);

  return (
    <>
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
      <div className="container">
        <div className="leagueTable">
          <div className="tableHeader">
            <p>POS</p>
            <p>CLUB</p>
            <p>P</p>
            <p>W</p>
            <p>D</p>
            <p>L</p>
            <p>PTS</p>
          </div>
          {table.map((club: Club) => (
            <div className="clubRow" key={club.team.id}>
              <p>{club.position}</p>
              <p className="clubCrestAndName">
                <img
                  src={club.team.crestUrl}
                  width={20}
                  height={20}
                  alt=""
                  className="crestImage"
                />
              </p>
              <p>{club.team.name}</p>
              <p>{club.playedGames}</p>
              <p>{club.won}</p>
              <p>{club.draw}</p>
              <p>{club.lost}</p>
              <p>{club.points}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LeagueTable;
