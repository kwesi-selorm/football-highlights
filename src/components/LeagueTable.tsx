import { MouseEvent, useEffect, useState } from "react";
import League from "./League";
import "../../styles/LeagueTable.module.css";

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
  const [leagueAbbrev, setLeagueAbbrev] = useState("PL");
  const [data, setData] = useState(null);

  function handleClick(e: MouseEvent) {
    const target = e.target as HTMLButtonElement;
    const selectedLeague = target.name;
    setLeagueAbbrev(selectedLeague);
    console.log(leagueAbbrev);
  }

  useEffect(() => {
    fetch(
      "https://api.football-data.org/v2/competitions/" + "PL" + "/standings",
      {
        method: "GET",
        headers: {
          "X-Auth-Token": "ed952d5bc85e4aa2821b1b08b622bdcc",
        },
      }
    )
      .then((response) => response.json())
      .then(setData)
      .catch((err) => console.error(err));
  }, []);

  console.log(data);

  //  const standings = response.standings;
  //  // table is an array of 20 club objects
  //  const table = standings[0].table;

  return (
    <>
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
          {table.map((table) => (
            <div className="clubRow" key={table.team.id}>
              <p>{table.position}</p>
              <p className="clubCrestAndName">
                <img
                  src={table.team.crestUrl}
                  width={20}
                  height={20}
                  alt=""
                  className="crestImage"
                />
              </p>
              <p>{table.team.name}</p>
              <p>{table.playedGames}</p>
              <p>{table.won}</p>
              <p>{table.draw}</p>
              <p>{table.lost}</p>
              <p>{table.points}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LeagueTable;