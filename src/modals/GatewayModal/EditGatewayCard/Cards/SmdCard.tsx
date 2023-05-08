import React from "react";
import { TextInput } from "ui";

type FStatus = {
  serialNumber: string;
  changeDate: string;
  status: number;
  StatusString: string;
};

type SMDData = {
  SerialNumber: string;
  Model: string;
  SoftwareVersion: string;
  FirmwareStatus?: FStatus;
  CreatedDate: string;
  ObjectId: number;
};

type Props = {
  data: SMDData;
  dispatch: (action: { type: string; data: any }) => void;
};

const defaultValues = {
  SerialNumber: "",
  Model: "",
  SoftwareVersion: "",
  CreatedDate: "",
  ObjectId: 0
};

export const SmdCard = ({ data = defaultValues, dispatch }: Props) => {
  return (
    <>
      <TextInput disabled label="МОДЕЛЬ" value={data.Model} />
      <TextInput disabled label="СЕРИЙНЫЙ НОМЕР" value={data.SerialNumber} />
      <TextInput disabled label="ВЕРСИЯ ПО" value={data.SoftwareVersion} />
      <TextInput disabled label="ДАТА СОЗДАНИЯ" value={data.CreatedDate} />
    </>
  );
};
