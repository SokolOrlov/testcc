import React from "react";
import { Ecl4 } from "./Ecl4/Ecl4";
import { Modem } from "./Modem/Modem";
import { MonitorUnit } from "./MonitorUnit/MonitorUnit";
import { Pmc } from "./Pmc/Pmc";
import { SmartHeat } from "./SmartHeat/SmartHeat";
import { Smd } from "./Smd/Smd";
import { Gateway } from "./types";
import styles from "./GatewayContainer.module.css";

type Props = {
  gateways: Gateway[];
};

export const GatewayContainer: React.FC<Props> = ({ gateways }) => {
  const gatewayCards = gateways.map((g) => makeGatewayCard(g));

  return <div className={styles.container}>{gatewayCards}</div>;
};

function makeGatewayCard(g: Gateway): React.ReactNode {
  switch (g.DeviceGatewayType.toLowerCase()) {
    case "modem":
      return <Modem key={g.Id} data={g} />;
    case "ecl4":
      return <Ecl4 key={g.Id} data={g} />;
    case "smd":
      return <Smd key={g.Id} data={g} />;
    case "pmc":
      return <Pmc key={g.Id} data={g} />;
    case "monitorunit":
      return <MonitorUnit key={g.Id} data={g} />;
    case "smartheat":
      return <SmartHeat key={g.Id} data={g} />;

    default:
      throw Error("Тип гейтвея не найден");
  }
}
