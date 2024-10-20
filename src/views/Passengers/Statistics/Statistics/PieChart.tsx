import CCard from "../../../../components/CElements/CCard";
import PieChart from "../../../../components/UI/PieChart/index";
// import CSelect from "../../../../components/CElements/CSelect";
import { useMemo, useState } from "react";
import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { useQuery } from "react-query";
import statistics from "../../../../services/statistics";

const coins = [
    { symbol: "ADA", amount: 200, color: "#FFC542", inUSD: 1.48 },
    { symbol: "SOL", amount: 5, color: "#DD431F", inUSD: 35.3 },
    { symbol: "BTC", amount: 0.005, color: "#0BD976", inUSD: 37363 },
    { symbol: "BTr", amount: 30, color: "#1D70FF", inUSD: 6.3 },
];

export default function RegionStats() {
    const [_, setAge] = useState("");
    const { data: stats,  } = useQuery(
        ["GET_TRIPS"],
        () => {
            return statistics.getTrip();
        },
        {
            enabled: true,
        }
    );
    const bodyColumns = useMemo(() => {
        return stats?.data ?? [];
    }, [stats]);

    const amount = Object.values(bodyColumns);
    const amount1 = Object.keys(bodyColumns);

    const obj = [];

    const obj1 = { symbol: '', amount: [], color: '' } as {symbol:string, amount: any, color:string};
    amount1.forEach((item: string, index) => {
        obj1.symbol = item;
        obj1.amount = amount[index];
        obj1.color = "#FFC542";
        obj.push(obj1);
    });

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
        <>
            <div className="space-y-4 ">
                <CCard classes="w-[83%] rounded-2xl" style={{ minHeight: "0px" }}>
                    <div className="flex gap-[25px] justify-between items-center">
                        <h2 className="uppercase w-[50%] font-semibold text-xs">
                            yangi yo‘lovchilar taqsimoti
                        </h2>
                        <FormControl
                            className="rounded-lg bg-red"
                            sx={{ m: 1, width: 112 }}
                            size="small"
                        >
                            <Select
                                sx={{
                                    m: 1,
                                    width: 100,
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

                    <PieChart coins={coins} />
                    {coins.map((coin) => {
                        return (
                            <div className="flex justify-between">
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

                    <div className="flex flex-col"></div>
                </CCard>
            </div>
        </>
    );
}
