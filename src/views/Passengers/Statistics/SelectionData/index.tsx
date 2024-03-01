import { useMemo, useState } from "react";
import usePageRouter from "../../../../hooks/useObjectRouter";
import CCard from "../../../../components/CElements/CCard";
import ChartGraph from "../ChartGraph"
import Setting from "./Setting";
import Form from "./Form";
import { LinearProgress, Skeleton } from "@mui/material";
import { useQuery } from "react-query";
import statistics from "../../../../services/statistics";
import { useGetQueries } from "../../../../hooks/useGetQueries";

const Selection = () => {
    const { navigateQuery } = usePageRouter();
    const [graph, setGraph] = useState('year')
    const [count, setCount] = useState('year')
    const { date } = useGetQueries()

    const graphHandler = (e: string) => {
        setGraph(e)
    }

    const countHandler = (e: string) => {
        navigateQuery({ date: e })
        setCount(e)
    }


    const { data, isLoading } = useQuery(['GET_PROGRESS', date], () => {
        return statistics.getProgress(date)
    })


    const progress = useMemo(() => {
        if (!data?.data) return [];
        let maxValue = Math.max(...data?.data.map((val: any) => val.users_count))
        return data?.data.map((val: any) => {
            return {
                ...val,
                value: maxValue == val.users_count ? 100 : maxValue / val.users_count
            }
        })
    }, [data])






    return (
        <div className="px-6">
            <div className="flex gap-6">
                <div className="w-full">
                    <CCard classes="mb-6 flex flex-col justify-between min-w-[690px]">

                        <div className="flex items-center justify-between">
                            <p className="font-base font-semibold text-[var(--black)]">Ro’yhatdan o’tganlar</p>
                            <Setting value={graph} chooseChange={graphHandler} />
                        </div>

                        <Form value={graph} />

                        <ChartGraph />
                    </CCard>
                </div>

                <CCard classes="w-[360px]">
                    <Setting value={count} chooseChange={countHandler} />
                    {isLoading ? <div>
                        {Array.from(new Array(6)).map((_) => (
                            <div>
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            </div>
                        ))}
                    </div> : <div className="mt-3 h-full">
                        {progress?.map((val: any) => (
                            <div className="flex flex-col justify-between  h-full">
                                <div className="flex items-center justify-between mt-2">
                                    <p className="text-sm font-normal text-[var(--black)]">{val.region_name ? val.region_name : "Noma'lum viloyat"}</p>
                                    <p className="text-sm font-semibold text-[var(--black)]">{val.users_count}</p>
                                </div>
                                <LinearProgress variant="determinate" sx={{
                                    backgroundColor: '#FFEFE6',
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: '#FF7C34'
                                    }, marginTop: '3px', borderRadius: 5
                                }} value={val?.value} />
                            </div>
                        ))}

                    </div>}

                </CCard>
            </div>
        </div>
    )
}

export default Selection