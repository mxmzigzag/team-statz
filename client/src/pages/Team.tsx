import { Flex, Typography } from "antd";
import { TeamInfo } from "../components/TeamInfo";
import { TeamPlayers } from "../components/TeamPlayers";

import { useDB } from "../db";
import type { ISettings } from "../types/settings";

const { Title } = Typography;

export default function Team() {
  const { getFirst } = useDB();
  const settings = getFirst("settings") as ISettings;

  return (
    <Flex vertical>
      <Title level={2} className="text-center mb-5">
        {settings?.teamName}
      </Title>
      <TeamInfo />
      <TeamPlayers />
    </Flex>
  );
}
