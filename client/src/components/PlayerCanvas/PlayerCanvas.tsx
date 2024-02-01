/* eslint-disable */
import { useRef, useState, useEffect, FC } from "react";
import { Flex } from "antd";
import type { IGame } from "../../types/game";
import type { ICoordinate } from "../../types/player";
import { MULTIPLIER_PLAYER, drawCourt, zones } from "../../utils/canvas";
import { parseToFixedWithoutZero } from "../../utils/number";

interface IPlayerCanvasProps {
  playerId: string;
  games: IGame[];
}

export const PlayerCanvas: FC<IPlayerCanvasProps> = ({ playerId, games }) => {
  const [coords, setCoords] = useState<ICoordinate[] | undefined>([]);
  const [canv, setCanv] = useState<HTMLCanvasElement | undefined>(undefined);
  const [canvBound, setCanvBound] = useState<DOMRect | undefined>(undefined);
  const [context, setContext] = useState<CanvasRenderingContext2D | undefined>(
    undefined
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const WIDTH = 374;
  const HEIGHT = 400;
  const DPI_WIDTH = WIDTH * 2;
  const DPI_HEIGHT = HEIGHT * 2;

  useEffect(() => {
    if (games.length) {
      const filteredGames = games
        .filter((game) => !game.pending)
        .map((game) => game.playersStats.find((pl) => pl.id === playerId))
        .filter(Boolean)
        .map((p) => p?.coordinates);

      if (filteredGames) {
        setCoords(
          filteredGames.reduce((prev, cur) => {
            if (prev && cur) {
              return prev.concat(cur);
            }
          }, [])
        );
      }
    }
  }, [games, playerId]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.width = WIDTH + "px";
      canvas.style.height = HEIGHT + "px";
      canvas.width = DPI_WIDTH;
      canvas.height = DPI_HEIGHT;
      var ctx = canvas.getContext("2d");
      if (ctx) {
        const zonesAttempts: number[] = Array(14).fill(0);
        const zonesMade: number[] = Array(14).fill(0);
        setCanv(canvas);
        setCanvBound(canvas.getBoundingClientRect());
        setContext(ctx);
        drawCourt(ctx, DPI_WIDTH, DPI_HEIGHT, MULTIPLIER_PLAYER, 10);

        coords &&
          coords.forEach((el) => {
            zones.forEach((zone, id) => {
              if (
                ctx &&
                ctx.isPointInPath(
                  zone.path,
                  el.x * MULTIPLIER_PLAYER,
                  el.y * MULTIPLIER_PLAYER
                )
              ) {
                zonesAttempts[id] += 1;
                zonesMade[id] += el.isMiss ? 0 : 1;
              }
            });
          });

        const zonesPerc = zonesMade.map((el, id) =>
          el ? parseToFixedWithoutZero((el * 100) / zonesAttempts[id]) : 0
        );

        drawZones(ctx, zonesAttempts, zonesPerc);
      }
    }
  }, [coords, DPI_WIDTH, DPI_HEIGHT]);

  const drawZones = (
    ctx: CanvasRenderingContext2D,
    zonesAttempts: number[],
    zonesPerc: number[]
  ) => {
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 9;
    zones.forEach((zone, id) => {
      ctx.beginPath();
      if (zonesAttempts[id]) {
        if (id < 5) {
          ctx.fillStyle =
            zonesPerc[id] > 30
              ? zonesPerc[id] > 35
                ? "rgb(49, 173, 49, 0.65)"
                : "rgba(255, 255, 0, 0.65)"
              : "rgba(255, 0, 0, 0.65)";
        } else if (id >= 5 && id < 13) {
          ctx.fillStyle =
            zonesPerc[id] > 35
              ? zonesPerc[id] > 40
                ? "rgb(49, 173, 49, 0.65)"
                : "rgba(255, 255, 0, 0.65)"
              : "rgba(255, 0, 0, 0.65)";
        } else {
          ctx.fillStyle =
            zonesPerc[id] > 50
              ? zonesPerc[id] > 70
                ? "rgb(49, 173, 49, 0.65)"
                : "rgba(255, 255, 0, 0.65)"
              : "rgba(255, 0, 0, 0.65)";
        }
      } else {
        ctx.fillStyle = "rgb(50, 50, 50, 0.5)";
      }
      ctx.stroke(zone.path);
      ctx.fill(zone.path);

      ctx.font = "48px serif";
      ctx.fillStyle = "#000000";
      ctx.fillText(
        `${zonesAttempts[id] ? `${zonesPerc[id]}%` : "--"}`,
        zone.tPoint.x,
        zone.tPoint.y
      );
    });
  };

  return (
    <Flex vertical>
      <canvas
        ref={canvasRef}
        className="bg-zBasketballCourt border border-black rotate-90"
      />
    </Flex>
  );
};
