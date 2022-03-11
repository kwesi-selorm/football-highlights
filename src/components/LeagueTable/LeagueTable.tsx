import { MouseEvent, useEffect, useState } from "react";
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

type Data = {
  standings: [];
};

// https://stackoverflow.com/questions/54513548/destructure-a-function-parameter-in-typescript
function LeagueTable() {
  const [leagueAbbrev, setLeagueAbbrev] = useState("PL");
  const [data, setData] = useState(null);
  const [table, setTable] = useState(null);

  function handleClick(e: MouseEvent) {
    const target = e.target as HTMLButtonElement;
    const selectedLeague = target.name;
    setLeagueAbbrev(selectedLeague);
    console.log(leagueAbbrev);
  }

  useEffect(() => {
    fetch("https://api.football-data.org/v2/competitions/PL/standings", {
      method: "GET",
      headers: {
        "X-Auth-Token": "ed952d5bc85e4aa2821b1b08b622bdcc",
      },
    })
      .then((response) => response.json())
      .then(setData)
      .catch((err) => console.error(err));
  }, []);

  if (data) {
    console.log("data:", data);
    setTable(data.standings[0].table);
  }

  // console.log(data.standings)
  // const table = data.standings[0].table;

  // const standings =
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
