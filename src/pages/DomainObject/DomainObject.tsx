import React from "react";
import { Link, useParams } from "react-router-dom";

export const DomainObject = () => {
  let { id } = useParams();

  return (
    <>
      <div>DomainObject</div>
      <p>{id}</p>
      <Link to={`device/2`} state={{ name: "device1" }}>
        do device
      </Link>
    </>
  );
}; 
