import { create } from "zustand";

type Props = {
  show: boolean;
  id: number;
  add: (callback: () => void) => void;
  edit: (id: number) => void;
  close: () => void;
  callback: () => void;
};

const ObjectModalStore = create<Props>((set) => ({
  show: false,
  id: null,
  test: false,
  add: (callback: () => void) =>
    set(() => {
      return { show: true, id: null, callback: callback };
    }),
  edit: (id: number) =>
    set(() => {
      return { show: true, id: id };
    }),
  close: () =>
    set(() => {
      return { show: false };
    }),
  callback: () => {},
}));

export default ObjectModalStore;
