import React from "react";
import { TextInput } from "ui";

type EclData = {
  ActivationCode: string;
  CreatedDate: string;
  FirmwareStatus?: any;
  Model: string;
  SerialNumber: string;
  SoftwareVersion: string;
};

type Props = {
  data: EclData;
  dispatch: (action: { type: string; data: any }) => void;
};

const defaultValues = {
  ActivationCode: "",
  CreatedDate: "",
  Model: "",
  SerialNumber: "",
  SoftwareVersion: "",
};

export const Ecl4Card = ({ data = defaultValues, dispatch }: Props) => {
  return (
    <>
      <TextInput disabled label="МОДЕЛЬ" value={data.Model} />
      <TextInput disabled label="СЕРИЙНЫЙ НОМЕР" value={data.SerialNumber} />
      <TextInput disabled label="ВЕРСИЯ ПО" value={data.SoftwareVersion} />
      <TextInput disabled label="ДАТА СОЗДАНИЯ" value={data.CreatedDate} />
    </>
  );
};
