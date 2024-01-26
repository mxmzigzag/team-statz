import type { IStanding } from "../../types/standing";
import { EConferences } from "../../types/team";

const sortByRank = (standings: IStanding[]) =>
  [...standings].sort((a, b) => a.conference.rank - b.conference.rank);

const prepareStandings = (standings: IStanding[]) => {
  const east: IStanding[] = [];
  const west: IStanding[] = [];

  standings.forEach((standing) => {
    if (standing.conference.name === EConferences.east) {
      east.push(standing);
    } else {
      west.push(standing);
    }
  });

  return { east: sortByRank(east), west: sortByRank(west) };
};

export { prepareStandings };
