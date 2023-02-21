import React from "react";
import ReactDOM from "react-dom";
import Store from "./Store";

import ToastList from "./ToastList";

const ToastContainer = () => {
  return ReactDOM.createPortal(<ToastList />, document.getElementById("toast"));
};

export default ToastContainer;

export const useToast = () => {
  return Store((state) => state.toast);
};
