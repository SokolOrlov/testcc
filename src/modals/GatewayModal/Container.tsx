/* eslint-disable react/display-name */
import React from "react";
import ReactDOM from "react-dom";
import GatewayModal from "./GatewayModal";
import GatewayModalStore from "./Store";

export const GatewayModalContainer = React.memo(() => {
  return ReactDOM.createPortal(<GatewayModal />, document.getElementById("modal"));
});

type Props = {
  add: (obcjectId: number, callback: () => void) => void;
  edit: (gatewayId: number, gatewayType: string, callback: () => void) => void;
  close: () => void;
  callback: () => void;
};

export const useGatewayModal = (): Props => {
  return GatewayModalStore((state) => state);
};
