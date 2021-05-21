import { isWithinInterval } from "date-fns";

type Season = "WINTER" | "SPRING" | "SUMMER" | "FALL";

export type Item = {
  value: string;
  inTheMix: boolean;
};

export type pObject = {
  displayTitle: string;
  displayButtonText: string;
  displayChosenItem: string;
  handleClick: () => void;
};

export enum Seasons {
  Winter = "WINTER",
  Spring = "SPRING",
  Summer = "SUMMER",
  Fall = "FALL",
}

export const seasonFromCurrentDate = (): Season => {
  const winterInterval = { start: new Date(12, 1), end: new Date(2, 29) };
  const springInterval = { start: new Date(3, 1), end: new Date(5, 31) };
  const summerInterval = { start: new Date(6, 1), end: new Date(8, 31) };
  const fallInterval = { start: new Date(9, 1), end: new Date(11, 30) };

  const today = new Date();
  var currentSeason!: Season;
  if (isWithinInterval(today, winterInterval)) currentSeason = Seasons.Winter;
  if (isWithinInterval(today, springInterval)) currentSeason = Seasons.Spring;
  if (isWithinInterval(today, summerInterval)) currentSeason = Seasons.Summer;
  if (isWithinInterval(today, fallInterval)) currentSeason = Seasons.Fall;
  return currentSeason;
};
