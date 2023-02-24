import { create } from "zustand";

type Props = {
  show: boolean;
  title: string;
  body: string;
  open: (title: string, body: string, callback: () => any) => void;
  close: () => void;
  action: () => any;
};

const ActionModalStore = create<Props>((set) => ({
  show: false,
  title: "",
  body: "",
  open: (title: string, body: string,  callback: () => any) => set(() => {return { title, body, action: callback, show: true };}),
  close: () => set(() => {return { show: false };}),
  action: () => {},
}));

export default ActionModalStore;
