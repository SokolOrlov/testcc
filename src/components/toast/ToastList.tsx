import React, { useEffect } from "react"; 
import useStore from "./Store";
import styles from "./Toast.module.css";

const remove = (id: number, remove: any) => {
  setTimeout(() => {
    remove(id);
  }, 3000);
};

const ToastList = () => {
  const m = useStore((state) => state.message);
  const l = useStore((state) => state.list);
  const r = useStore((state) => state.remove);

  useEffect(() => {
    if (m) {
      remove(m.id, r);
    }
  }, [m]);

  return (
    <div className={styles.container}>
      {l.map((item) => {
        return (
          <div key={item.id} className={styles.toast}>
            <p>{item.label}</p>
            <br />
            <p>{item.type}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ToastList;
