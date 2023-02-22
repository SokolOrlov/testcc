import React from "react";
import sprite from "../../assets/images/sprite.svg";

type Props = {
  id: string;
};

export const Svg = ({ id }: Props) => {
  return (
    <svg>
      <use xlinkHref={`${sprite}#${id}`}></use>
    </svg>
  );
};