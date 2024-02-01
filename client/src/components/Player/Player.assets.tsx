import { IntlShape } from "react-intl";

const createLabels = (intl: IntlShape) => ({
  lbs: intl.formatMessage({
    id: "Player.lbs",
    defaultMessage: "lbs",
  }),
  born: intl.formatMessage({
    id: "Player.Born",
    defaultMessage: "Born",
  }),
  statsOfCareer: intl.formatMessage({
    id: "Player.StatsOfCareer",
    defaultMessage: "Stats through career",
  }),
  points: intl.formatMessage({
    id: "Player.Points",
    defaultMessage: "Points",
  }),
  rebounds: intl.formatMessage({
    id: "Player.Rebounds",
    defaultMessage: "Rebounds",
  }),
  assists: intl.formatMessage({
    id: "Player.Assists",
    defaultMessage: "Assists",
  }),
  twoPTperc: intl.formatMessage({
    id: "Player.TwoPTpercentage",
    defaultMessage: "2PT%",
  }),
  threePTperc: intl.formatMessage({
    id: "Player.ThreePTpercentage",
    defaultMessage: "3PT%",
  }),
  FTperc: intl.formatMessage({
    id: "Player.FTpercentage",
    defaultMessage: "FT%",
  }),
  hightlights: intl.formatMessage({
    id: "Player.Hightlights",
    defaultMessage: "Hightlights",
  }),
});

export { createLabels };
