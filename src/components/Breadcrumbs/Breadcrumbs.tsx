import React from "react";
import { useLocation, useMatches } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";
import Crumb from "./Crumb";

type Props = {
};

class qwe {
  allobjects: { label: "ГЛАВНАЯ"; icon: "home" };
  object: {label:"ОБЪЕКТ"}
}

const Breadcrumbs = ({ }: Props) => {
  const location = useLocation();
  console.log(location);

  const matches = useMatches();
  console.log(matches);
  // let crumbs = matches
  //   // first get rid of any matches that don't have handle and crumb
  //   .filter((match) => Boolean(match.handle?.crumb))
  //   // now map them into an array of elements, passing the loader
  //   // data to each one
  //   .map((match) => match.handle.crumb(match.data));
  
  return (
    <div className={styles.crumbs}>
      {}
      <Crumb label="ГЛАВНАЯ" icon="home" path={"path"} />
    </div>
  );
};

export default Breadcrumbs;
