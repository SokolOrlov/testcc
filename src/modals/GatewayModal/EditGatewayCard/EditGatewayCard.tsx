import React from "react";
import { Button } from "ui";
import { useEditGatewayCard } from "./useEditGatewayCard";
import styles from "../GatewayModal.module.css";
import { DigitalHeatCard, Ecl4Card, ModemCard, MonitorUnitCard, PmcCard, SmdCard } from "./Cards";

const makeCard = (type: string, data: any, dispatch: (action: { type: string; data: any }) => void) => {
  switch (type?.toLowerCase()) {
    case "modem":
      return <ModemCard data={data} dispatch={dispatch} />;
    case "ecl4":
      return <Ecl4Card data={data} dispatch={dispatch} />;
    case "smd":
      return <SmdCard data={data} dispatch={dispatch} />;
    case "pmc":
      return <PmcCard data={data} dispatch={dispatch} />;
    case "monitorunit":
      return <MonitorUnitCard data={data} dispatch={dispatch} />;
    case "smartheat":
      return <DigitalHeatCard dispatch={dispatch} />;

    default:
      return null;
  }
};

const EditGatewayCard = () => {
  const { clientState, serverState } = useEditGatewayCard();

  const saveGateway = () => {
    serverState.saveGateway(clientState.state);
  };

  console.log("loading",serverState.loading);
  console.log("data",serverState.data);
  

  return (
    <div {...{ disabled: serverState.loading }} className={styles.body}>
      { !serverState.loading && makeCard(clientState.gatewayType, serverState.data, clientState.dispatch)}

      <div className={styles.footer}>
        <Button label="ОТМЕНА" type="danger" onClick={clientState.close} />
        <Button label="СОХРАНИТЬ" type="success" icon="round_ok" disabled={clientState.hasError} onClick={saveGateway} />
      </div>
    </div>
  );
};

export default EditGatewayCard;
