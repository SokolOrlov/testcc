import { GatewayContainer, PageHeader } from "components";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { ObjectInfo } from "./types";
import { useDevices } from "./useDevices";

import styles from './ObjectDevices.module.css'

export const ObjectDevices = () => {
  const { clientState, serverState } = useDevices();
  console.log("serverState", serverState);

  const objectInfo = useLoaderData() as ObjectInfo;
  console.log("objectInfo", objectInfo);
  return (
    <>
      <PageHeader icon="big_object" label={objectInfo.Name} />
      <div className={styles.wrapper}>
        <GatewayContainer gateways={serverState.gateways} />
      </div>
    </>
  );
};
