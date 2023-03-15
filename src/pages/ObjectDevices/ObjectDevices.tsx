import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useDevices } from "./useDevices";

export const ObjectDevices = () => {
  const {clientState, serverState} = useDevices();
  console.log("serverState",serverState);
  

  const albums = useLoaderData();
  console.log("objectInfo",albums);
  return (
    <>
      <div>DomainObject</div>
      {/* <p>{id}</p> */}
      <Link to={`device/2`} state={{ name: "device1" }}>
        do device
      </Link>
    </>
  );
}; 
