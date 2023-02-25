import React, { useEffect } from "react";
import ToastStore from "./Store";
import Toast from "./Toast";
import styles from "./Toast.module.css";

const remove = (id: number, remove: any) => {
  setTimeout(() => {
    remove(id);
  }, 5000);
};

const ToastList = () => {
  const m = ToastStore((state) => state.message);
  const l = ToastStore((state) => state.list);
  const r = ToastStore((state) => state.remove);

  useEffect(() => {
    if (m) {
      remove(m.id, r);
    }
  }, [m]);

  return (
    <div className={styles.container}>
      {l.map((item) => <Toast key={item.id} label={item.label} type={item.type} onClose={()=>r(item.id)}/>)}
    </div>
  );
};

export default ToastList;
