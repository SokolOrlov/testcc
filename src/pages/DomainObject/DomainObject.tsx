import React from "react";
import { useParams } from "react-router-dom";


const DomainObject=()=>{
    let { id } = useParams();
    return(
        <>
        <div>DomainObject</div>
        <p>{id}</p>
        </>
    )
}

export default DomainObject;