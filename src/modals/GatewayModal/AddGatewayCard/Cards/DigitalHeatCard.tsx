import React, { useState } from "react";
import { Button } from "ui";

type Props = {
  dispatch: (action: { type: string; data: any }) => void;
};


export const DigitalHeatCard = ({ dispatch }: Props) => {
    const [data, setData] = useState();
  return (
    <>
      <Button label="ВЫБРАТЬ МОНТАЖНУЮ КАРТУ" icon="download" onClick={null} />
    </>
  );
};
