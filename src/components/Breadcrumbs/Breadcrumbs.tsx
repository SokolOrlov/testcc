import React, { useState } from "react";
import { useLocation, useMatches } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";
import Crumb from "./Crumb";

type Props = {};

type CrumbData = {
  label: string;
  icon: string;
};

const Breadcrumbs = ({}: Props) => {
const [crumbss, setCrumbs] = useState([]);

  const location = useLocation();
  const matches = useMatches();

  let crumbs = matches
    .filter((match) => match.data)
    .map((match, i) => {
      const isLast = i === matches.filter((match) => match.data).length - 1;
      return <Crumb 
        key={match.id} 
        // label={location.state ? location.state.name : (match.data as CrumbData).label} 
        label={isLast && i !== 0 ? location.state?.name : (match.data as CrumbData).label} 
        icon={(match.data as CrumbData).icon} 
        path={match.pathname} 
        last={isLast} />;
    });

  return <div className={styles.crumbs}>{crumbs}</div>;
};

export default Breadcrumbs;
