import React, { useRef } from "react";
import { useLocation, useMatches } from "react-router-dom";
import Crumb from "./Crumb";
import styles from "./Breadcrumbs.module.css"; 

type Props = {};

type CrumbData = {
  label: string;
  icon: string;
};

export const Breadcrumbs = ({}: Props) => {
  // console.log("Breadcrumbs");

  const {current: labels} = useRef(new Map<string, string>());

  const location = useLocation();
  const matches = useMatches();
  const last = matches.slice(-1)[0];

  if (location.state) {
    labels.set(last.id, location.state.name);
  }

  // console.log(labels.current);

  let crumbs = matches
    .filter((match) => match.data)
    .map((match, i) => {
      return <Crumb 
        key={match.id} 
        label={labels.has(match.id) ? labels.get(match.id) : (match.data as CrumbData).label} 
        icon={(match.data as CrumbData).icon} 
        path={match.pathname} 
        last={last.id === match.id} />;
    });

  return <div className={styles.crumbs}>{crumbs}</div>;
};
