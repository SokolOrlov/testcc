import React from "react";
import sprite from "../../assets/images/sprite.svg";

type Props = {
  id: string;
  style?: React.CSSProperties
  className?: string
};

export const Svg = ({ id, style, className }: Props) => {
  return (
    <svg style={style} className={className}>
      <use xlinkHref={`${sprite}#${id}`}></use>
    </svg>
  );
};