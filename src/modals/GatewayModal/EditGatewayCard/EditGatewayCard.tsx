import React from "react";
import { Button } from "ui";
import { useEditGatewayCard } from "./useEditGatewayCard";
import styles from "../GatewayModal.module.css";
import { DigitalHeatCard, Ecl4Card, ModemCard, MonitorUnitCard, PmcCard, SmdCard } from "./Cards"; 

const makeCard = (type: string, dispatch: (action: {type: string, data: any})=>void) => {
  switch (type?.toLowerCase()) {
    case "modem": return <ModemCard dispatch={dispatch}/>;
    case "ecl4": return <Ecl4Card dispatch={dispatch}/>;
    case "smd": return <SmdCard dispatch={dispatch}/>;
    case "pmc": return <PmcCard dispatch={dispatch}/>;
    case "monitorunit": return <MonitorUnitCard dispatch={dispatch}/>
    case "smartheat": return <DigitalHeatCard dispatch={dispatch}/>;

    default:
      return null;
  }
};

const EditGatewayCard = () => {
  const {clientState, serverState} = useEditGatewayCard();

  const saveGateway = () => {
    serverState.saveGateway(clientState.state);
  };

  return (
    <div {...{ disabled: serverState.loading }} className={styles.body}>
      {makeCard(serverState.data, clientState.dispatch)}

      <div className={styles.footer}>
        <Button label="ОТМЕНА" type="danger" onClick={clientState.close} />
        <Button label="СОХРАНИТЬ" type="success" icon="round_ok" disabled={clientState.hasError} onClick={saveGateway} />
      </div>
    </div>
  );
};

export default EditGatewayCard;
