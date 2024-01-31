import { ISettings } from "../../types/settings";

const settings: ISettings[] = [
  {
    id: "613863c1c9ae161fc5a99b36",
    playoffsStart: "2020-12-12",
    playoffsBracketBuilt: false,
    enableCalendarScrollMode: false,
    teamName: "Basketball City",
    teamLogo:
      "data:image/png;base64,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",
  },
];

export { settings };