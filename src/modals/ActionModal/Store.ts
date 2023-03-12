import { create } from "zustand";

type Props = {
  show: boolean;
  title: string;
  body: string;
  open: (title: string, body: string, action: () => Promise<unknown>) => void;
  close: () => void;
  action: () => Promise<unknown>;
};

const ActionModalStore = create<Props>((set) => ({
  show: false,
  title: "",
  body: "",
  open: (title: string, body: string,  action: () => Promise<unknown>) => set(() => {return { title, body, action, show: true };}),
  close: () => set(() => {return { show: false };}),
  action: null,
}));

export default ActionModalStore;
