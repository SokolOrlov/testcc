import { create } from "zustand";

type Props = {
  show: boolean;
  gatewayId: number | null;
  gatewayType: string;
  objectId: number | null;
  add: (objectId: number, callback: () => void) => void;
  edit: (gatewayId: number, gatewayType: string, callback: () => void) => void;
  close: () => void;
  callback: () => void;
};

const GatewayModalStore = create<Props>((set) => ({
  show: false,
  gatewayId: null,
  gatewayType: "",
  objectId: null,
  add: (objectId: number, callback: () => void) =>set(() => {return { show: true, objectId, callback };}),
  edit: (gatewayId: number, gatewayType: string, callback: () => void) =>set(() => {return { show: true, gatewayId, gatewayType, callback };}),
  close: () =>set(() => {return { show: false };}),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  callback: () => {},
}));

export default GatewayModalStore;
