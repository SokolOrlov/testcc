import React from "react";
import { useLocation, useMatches } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";
import Crumb from "./Crumb";

type Props = {};

type CrumbData = {
  label: string;
  icon: string;
};

const Breadcrumbs = ({}: Props) => {
  const location = useLocation();
  console.log(location);

  const matches = useMatches();
  console.log(matches);
  let crumbs = matches
    .filter((match) => match.data)
    .map((match,i) => 
      <Crumb 
        key={match.id} 
        label={(match.data as CrumbData).label} 
        icon={(match.data as CrumbData).icon}
        path={match.pathname}
        last={i===matches.filter((match) => match.data).length-1} />);

  return <div className={styles.crumbs}>{crumbs}</div>;
};

export default Breadcrumbs;
