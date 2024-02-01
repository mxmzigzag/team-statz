import { IntlShape } from "react-intl";

const createLabels = (intl: IntlShape) => ({
  teamTitle: intl.formatMessage({
    id: "Settings.Section.Team.Title",
    defaultMessage: "Team",
  }),
  teamPlaceholder: intl.formatMessage({
    id: "Settings.Section.Team.Placeholder",
    defaultMessage: "Team Name",
  }),
  calendarTitle: intl.formatMessage({
    id: "Settings.Section.Calendar.Title",
    defaultMessage: "Calendar",
  }),
  calendarLabel: intl.formatMessage({
    id: "Settings.Section.Calendar.Checkbox.Label",
    defaultMessage: "Calendar change month on mouse scroll:",
  }),
  playoffsTitle: intl.formatMessage({
    id: "Settings.Section.Playoffs.Title",
    defaultMessage: "Playoffs",
  }),
  playoffsFieldPlaceholder: intl.formatMessage({
    id: "Settings.Section.Playoffs.Placeholder",
    defaultMessage: "When do the playoffs start?",
  }),
  playoffBracketBuilderOr: intl.formatMessage({
    id: "Settings.Section.PlayoffsBuilder.Or",
    defaultMessage: "or",
  }),
  playoffBracketBuilderInfoText1: intl.formatMessage({
    id: "Settings.Section.PlayoffsBuilder.InfoText1",
    defaultMessage: "Build the Playoffs bracket by pressing this button",
  }),
  playoffBracketBuilderInfoText2: intl.formatMessage({
    id: "Settings.Section.PlayoffsBuilder.InfoText2",
    defaultMessage:
      "Be careful, because it will make changes in the standings table too",
  }),
  playoffBracketBuilderBuild: intl.formatMessage({
    id: "Settings.Button.PlayoffsBuilder.Build",
    defaultMessage: "Build",
  }),
  playoffBracketBuilderRebuild: intl.formatMessage({
    id: "Settings.Button.PlayoffsBuilder.Rebuild",
    defaultMessage: "Rebuild",
  }),
  playoffBracketBuilderClear: intl.formatMessage({
    id: "Settings.Button.PlayoffsBuilder.Clear",
    defaultMessage: "Clear playoffs",
  }),
  saveBtn: intl.formatMessage({
    id: "Settings.Button.Save",
    defaultMessage: "Save",
  }),
});

export { createLabels };
