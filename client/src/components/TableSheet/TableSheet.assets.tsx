import { Typography } from "antd";
import { IntlShape } from "react-intl";
import { IPlayer } from "../../types/player";
import { ColumnsType } from "antd/es/table";
import { countPercentage, parseToFixedWithoutZero } from "../../utils/number";

const { Text } = Typography;

const createLabels = (intl: IntlShape) => ({
  tableNoData: intl.formatMessage({
    id: "Player.Table.NoData",
    defaultMessage: "The season is about to be started!",
  }),
});

const columns: ColumnsType<IPlayer> = [
  {
    title: "SEASON",
    // dataIndex: "companyName",
    sorter: true,
    showSorterTooltip: false,
    width: 50,
    defaultSortOrder: "ascend",
    fixed: "left",
    render: () => <Text>2020</Text>,
  },
  {
    title: "GP",
    dataIndex: "gp",
  },
  {
    title: "GS",
    dataIndex: "gs",
  },
  {
    title: "MPG",
    dataIndex: "mp",
  },
  {
    title: "PPG",
    dataIndex: "pts",
  },
  {
    title: "APG",
    dataIndex: "ast",
  },
  {
    title: "RPG",
    dataIndex: "reb",
  },
  {
    title: "SPG",
    dataIndex: "stl",
  },
  {
    title: "BPG",
    dataIndex: "blk",
  },
  {
    title: "TPG",
    dataIndex: "tov",
  },
  {
    title: "FGM",
    render: (player: IPlayer) => <Text>{player.two_pm + player.three_pm}</Text>,
  },
  {
    title: "FGA",
    render: (player: IPlayer) => <Text>{player.two_pa + player.three_pa}</Text>,
  },
  {
    title: "FG%",
    render: (player: IPlayer) => (
      <Text>
        {parseToFixedWithoutZero(
          countPercentage(
            player.two_pa + player.three_pa,
            player.two_pm + player.three_pm
          )
        )}
        %
      </Text>
    ),
  },
  {
    title: "3PM",
    dataIndex: "three_pm",
  },
  {
    title: "3PA",
    dataIndex: "three_pa",
  },
  {
    title: "3P%",
    render: (player: IPlayer) => (
      <Text>
        {parseToFixedWithoutZero(
          countPercentage(player.three_pa, player.three_pm)
        )}
        %
      </Text>
    ),
  },
  {
    title: "FTM",
    dataIndex: "ftm",
  },
  {
    title: "FTA",
    dataIndex: "fta",
  },
  {
    title: "FT%",
    render: (player: IPlayer) => (
      <Text>
        {parseToFixedWithoutZero(countPercentage(player.fta, player.ftm))}%
      </Text>
    ),
  },
  {
    title: "MIN",
    render: (player: IPlayer) => <Text>{player.mp * player.gp}</Text>,
  },
  {
    title: "PTS",
    render: (player: IPlayer) => <Text>{player.pts * player.gp}</Text>,
  },
  {
    title: "REB",
    render: (player: IPlayer) => <Text>{player.reb * player.gp}</Text>,
  },
  {
    title: "AST",
    render: (player: IPlayer) => <Text>{player.ast * player.gp}</Text>,
  },
  {
    title: "STL",
    render: (player: IPlayer) => <Text>{player.stl * player.gp}</Text>,
  },
  {
    title: "BLK",
    render: (player: IPlayer) => <Text>{player.blk * player.gp}</Text>,
  },
  {
    title: "TOV",
    render: (player: IPlayer) => <Text>{player.tov * player.gp}</Text>,
  },
  {
    title: "PF",
    render: (player: IPlayer) => <Text>{player.fouls * player.gp}</Text>,
  },
  {
    title: "+/-",
    dataIndex: "plus_minus",
  },
];

export { createLabels, columns };
