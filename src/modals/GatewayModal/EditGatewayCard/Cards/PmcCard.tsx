import React from "react";
import { TextInput } from "ui";

type FStatus = {
  serialNumber: string;
  changeDate: string;
  status: number;
  StatusString: string;
};

type PMCData = {
  SerialNumber: string;
  Model: string;
  SoftwareVersion: string;
  FirmwareStatus?: FStatus;
  CreatedDate: string;
  ObjectId: number;
};

const defaultValues = {
  SerialNumber: "",
  Model: "",
  SoftwareVersion: "",
  CreatedDate: "",
  ObjectId: 0
};

type Props = {
  data: PMCData;
  dispatch: (action: { type: string; data: any }) => void;
};

export const PmcCard = ({ data = defaultValues, dispatch }: Props) => {
  return (
    <>
      <TextInput disabled label="МОДЕЛЬ" value={data.Model} />
      <TextInput disabled label="СЕРИЙНЫЙ НОМЕР" value={data.SerialNumber} />
      <TextInput disabled label="ВЕРСИЯ ПО" value={data.SoftwareVersion} />
    </>
  );
};
