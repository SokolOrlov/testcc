import React from "react";
import ReactDOM from "react-dom";
import { ActionModal } from "./ActionModal";
import ActionModalStore from "./Store";

export const ActionModalContainer = () => {
  return ReactDOM.createPortal(<ActionModal />, document.getElementById("modal"));
};

type Props = {
  title: string;
  body: string;
  open: (title: string, body: string, callback: () => void) => void;
  close: () => void;
  action: () => any;
};

export const useActionModal = (): Props => {
  return ActionModalStore((state) => state);
};
