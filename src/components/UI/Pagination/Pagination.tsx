import React from "react"; 
import cl from "./Pagination.module.css";

type PaginationProps = {
  pageNumber: number;
  totalCount: number;
  pageSize: number;
  onChange: (arg0: any) => void;
};

const getPageCount = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit)
}

const getPagesArray = (totalPages: number) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
      result.push(i + 1)
  }
  return result;
}

const Pagination = ({pageNumber, totalCount, pageSize, onChange,}: PaginationProps) => {
  //console.log("Pagination");

  const totalPages = getPageCount(totalCount, pageSize);
  let pagesArray = getPagesArray(totalPages);

  // console.log(pageNumber, totalCount, pageSize, totalPages);

  if (totalCount == undefined || null) {
    return null;
  }

  const makeButton = (val: number):JSX.Element => {
    if (val > 0)
      return (
        <span
          onClick={() => onChange(val)}
          key={val}
          className={pageNumber === val ? `${cl.page} ${cl.page__current}` : `${cl.page}`}>
          {val}
        </span>
      );
    else
      return (
        <span key={Math.random()} className={`${cl.page}`}>
          ...
        </span>
      );
  };

  if (totalPages > 7) {
    const pages = [makeButton(1)];

    // |_1_|_2_|_3_|_4_|_5_|_..._|_n_|
    if (pageNumber < 5) {
      let asd = pagesArray.filter((p) => p > 1 && p < 6).map((p) => makeButton(p));
      pages.push(...asd);
      pages.push(makeButton(-1));
      pages.push(makeButton(totalPages));
    }

    // |_1_|_..._|_4_|_5_|_6_|_..._|_n_|
    if (pageNumber > 4 && totalPages - pageNumber > 3) {
      pages.push(makeButton(-1));
      let asd = pagesArray.filter((p) => p > pageNumber - 2 && p < pageNumber + 2).map((p) => makeButton(p));
      pages.push(...asd);
      pages.push(makeButton(-1));
      pages.push(makeButton(totalPages));
    }

    // |_1_|_..._|_9_|_10_|_11_|_12_|_13_|
    if (totalPages - pageNumber < 4) {
      let asd = pagesArray.filter((p) => p > totalPages-5).map((p) => makeButton(p));
      pages.push(makeButton(-1));
      pages.push(...asd);
    }

    return <div className={cl.page__wrapper}>{pages}</div>;
  } else
    return (
      <div className={cl.page__wrapper}>
        {pagesArray.map((p) => makeButton(p))}
      </div>
    );
};

export default Pagination;
