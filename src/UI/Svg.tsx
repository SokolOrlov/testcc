import React from "react";
import sprite from "../assets/images/sprite.svg";

type Props = {
  id: string;
  onClick?: () => void;
};

const Svg = ({ id, onClick }: Props) => {
  return (
    <svg onClick={onClick}>
      <use xlinkHref={`${sprite}#${id}`}></use>
    </svg>
  );
};

export default Svg;
