import { Switch } from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
  text: string;
  handleCheck: any;
  name: string;
  group: string;
  checked: boolean;
}

const SwitchBtn = ({ text, handleCheck, name, group, checked }: Props) => {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div
      onClick={() => handleCheck(name, !checked, group)}
      id="SwitchBtn"
      className={`cursor-pointer flex items-center justify-between pl-[14px] font-medium border border-[var(--lineGray)] rounded-[10px] h-[48px] ${
        checked ? "checked" : ""
      }`}
    >
      <span>{text}</span>
      <Switch {...label} checked={checked} defaultChecked />
    </div>
  );
};

export default SwitchBtn;
