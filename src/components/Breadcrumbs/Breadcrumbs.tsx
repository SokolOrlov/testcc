import React from "react";
import styles from "./Breadcrumbs.module.css";
import Crumb from "./Crumb";

type Props = {
  path: string;
  state: any
};

class qwe {
  allobjects: { label: "ГЛАВНАЯ"; icon: "home" };
  object: {label:"ОБЪЕКТ"}
}

const Breadcrumbs = ({ path }: Props) => {
  const crumbs = path.split("/").filter((c) => c != "");
  // console.log(crumbs);
  
  return (
    <div className={styles.crumbs}>
      {}
      <Crumb label="ГЛАВНАЯ" icon="home" path={path} />
    </div>
  );
};

export default Breadcrumbs;
