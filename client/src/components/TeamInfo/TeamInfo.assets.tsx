import type { IntlShape } from "react-intl";

const createLabels = (intl: IntlShape) => ({
  gp: intl.formatMessage({
    id: "Team.Info.GP",
    defaultMessage: "GP",
  }),
  w: intl.formatMessage({
    id: "Team.Info.W",
    defaultMessage: "W",
  }),
  l: intl.formatMessage({
    id: "Team.Info.L",
    defaultMessage: "L",
  }),
  oRtg: intl.formatMessage({
    id: "Team.Info.ORtg",
    defaultMessage: "ORtg",
  }),
  dRtg: intl.formatMessage({
    id: "Team.Info.DRtg",
    defaultMessage: "DRtg",
  }),
});

export { createLabels };
