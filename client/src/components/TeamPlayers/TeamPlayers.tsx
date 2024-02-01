import { Col, Row } from "antd";
import { NavLink } from "react-router-dom";

import { PlayerCard } from "../PlayerCard/PlayerCard";
import { useDB } from "../../db";
import type { IPlayer } from "../../types/player";

export const TeamPlayers = () => {
  const { getAll } = useDB();
  const players = getAll("players") as IPlayer[];

  return (
    <Row gutter={[15, 15]}>
      {players.map((player) => (
        <Col key={player.id} span={6}>
          <NavLink
            to={`/player/${player.id}`}
            className="decoration-none color-zText"
          >
            <PlayerCard player={player} />
          </NavLink>
        </Col>
      ))}
    </Row>
  );
};
