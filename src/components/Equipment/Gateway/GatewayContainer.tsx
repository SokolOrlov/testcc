import React from "react";
import { Gateway } from "./types";
import styles from "./GatewayContainer.module.css";
import { Ecl4, Modem, MonitorUnit, Pmc, SmartHeat, Smd } from ".";

type Props = {
  gateways: Gateway[];
  deleteGateway: (id: number)=>void
  editGateway: (id: number, type: string)=>void
};

export const GatewayContainer: React.FC<Props> = ({ gateways, deleteGateway, editGateway }) => {

  const gatewayCards = gateways.map((g) => makeGatewayCard(g, deleteGateway, editGateway));

  return <div className={styles.container}>{gatewayCards}</div>;
};

function makeGatewayCard(g: Gateway, del: (id: number)=>void, edit: (id: number, type: string)=>void): React.ReactNode {
  switch (g.DeviceGatewayType.toLowerCase()) {
    case "modem": return <Modem key={g.Id} data={g} onDelete={del} onEdit={edit} />;
    case "ecl4": return <Ecl4 key={g.Id} data={g} onDelete={del} onEdit={edit}/>;
    case "smd": return <Smd key={g.Id} data={g} onDelete={del} onEdit={edit}/>;
    case "pmc": return <Pmc key={g.Id} data={g} onDelete={del} onEdit={edit}/>;
    case "monitorunit": return <MonitorUnit key={g.Id} data={g} onDelete={del} onEdit={edit}/>;
    case "smartheat": return <SmartHeat key={g.Id} data={g} onDelete={del} onEdit={edit}/>;

    default:
      throw Error("Тип гейтвея не найден");
  }
}
