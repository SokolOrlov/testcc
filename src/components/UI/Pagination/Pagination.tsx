import React, { useState } from "react";
import { getPagesArray } from "../../../utils/pages";
import cl from "./Pagination.module.css";

const Pagination = ({ totalPages, page, onChange }: { totalPages: number; page: number; onChange: (arg0: any) => void; }) => {
//   console.log("Pagination");

  let pagesArray = getPagesArray(totalPages);
  return (
    <div className={cl.page__wrapper}>
      {pagesArray.map((p) => (
        <span onClick={() => onChange(p)} key={p} className={ page === p ? `${cl.page} ${cl.page__current}` : `${cl.page}` }>
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
