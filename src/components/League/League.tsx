import "./Leagues.css";
import { MouseEventHandler } from "react";

type Props = {
  imgLink: string;
  leagueName: string;
  name?: string;
  function?: MouseEventHandler<HTMLButtonElement> | undefined;
};

function League(props: Props) {
  return (
    <button
      className="leagueButton"
      onClick={props.function}
      name={props.name}
    >
      <span>
        <img
          alt=""
          width={20}
          height={20}
          className="countryFlag"
          src={props.imgLink}
        />
      </span>

      <p className="leagueName">{props.leagueName}</p>
    </button>
  );
}

export default League;
