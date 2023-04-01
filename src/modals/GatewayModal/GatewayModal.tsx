import React from "react";
import { Modal } from "ui";
import { useGatewayModal } from "./useGatewayModal";
import AddGatewayCard from "./AddGatewayCard/AddGatewayCard";
import EditGatewayCard from "./EditGatewayCard/EditGatewayCard";

const GatewayModal = () => {
  const { clientState, serverState } = useGatewayModal();

  return (
    <Modal title={clientState.title} onClose={clientState.close} show={clientState.show}>
      {clientState.isAdd ? <AddGatewayCard/> : <EditGatewayCard/>}
    </Modal>
  );
};

export default GatewayModal;
