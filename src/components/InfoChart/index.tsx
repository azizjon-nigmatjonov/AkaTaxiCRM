import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { useState } from "react";

export default function InfoChart() {
  const setAge = useState<any>("")[1];

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const coins = [
    { symbol: "ADA", amount: 200, color: "#FFC542", inUSD: 1.48 },
    { symbol: "SOL", amount: 5, color: "#DD431F", inUSD: 35.3 },
    { symbol: "BTC", amount: 0.005, color: "#0BD976", inUSD: 37363 },
    { symbol: "BTr", amount: 30, color: "#1D70FF", inUSD: 6.3 },
  ];

  return (
    <>
      <div className="space-y-4 p-[18px]">
        <div className="w-[83%] rounded-2xl" style={{ minHeight: "0px" }}>
          <div className="flex gap-[25px] justify-between items-center">
            <h2 className="uppercase w-[50%] font-semibold text-[12px]">
              Viloyatlararo triplar
            </h2>
            <FormControl
              className="rounded-lg bg-red"
              sx={{ m: 1, width: 112 }}
              size="small"
            >
              <Select
                sx={{
                  m: 1,
                  width: 112,
                  height: 30,
                  borderRadius: "8px",
                  border: "1px solid #E2E2EA",
                  backgroundColor: "#F7F7FC",
                  color: "#858592",
                }}
                inputProps={{
                  "aria-label": "Without label",
                  color: "#858592",
                }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                onChange={handleChange}
                defaultValue={"10"}
              >
                <MenuItem value={10}>12</MenuItem>
                <MenuItem value={20}>13</MenuItem>
                <MenuItem value={30}>14</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="mb-[42px]">
            <p className="text-[var(--black)]  font-semibold text-[30px]">
              8,499 ta
            </p>
            <p className="text-[var(--gray)] mb-4">1 haftadagi triplar soni</p>
          </div>
          {coins.map((coin) => {
            return (
              <div key={coin.symbol} className="flex justify-between">
                <div className="flex items-center">
                  <div
                    className="w-[10px] h-[10px] rounded-[50%] mr-[10px]"
                    style={{ backgroundColor: coin.color }}
                  ></div>
                  <p className="text-[var(--gray)]">{coin.symbol}</p>
                </div>
                <p className="text-[var(--gray)]">{coin.amount}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
