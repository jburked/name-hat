import winterHat from "./winterHat.png";
import winterBG from "./winterBG.jpg";
import springHat from "./sunhat.png";
import springBG from "./springBG.jpg";
import summerHat from "./summerHat.png";
import summerBG from "./summerBG.jpg";
import topHat from "./tophat.png";
import topHatBG from "./springBG.jpg";
import fallHat from "./fallHat.png";
import fallBG from "./fallBG.jpg";

type Season = "WINTER" | "SPRING" | "SUMMER" | "FALL";

export type Item = {
  value: string;
  inTheMix: boolean;
};

export type pObject = {
  displayTitle: string;
  displayButtonText: string;
  displayChosenItem: string;
};

export enum Seasons {
  Winter = "WINTER",
  Spring = "SPRING",
  Summer = "SUMMER",
  Fall = "FALL",
}

export const getSeasonFromCurrentDate = (): Season => {
  const winterMonths = [11, 0, 1];
  const springMonths = [2, 3, 4];
  const summerMonths = [5, 6, 7];
  const fallMonths = [8, 9, 10];

  const today = new Date().getMonth();

  var currentSeason!: Season;
  if (winterMonths.includes(today)) currentSeason = Seasons.Winter;
  else if (springMonths.includes(today)) currentSeason = Seasons.Spring;
  else if (summerMonths.includes(today)) currentSeason = Seasons.Summer;
  else currentSeason = Seasons.Fall;

  return currentSeason;
};

export const getHatFromSeason = (): string => {
  var season = getSeasonFromCurrentDate();
  var hat = "";
  if (season === Seasons.Winter) hat = winterHat;
  else if (season === Seasons.Spring) hat = springHat;
  else if (season === Seasons.Summer) hat = summerHat;
  else if (season === Seasons.Fall) hat = fallHat;
  else hat = topHat;
  return hat;
};

export const getBGFromSeason = (): string => {
  var season = getSeasonFromCurrentDate();
  var backgroundImage = "";
  if (season === Seasons.Winter) backgroundImage = winterBG;
  else if (season === Seasons.Spring) backgroundImage = springBG;
  else if (season === Seasons.Summer) backgroundImage = summerBG;
  else if (season === Seasons.Fall) backgroundImage = fallBG;
  else backgroundImage = topHatBG;
  return "url(" + backgroundImage + ")";
};
