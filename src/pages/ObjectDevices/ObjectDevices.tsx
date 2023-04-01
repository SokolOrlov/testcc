import React from "react";
import { useLoaderData } from "react-router-dom";
import { GatewayContainer, PageHeader } from "components";
import { GatewayModalContainer, useGatewayModal } from "modals";
import { Button } from "ui";
import { ObjectInfo } from "./types";
import { useDevices } from "./useDevices";

import styles from './ObjectDevices.module.css'

export const ObjectDevices = () => {
  const { clientState, serverState } = useDevices();

  const objectInfo = useLoaderData() as ObjectInfo;

  const gatewayModal = useGatewayModal();

  // console.log("serverState", serverState);
  // console.log("objectInfo", objectInfo);

  const addGateway = ()=>{
    gatewayModal.add(serverState.objectId, ()=> serverState.refetch());
  }

  return (
    <>
      <PageHeader icon="big_object" label={objectInfo.Name} />
      <div>
        <Button icon="round_plus" label="ЗАРЕГИСТРИРОВАТЬ" onClick={addGateway}/>
      </div>
      <div className={styles.wrapper}>
        <GatewayContainer gateways={serverState.gateways} refetch={serverState.refetch} />
      </div>
      <GatewayModalContainer/>
    </>
  );
};
