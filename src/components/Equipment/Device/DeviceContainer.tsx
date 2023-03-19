import React from "react";
import { Cool } from "./Cool/Cool";
import { Heat } from "./Heat/Heat";
import { Device } from "./types";
import { Vlt } from "./Vlt/Vlt";

import styles from "./DeviceContainer.module.css";

type Props = {
  devices: Device[];
  visible: boolean
};

export const DeviceContainer: React.FC<Props> = ({ devices, visible }) => {
  const deviceCards = devices.map((g) => makeDeviceCard(g));

  return <div style={{display: visible? "block" : "none"}} className={styles.container}>{deviceCards}</div>;
};

function makeDeviceCard(d: Device): React.ReactNode {
  switch (d.DeviceGroupType.toLowerCase()) {
    case "cool":
      return <Cool key={d.Id} data={d} />;
    case "heat":
      return <Heat key={d.Id} data={d} />;
    case "vlt":
      return <Vlt key={d.Id} data={d} />;

    default:
      throw Error("Тип контроллера не найден");
  }
}
