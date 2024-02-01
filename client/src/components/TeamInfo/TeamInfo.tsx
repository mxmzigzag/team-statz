import { useMemo } from "react";
import { useIntl } from "react-intl";
import { Flex, Typography } from "antd";

import { useDB } from "../../db";
import type { IGame } from "../../types/game";
import type { IPlayer } from "../../types/player";
import type { ISettings } from "../../types/settings";
import { createLabels } from "./TeamInfo.assets";

import BlankLogo from "../../assets/images/logo-blank.png";

const { Text } = Typography;

export const TeamInfo = () => {
  const intl = useIntl();
  const { getAll, getFirst } = useDB();
  const settings = getFirst("settings") as ISettings;
  const players = getAll("players") as IPlayer[];
  const games = getAll("games") as IGame[];

  const labels = useMemo(() => createLabels(intl), [intl]);

  const actualGames = games.filter((game) => !game.pending);
  const arrTotals: number[] = Array(4).fill(0);
  const properties: string[] = ["REB", "AST", "BLK", "STL"];
  let offensiveRating: number = 0;
  let defensiveRating: number = 0;
  let winsCount: number = 0;
  players.forEach((el) => {
    arrTotals[0] += el.reb;
    arrTotals[1] += el.ast;
    arrTotals[2] += el.blk;
    arrTotals[3] += el.stl;
  });
  actualGames.length &&
    actualGames.forEach((el) => {
      if (el.ourScore > el.enemyScore) winsCount++;
      offensiveRating += el.ourScore / actualGames.length;
      defensiveRating += el.enemyScore / actualGames.length;
    });

  return (
    <Flex className="w-full p-6 mb-7 shadow rounded bg-white">
      <Flex className="w-[150px] pr-6 text-center">
        <img src={settings.teamLogo || BlankLogo} alt="Team logo" />
      </Flex>
      <Flex align="center" justify="space-between" className="w-full pl-12">
        <Text className="text-lg font-medium">
          {labels.gp}: {actualGames.length}
        </Text>
        <Text className="text-lg font-medium">
          {labels.w}/{labels.l}: {winsCount}/{actualGames.length - winsCount}
        </Text>
        <Text className="text-lg font-medium">
          {labels.oRtg}: {offensiveRating}
        </Text>
        <Text className="text-lg font-medium">
          {labels.dRtg}: {defensiveRating}
        </Text>
        {arrTotals.map((el, i) => (
          <Text key={`${properties[i]}-${el}`} className="text-lg font-medium">
            {properties[i]}:{actualGames.length ? el / actualGames.length : 0}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};
