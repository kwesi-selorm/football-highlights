import { MouseEventHandler } from "react";

export interface Props {
  imgLink: string;
  leagueName: string;
  name: string;
  function1: MouseEventHandler<HTMLButtonElement> | undefined;
  function2: MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface HomeTeam {
  id?: number;
  name: string;
}

export interface AwayTeam {
  id?: number;
  name: string;
}

export interface FullTime {
  homeTeam: number;
  awayTeam: number;
}

export interface Score {
  fullTime: FullTime;
}

export interface Match {
  id: number;
  status: string;
  utcDate: string;
  homeTeam: HomeTeam;
  awayTeam: AwayTeam;
  score: Score;
}
