import React from "react";
import cl from "./Pagination.module.css";

type Props = {
  value?: number;
  isSelected?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  onSelect?: (arg: number) => void;
};
export const PageButton = ({ value = -1, isSelected = false, isFirst = false, isLast = false, onSelect }: Props) => {
  const btn: JSX.Element =
    value > 0 ? (
      <span onClick={() => onSelect(value)} key={value} className={`${cl.page} ${isSelected ? cl.page__current : ""} ${isFirst ? cl.page__first : ""} ${isLast ? cl.page__last : ""}`}>
        {value}
      </span>
    ) : (
      <span key={Math.random()} className={cl.page}>
        ...
      </span>
    );

  return btn;
};
