import React from "react"; 
import {PageButton} from "./PageButton";
import cl from "./Pagination.module.css";

type Props = {
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

export const Pagination = ({pageNumber = 1, totalCount = 0, pageSize = 0, onChange,}: Props) => {
  //console.log("Pagination");

  const totalPages = getPageCount(totalCount, pageSize);
  let pagesArray = getPagesArray(totalPages);

  if (totalPages > 7) {
    const pages = [<PageButton key={1} isSelected={ pageNumber===1} isFirst value={1} onSelect={onChange}/>];

    // |_1_|_2_|_3_|_4_|_5_|_..._|_n_|
    if (pageNumber < 5) {
      let asd = pagesArray.filter((p) => p > 1 && p < 6).map((p) => 
        <PageButton key={p} isSelected={ pageNumber===p} value={p} onSelect={onChange}/>);
      pages.push(...asd);
      pages.push(<PageButton key={Math.random()}/>);
      pages.push(<PageButton key={totalPages} isLast value={totalPages} onSelect={onChange}/>);
    }

    // |_1_|_..._|_4_|_5_|_6_|_..._|_n_|
    if (pageNumber > 4 && totalPages - pageNumber > 3) {
      pages.push(<PageButton key={Math.random()}/>);
      let asd = pagesArray.filter((p) => p > pageNumber - 2 && p < pageNumber + 2).map((p) => 
        <PageButton key={p} isSelected={ pageNumber===p} value={p} onSelect={onChange}/>);
      pages.push(...asd);
      pages.push(<PageButton key={Math.random()}/>);
      pages.push(<PageButton key={totalPages} value={totalPages} isLast onSelect={onChange}/>);
    }

    // |_1_|_..._|_9_|_10_|_11_|_12_|_13_|
    if (totalPages - pageNumber < 4) {
      let asd = pagesArray.filter((p) => p > totalPages-5).map((p,i) => 
        <PageButton key={p} isSelected={ pageNumber===p} isLast={p==totalPages} value={p} onSelect={onChange}/>);
      pages.push(<PageButton key={Math.random()}/>);
      pages.push(...asd);
    }

    return <div className={cl.pagination}>{pages}</div>;
  } else
    return (
      <div className={cl.pagination}>
        {pagesArray.map((p,i) => <PageButton key={p} isSelected={ pageNumber===p} isFirst={i==0} isLast={p==totalPages} value={p} onSelect={onChange}/>)}
      </div>
    );
};
