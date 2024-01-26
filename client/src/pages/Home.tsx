import { Flex, Typography } from "antd";
import { Standings } from "../components/Standings";

const { Title } = Typography;

export default function Home() {
  return (
    <Flex vertical>
      <Title level={2} className="text-center mb-5">
        Standings
      </Title>
      <Standings />
    </Flex>
  );
}
