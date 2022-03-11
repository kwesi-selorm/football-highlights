import leagueStyles from "../styles/Leagues.module.css";
import Image from "next/image";
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
      className={leagueStyles.leagueButton}
      onClick={props.function}
      name={props.name}
    >
      <span>
        <Image
          alt=""
          width={20}
          height={20}
          className={leagueStyles.countryFlag}
          src={props.imgLink}
        />
      </span>

      <p className={leagueStyles.leagueName}>{props.leagueName}</p>
    </button>
  );
}

export default League;
