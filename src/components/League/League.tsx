import "./Leagues.css";
import { Props } from "../../types";

function League(props: Props) {
  return (
    <button
      className="leagueButton"
      onClick={props.function1}
      onMouseDown={props.function2}
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
