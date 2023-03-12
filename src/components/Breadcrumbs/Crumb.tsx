import React from "react";
import { Link } from "react-router-dom"; 
import { Svg } from "ui";
import styles from "./Breadcrumbs.module.css";

type Props = {
  label: string;
  icon: string;
  path: string;
  last?: boolean;
};

const Crumb = ({ label, icon, path, last }: Props) => {
  return (
    <div className={styles.crumb}>
      <Svg id={icon} />
      {last ? <span className={styles.label}>{label}</span> : <Link to={path}>{label}</Link>}
      <Svg id="breadcrumbs" />
    </div>
  );
};

export default Crumb;
