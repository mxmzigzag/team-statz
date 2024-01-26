import { prepareStandings } from "./Standings.assets";
import { Col, Flex, Row, Typography } from "antd";
import { standings } from "../../api/_mocks/standings.mock";
import { MiniLoader } from "../Loader";
import { NoDataIcon } from "../../assets/icons/NoDataIcon";
const { Text } = Typography;
// import { useTranslation } from "react-i18next";

// import { Team } from "../../app/app.types";

// import { useOutsideClickHandler } from "../../hooks/outsideClick.hook";

// import { AppContext } from "../../app/app.provider";
// import { SessionContext } from "../../session/session.provider";

// import MiniLoader from "../Loader/miniLoader";

// import styles from "./table.module.css";

export const Standings = () => {
  // const { isAuthenticated } = useContext(SessionContext);
  // const {
  //   settings: { playoffsBracketBuilt },
  //   getTeams,
  //   editTeamInfo,
  //   teams,
  //   loading,
  // } = useContext(AppContext);
  // const { t } = useTranslation();

  const loading = false; // TODO: change
  // useEffect(() => {
  //   getTeams();
  // }, [getTeams]);

  // useEffect(() => {
  //   if (isAuthenticated && closeEditableCell && editableTeam) {
  //     editTeamInfo(editableTeam);
  //     setEditableTeam(undefined);
  //   }
  // }, [closeEditableCell, editTeamInfo, editableTeam, isAuthenticated]);

  // const handleEditRow = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEditableTeam((prev) => {
  //     if (prev) return { ...prev, [e.target.name]: Number(e.target.value) };
  //     return prev;
  //   });
  // };

  return (
    <Flex justify="center">
      {standings ? (
        Object.entries(prepareStandings(standings)).map(
          ([conference, teams]) => (
            <Flex vertical align="center" className="mx-8 w-[400px]">
              {teams.length > 1 ? (
                <Text className="text-lg pb-4 capitalize">{conference}</Text>
              ) : null}
              <div className="bg-white rounded-lg drop-shadow w-full mb-6">
                <Row className="px-2.5 py-2 border-b border-b-black">
                  <Col span={17}>
                    <Text>Team</Text>
                  </Col>
                  <Col span={2}>
                    <Text>W</Text>
                  </Col>
                  <Col span={2}>
                    <Text>L</Text>
                  </Col>
                  <Col span={3}>
                    <Text>%W</Text>
                  </Col>
                </Row>

                {loading ? (
                  <MiniLoader />
                ) : (
                  teams.map((team) => (
                    <Row
                      key={team.team.name}
                      className="px-2.5 py-2 border-b last:border-b-0 border-b-black hover:bg-zLightGray"
                    >
                      <Col span={2}>
                        <Text>{team.conference.rank}</Text>
                      </Col>
                      <Col span={15}>
                        <Text>{team.team.name}</Text>
                      </Col>
                      <Col span={2}>
                        <Text>{team.conference.win}</Text>
                      </Col>
                      <Col span={2}>
                        <Text>{team.conference.loss}</Text>
                      </Col>
                      <Col span={3}>
                        <Text>{team.win.percentage}</Text>
                      </Col>
                    </Row>
                  ))
                )}
              </div>
            </Flex>
          )
        )
      ) : (
        <Flex
          vertical
          align="center"
          className="bg-white rounded-lg drop-shadow p-4"
        >
          <NoDataIcon width={100} height={100} />
          <Text className="my-1">Data problem</Text>
          <Text>We are awared and working on solution!</Text>
        </Flex>
      )}
    </Flex>
  );
};
