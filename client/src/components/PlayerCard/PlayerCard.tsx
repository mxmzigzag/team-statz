import { type FC, useMemo } from "react";
import { useIntl } from "react-intl";
import { Flex, Typography } from "antd";

import { IPlayer } from "../../types/player";
import { createLabels } from "./PlayerCard.assets";
import { badgeTextStyles } from "./PlayerCard.styles";

import basket from "../../assets/images/badges/basket.svg";
import block from "../../assets/images/badges/block.svg";
import thief from "../../assets/images/badges/thief.svg";

import assist from "../../assets/images/badges/assist.png";
import glassCleaner from "../../assets/images/badges/glass_cleaner.png";
import blankPhoto from "../../assets/images/players/blank-silhouette.png";

const { Text } = Typography;

interface IPlayerCardProps {
  player: IPlayer;
}

export const PlayerCard: FC<IPlayerCardProps> = ({ player }) => {
  const intl = useIntl();

  const labels = useMemo(() => createLabels(intl), [intl]);

  return (
    <Flex
      vertical
      className="text-center bg-white min-h-[375px] relativerounded p-4 shadow transition-all"
    >
      <Flex vertical align="center" className="absolute top-1 right-1">
        {player.bestInPts && (
          <Flex className="group relative">
            <img src={basket} alt={labels.bagePts} />
            <Text className={badgeTextStyles}>{labels.bagePts}</Text>
          </Flex>
        )}
        {player.bestInReb && (
          <Flex className="group relative">
            <img src={glassCleaner} alt={labels.bageReb} />
            <Text className={badgeTextStyles}>{labels.bageReb}</Text>
          </Flex>
        )}
        {player.bestInAst && (
          <Flex className="group relative">
            <img src={assist} alt={labels.bageAst} />
            <Text className={badgeTextStyles}>{labels.bageAst}</Text>
          </Flex>
        )}
        {player.bestInBlk && (
          <Flex className="group relative">
            <img src={block} alt={labels.bageBlk} />
            <Text className={badgeTextStyles}>{labels.bageBlk}</Text>
          </Flex>
        )}
        {player.bestInStl && (
          <Flex className="group relative">
            <img src={thief} alt={labels.bageStl} />
            <Text className={badgeTextStyles}>{labels.bageStl}</Text>
          </Flex>
        )}
      </Flex>

      <Flex className="mb-4">
        <img
          src={player.image_thumb ? player.image_thumb : blankPhoto}
          alt={player.name}
        />
      </Flex>
      <Text className="text-lg mb-4">
        {player.name}, {player.position}
      </Text>
      <Flex align="center" justify="center" wrap="wrap" gap={3}>
        <Text>
          {labels.ppg}: {player.pts ? player.pts : 0}
        </Text>
        <Text>
          {labels.rpg}: {player.reb ? player.reb : 0}
        </Text>
        <Text>
          {labels.apg}: {player.ast ? player.ast : 0}
        </Text>
        <Text>
          {labels.bpg}: {player.blk ? player.blk : 0}
        </Text>
        <Text>
          {labels.spg}: {player.stl ? player.stl : 0}
        </Text>
      </Flex>
    </Flex>
  );
};
