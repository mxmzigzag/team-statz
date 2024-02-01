import { useMemo } from "react";
import { useIntl } from "react-intl";
import { Doughnut, Line } from "react-chartjs-2";
import { Flex, Typography } from "antd";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

import { useDB } from "../../db";
import { IGame } from "../../types/game";
import { IPlayer, IPlayerStatistic } from "../../types/player";

import { MONTHS } from "../../utils/time";

// import PlayerCanvas from "../PlayerCanvas/playerCanvas";
// import TableSheet from "../TableSheet/tableSheet";

import blankPhoto from "../../assets/images/players/blank-silhouette.png";
import { BasketBallIcon } from "../../assets/icons/BasketBallIcon";
import { HeightIcon } from "../../assets/icons/HeightIcon";
import { JerseyIcon } from "../../assets/icons/JerseyIcon";
import { WeightIcon } from "../../assets/icons/WeightIcon";
import { createLabels } from "./Player.assets";
import { TableSheet } from "../TableSheet";
import { PlayerCanvas } from "../PlayerCanvas";

const { Title, Text } = Typography;

export const Player = () => {
  const { id } = useParams();
  const intl = useIntl();
  const { getOneById, getAll } = useDB();
  const games = getAll("games") as IGame[];
  const isLoading = false;
  const player = getOneById("players", id!) as IPlayer;

  const labels = useMemo(() => createLabels(intl), [intl]);

  const overallStats = useMemo(() => {
    if (!games?.length) {
      const statsInPlayedGames: Omit<IPlayerStatistic, "id" | "coordinates">[] =
        games
          .filter((game) => !game.pending)
          .map((game) => game.playersStats.filter((pl) => pl.id === id))[0]
          .filter(Boolean);

      if (statsInPlayedGames.length) {
        return statsInPlayedGames.reduce((acc, cur) => ({
          pts: acc.pts + cur.pts,
          oreb: acc.oreb + cur.oreb,
          dreb: acc.dreb + cur.dreb,
          ast: acc.ast + cur.ast,
          stl: acc.stl + cur.stl,
          blk: acc.blk + cur.blk,
          fouls: acc.fouls + cur.fouls,
          tov: acc.tov + cur.tov,
          plus_minus: acc.plus_minus + cur.plus_minus,
          two_pa: acc.two_pa + cur.two_pa,
          two_pm: acc.two_pm + cur.two_pm,
          three_pa: acc.three_pa + cur.three_pa,
          three_pm: acc.three_pm + cur.three_pm,
          fta: acc.fta + cur.fta,
          ftm: acc.ftm + cur.ftm,
          minutes: acc.minutes + cur.minutes,
        }));
      }
    }
  }, [games, id]);

  //@ts-ignore
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const buildBirthDateString = (date: string): string => {
    const [year, month, day] = date.split("-");
    return `${MONTHS[Number(month) - 1]} ${day}, ${year}`;
  };

  return (
    <Flex vertical>
      {isLoading ? (
        <BasketBallIcon width={120} height={120} />
      ) : player ? (
        <>
          <Flex
            align="flex-start"
            justify="space-between"
            className="w-full mb-6"
          >
            <Title level={2} className="hidden">
              {player.name}
            </Title>
            <Flex className="w-full max-w-[450px]">
              <img src={player.image_thumb || blankPhoto} alt={player.name} />
            </Flex>
            <Flex vertical className="w-full mx-4">
              <Title level={2} className="text-xl mb-6">
                {player.name}
              </Title>
              <Flex align="center" gap={2} className="mb-2">
                <HeightIcon width={18} height={18} />
                <Flex>
                  6'6", <WeightIcon width={22} height={22} />
                </Flex>
                <Flex>
                  216 {labels.lbs} | {player.position},
                </Flex>
                <JerseyIcon width={22} height={22} />#{player.number}
              </Flex>
              {player.birthDate && (
                <Text className="text-lg mb-1">
                  <Text strong>{labels.born}:</Text>{" "}
                  {buildBirthDateString(player.birthDate)} Brooklyn, NY
                </Text>
              )}
              {/* <p className={styles.general}>
                <strong>{t("Experience")}:</strong> 15 {t("years")}
              </p>
              <p className={styles.general}>
                <strong>{t("Seasons in team")}:</strong> 5
              </p>
              <ul className={styles.general}>
                <strong>{t("Best totals")}:</strong>

                <li>
                  <strong>{t("Points")}:</strong> 35.5 <span>(2020-2021)</span>
                </li>
                <li>
                  <strong>{t("Rebounds")}:</strong> 7.1 <span>(2018-2019)</span>
                </li>
                <li>
                  <strong>{t("Assists")}:</strong> 10.2 <span>(2015-2016)</span>
                </li>
                <li>
                  <strong>{t("Steals")}:</strong> 1.6 <span>(2016-2017)</span>
                </li>
                <li>
                  <strong>{t("Blocks")}:</strong> 0.2 <span>(2020-2021)</span>
                </li>
              </ul> */}
            </Flex>
            <Flex className="w-1/2">
              <PlayerCanvas playerId={player.id} games={games} />
              {/* <div className={styles.seasons}>
              <span>2019</span>
              <span className={styles.activeSeason}>2020</span>
              <span>2021</span>
            </div> */}
            </Flex>
          </Flex>
          <Flex vertical className="w-full">
            <Title level={5} className="text-center">
              {labels.statsOfCareer}
            </Title>
            <TableSheet player={player} />
            {overallStats ? (
              <Flex
                align="center"
                justify="space-between"
                className="bg-white rounded shadow p-6"
              >
                <Flex className="w-[60%] pr-4">
                  <Line
                    data={{
                      labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
                      datasets: [
                        {
                          label: labels.points,
                          data: [overallStats.pts, 115, 77, 50, 100, 105],
                          fill: false,
                          backgroundColor: "rgb(255, 99, 132)",
                          borderColor: "rgba(255, 99, 132, 0.2)",
                        },
                        {
                          label: labels.rebounds,
                          data: [
                            overallStats.oreb + overallStats.dreb,
                            20,
                            5,
                            25,
                            13,
                            0,
                          ],
                          fill: false,
                          backgroundColor: "rgb(203, 99, 255)",
                          borderColor: "rgba(203, 99, 255, 0.2)",
                        },
                        {
                          label: labels.assists,
                          data: [overallStats.ast, 25, 30, 50, 15, 20],
                          fill: false,
                          backgroundColor: "rgb(99, 255, 198)",
                          borderColor: "rgba(99, 255, 198, 0.2)",
                        },
                      ],
                    }}
                    options={{
                      scales: {
                        // @ts-ignore
                        yAxes: [
                          {
                            ticks: {
                              beginAtZero: true,
                            },
                          },
                        ],
                      },
                    }}
                  />
                </Flex>
                <Flex className="w-[30%] pl-4">
                  <Doughnut
                    data={{
                      labels: [
                        labels.twoPTperc,
                        labels.threePTperc,
                        labels.FTperc,
                      ],
                      datasets: [
                        {
                          label: "",
                          data: [
                            (overallStats.two_pm * 100) / overallStats.two_pa,
                            (overallStats.three_pm * 100) /
                              overallStats.three_pa,
                            (overallStats.ftm * 100) / overallStats.fta,
                          ],
                          backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                          ],
                          borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                          ],
                          borderWidth: 1,
                        },
                      ],
                    }}
                  />
                </Flex>
              </Flex>
            ) : null}
            <Flex vertical className="mt-8">
              <Title level={5} className="text-center">
                {labels.hightlights}
              </Title>
              <Flex align="center" justify="center">
                <YouTube
                  videoId="tQDxeuu6tcU"
                  opts={{
                    height: "390",
                    width: "640",
                    playerVars: {
                      // https://developers.google.com/youtube/player_parameters
                      autoplay: 0,
                    },
                  }}
                  onReady={_onReady}
                />
              </Flex>
            </Flex>
          </Flex>
        </>
      ) : (
        <Text>No data</Text>
      )}
    </Flex>
  );
};
