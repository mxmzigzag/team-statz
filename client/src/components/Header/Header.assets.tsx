import { IntlShape } from "react-intl";
import { ScheduleIcon } from "../../assets/icons/ScheduleIcon";
import { StatsIcon } from "../../assets/icons/StatsIcon";
import { TeamIcon } from "../../assets/icons/TeamIcon";
import { ELanguages } from "./Header.types";

const NAV_ITEMS = [
  {
    id: "team",
    title: "Team",
    icon: <TeamIcon width="36px" height="36px" />,
  },
  {
    id: "schedule",
    title: "Schedule",
    icon: <ScheduleIcon width="36px" height="36px" />,
  },
  {
    id: "stats",
    title: "Stats",
    icon: <StatsIcon width="36px" height="36px" />,
  },
];

const LANGUAGE_OPTIONS = [
  { value: ELanguages.en, label: ELanguages.en.toUpperCase() },
  { value: ELanguages.ua, label: ELanguages.ua.toUpperCase() },
  { value: ELanguages.ru, label: ELanguages.ru.toUpperCase() },
];

const createLabels = (intl: IntlShape) => ({
  authTooltip: intl.formatMessage({
    id: "Auth.Tooltip.Title",
    defaultMessage: "Moder",
  }),
});

export { LANGUAGE_OPTIONS, NAV_ITEMS, createLabels };
