import React from "react";
import { useLoaderData } from "react-router-dom";
import { GatewayContainer, PageHeader } from "components";
import { GatewayModalContainer, useActionModal, useGatewayModal, useToast } from "modals";
import { Button } from "ui";
import { ObjectInfo } from "./types";
import { useDevices } from "./useDevices";

import styles from './ObjectDevices.module.css'
import { service } from "./service";

export const ObjectDevices = () => {
  const { clientState, serverState } = useDevices();
  const objectInfo = useLoaderData() as ObjectInfo;
  const gatewayModal = useGatewayModal();
  const actionModal = useActionModal();
  const toast = useToast();

  const addGateway = ()=>{
    gatewayModal.add(serverState.objectId, serverState.refetch);
  }

  const editGateway = (id: number, type: string)=>{
    gatewayModal.edit(id, type, serverState.refetch);
  }

  const deleteGateway =(id: number)=>{
    actionModal.open(
      "Удаление гейтвея", 
      "Вы уверены, что хотите удалить гейтвей?", 
      async ()=> {
        toast({label:"Удаление гейтвея", type:"info"});
        const res =  await service.deleteGateway(id);

        if (res.ok)        
          toast({label:"Гейтвей удален", type:"success"});
        else
          toast({label:res.message, type:"error"});   
                
        actionModal.close();
        serverState.refetch();    
      });
  };

  return (
    <>
      <PageHeader icon="big_object" label={objectInfo.Name} />
      <div>
        <Button icon="round_plus" label="ЗАРЕГИСТРИРОВАТЬ" onClick={addGateway}/>
      </div>
      <div className={styles.wrapper}>
        <GatewayContainer gateways={serverState.gateways} deleteGateway={deleteGateway} editGateway={editGateway} />
      </div>
      <GatewayModalContainer/>
    </>
  );
};
