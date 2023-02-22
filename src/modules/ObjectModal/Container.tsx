import React from "react";
import ReactDOM from "react-dom";
import ObjectModal from "./ObjectModal";
import ObjectModalStore from "./Store";

export const ObjectModalContainer = React.memo(() => {
  return ReactDOM.createPortal(<ObjectModal />, document.getElementById("modal"));
});

type Props = {
  add: (callback: () => void) => void;
  edit: (id: number) => void;
  close: () => void;
  callback: () => void;
};

export const useObjectsModal = (): Props => {
  return ObjectModalStore((state) => state);
};
