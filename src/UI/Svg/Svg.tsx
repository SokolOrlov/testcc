import React from "react";
import sprite from "../../assets/images/sprite.svg";

type Props = {
  id: string;
  style?: React.CSSProperties
};

export const Svg = ({ id, style }: Props) => {
  return (
    <svg style={style}>
      <use xlinkHref={`${sprite}#${id}`}></use>
    </svg>
  );
};