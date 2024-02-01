import { type FC, useMemo } from "react";

import { Table } from "antd";
import { useIntl } from "react-intl";
import { columns, createLabels } from "./TableSheet.assets";
import type { IPlayer } from "../../types/player";

interface ITableSheetProps {
  player: IPlayer;
}

export const TableSheet: FC<ITableSheetProps> = ({ player }) => {
  const intl = useIntl();

  const labels = useMemo(() => createLabels(intl), [intl]);

  return (
    <Table
      dataSource={[player]}
      columns={columns}
      scroll={{ x: "max-content" }}
      pagination={false}
    />
  );
};
