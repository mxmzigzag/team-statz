import { Flex, Typography } from "antd";

import { SettingsList } from "../components/SettingsList";

const { Title } = Typography;

export default function Settings() {
  return (
    <Flex vertical>
      <Title level={2} className="text-center mb-5">
        Settings
      </Title>
      <SettingsList />
    </Flex>
  );
}
