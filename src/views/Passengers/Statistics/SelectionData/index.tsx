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
import { createSearchParams, useSearchParams, useNavigate } from "react-router-dom";

const Selection = () => {
    const navigate = useNavigate()
    const { navigateQuery, getQueries } = usePageRouter();
    const setSearchParams = useSearchParams()[1]
    const [graph, setGraph] = useState('year')
    const [count, setCount] = useState('year')
    const { date, year, month, week } = useGetQueries()
    const query = getQueries()
    // console.log(Object.keys(query).length);


    const graphHandler = (e: string) => {
        setGraph(e)
        const date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth()
        switch (e) {
            case 'year':
                return setSearchParams({})
            case 'month':
                if (Object.keys(query).length > 2) {
                    Object.entries(query).map(([keys]) => {
                        if (keys != 'year') {
                            delete query[keys]
                        }
                    })
                }
                navigateQuery({ year: year })
                break

            default:
                let newQuery: any = { year: year, month: month + 1, week: 1 }
                const queryParams = createSearchParams(newQuery);
                return navigate({
                    pathname: location.pathname,
                    search: queryParams.toString(),
                });
        }
    }



    const countHandler = (e: string) => {
        navigateQuery({ date: e })
        setCount(e)
    }

    const { data: barCart, isLoading } = useQuery(['GET_GRAPH', year, month, week], () => {
        return statistics.getPassangerGraph({ year, month, week })
    })



    const graphData: any = useMemo(() => {
        if (!barCart) return []
        let list: any = barCart.data ?? []
        const data: any = []
        const label: any = []

        list.map((val: any) => (data.push(val.count), label.push(val.time))
        )
        return { data, label }
    }, [barCart])


    const { data, isLoading: progressLoading } = useQuery(['GET_PROGRESS', date], () => {
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
        <div className="px-6 mb-6  h-[600px]">
            <div className="flex gap-6 h-full  ">
                <div className="w-full">
                    <CCard classes="flex flex-col justify-between  h-[600px] w-full min-w-[690px]">
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="font-base font-semibold text-[var(--black)]">Ro’yhatdan o’tganlar</p>
                                <Setting value={graph} chooseChange={graphHandler} />
                            </div>
                            <Form value={graph} />
                        </div>
                        <ChartGraph loading={isLoading} data={graphData} />
                    </CCard>
                </div>

                <CCard classes="w-[360px] h-full">
                    <div>
                        <Setting value={count} chooseChange={countHandler} />
                        {progressLoading ? <div className="mt-5">
                            {Array.from(new Array(12)).map((_) => (
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
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
                    </div>
                </CCard>

            </div>
        </div>
    )
}

export default Selection