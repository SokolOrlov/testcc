import { create } from "zustand";

type Props = {
  show: boolean;
  gatewayId: number | null;
  objectId: number | null;
  add: (objectId: number, callback: () => void) => void;
  edit: (gatewayId: number, callback: () => void) => void;
  close: () => void;
  callback: () => void;
};

const GatewayModalStore = create<Props>((set) => ({
  show: false,
  gatewayId: null,
  objectId: null,
  add: (objectId: number, callback: () => void) =>set(() => {return { show: true, objectId, callback };}),
  edit: (gatewayId: number, callback: () => void) =>set(() => {return { show: true, gatewayId, callback };}),
  close: () =>set(() => {return { show: false };}),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  callback: () => {},
}));

export default GatewayModalStore;
