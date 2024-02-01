import { IntlShape } from "react-intl";

const createLabels = (intl: IntlShape) => ({
  bagePts: intl.formatMessage({
    id: "PlayerCard.Badge.Pts",
    defaultMessage: "Bucket Machine",
  }),
  bageReb: intl.formatMessage({
    id: "PlayerCard.Badge.Reb",
    defaultMessage: "Glass Cleaner",
  }),
  bageAst: intl.formatMessage({
    id: "PlayerCard.Badge.Ast",
    defaultMessage: "Point GOD",
  }),
  bageBlk: intl.formatMessage({
    id: "PlayerCard.Badge.Blk",
    defaultMessage: "You shall NOT pass",
  }),
  bageStl: intl.formatMessage({
    id: "PlayerCard.Badge.Stl",
    defaultMessage: "Thief",
  }),
  ppg: intl.formatMessage({
    id: "PlayerCard.PPG",
    defaultMessage: "PPG",
  }),
  rpg: intl.formatMessage({
    id: "PlayerCard.RPG",
    defaultMessage: "RPG",
  }),
  apg: intl.formatMessage({
    id: "PlayerCard.APG",
    defaultMessage: "APG",
  }),
  bpg: intl.formatMessage({
    id: "PlayerCard.BPG",
    defaultMessage: "BPG",
  }),
  spg: intl.formatMessage({
    id: "PlayerCard.SPG",
    defaultMessage: "SPG",
  }),
});

export { createLabels };
