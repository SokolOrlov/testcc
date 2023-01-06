import React from "react";
import { getPageCount, getPagesArray } from "../../../utils/pages";
import cl from "./Pagination.module.css";

type PaginationProps = {
  pageNumber: number
  totalCount: number
  countOnPage: number
  onChange: (arg0: any) => void
}

const Pagination = ({ pageNumber, totalCount, countOnPage, onChange }: PaginationProps) => {
//console.log("Pagination");
console.log(pageNumber, totalCount, countOnPage);

  const total = getPageCount(totalCount, countOnPage)
  let pagesArray = getPagesArray(total);
  return (
    <div className={cl.page__wrapper}>
      {pagesArray.map((p) => (
        <span onClick={() => onChange(p)} key={p} className={ pageNumber === p ? `${cl.page} ${cl.page__current}` : `${cl.page}` }>
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
