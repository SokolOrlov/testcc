import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import sprite from '../../assets/images/sprite.svg'
import Svg from "../Svg";

type Props = {
  title: string
  show: boolean
  children: React.ReactNode
  onClose: () => void
}

const Modal = ({title, children, show, onClose}: Props) => {
  
  const closeOnEscapeKeyDown = (e: { charCode: any; keyCode: any; }) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  if(!show) return null;

  return ReactDOM.createPortal( 
    <div className={styles.background}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h4>{title}</h4>
          <button>
            <Svg id="cross" onClick={onClose} />
          </button>
        </header>
        {children}
      </div>
    </div>
  ,document.getElementById('modal'))
  }

export default Modal;
