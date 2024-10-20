import { useEffect, useMemo, useState } from "react";
// import usePageRouter from "../../../../hooks/useObjectRouter";
import CCard from "../../../../components/CElements/CCard";
import ChartGraph from "../ChartGraph";
// import Setting from "./Setting";
// import Form from "./Form";
import { LinearProgress, Skeleton } from "@mui/material";
import { useQuery } from "react-query";
import statistics from "../../../../services/statistics";
import { useGetQueries } from "../../../../hooks/useGetQueries";
// import {
//   createSearchParams,
//   useSearchParams,
//   useNavigate,
// } from "react-router-dom";
import CTabs from "../../../../components/CElements/CTab";
import { CPeriodPicker } from "../../../../components/CElements/CPeriodPicker";

const tabList = [
  {
    slug: "",
    name: "Ro’yhatdan o’tganlar",
  },
  {
    slug: "aktiv",
    name: "Aktiv",
  },
  {
    slug: "deleted",
    name: "O'chirganla",
  },
];

const Selection = () => {
  const [graph, setGraph] = useState("year");
  const { year, month, week, tab } = useGetQueries();
  const [barChartDate, setBarChartDate] = useState<any>([]);
  const [countsDate, setCountsDate] = useState<any>([]);

  useEffect(() => {
    if (week) {
      setGraph("week");
      return;
    }
    if (year) {
      setGraph("month");
      return;
    }

    setGraph("year");
  }, [year, month, week]);

  const { data: barCart, isLoading } = useQuery(
    ["GET_GRAPH", barChartDate, tab],
    () => {
      return statistics.getPassangerGraph({
        date: barChartDate?.length ? barChartDate?.join(",") : undefined,
        type: tab ? tab : "registered",
      });
    }
  );

  const graphData: any = useMemo(() => {
    if (!barCart) return [];
    const list: any = barCart.data ?? [];
    const data: any = [];
    const label: any = [];

    list.map((val: any) => (data.push(val.count), label.push(val.time)));
    return { data, label };
  }, [barCart]);

  const { data, isLoading: progressLoading } = useQuery(
    ["GET_PROGRESS", countsDate],
    () => {
      return statistics.getProgress({ date: countsDate?.join(",") });
    }
  );

  const progress = useMemo(() => {
    if (!data?.data) return [];
    const maxValue = Math.max(...data?.data.map((val: any) => val.users_count));
    return data?.data.map((val: any) => {
      return {
        ...val,
        value:
          val.users_count < 1
            ? 0
            : val.users_count === maxValue
            ? 100
            : (val.users_count / maxValue) * 100,
      };
    });
  }, [data]);
  console.log('progress', progress);
  
  return (
    <div className="px-6 mb-6 ">
      <div>
        <CTabs tabList={tabList} />
      </div>
      <div>
        <div className="w-full">
          <CCard classes="flex flex-col justify-between w-full min-w-[690px]">
            <div className="flex items-center justify-between">
              <p className="font-base font-semibold text-[var(--black)]">
                Ro’yhatdan o’tganlar
              </p>
              <div className="w-[230px]">
                <CPeriodPicker
                  handleValue={setBarChartDate}
                  placeholder="Tanlang"
                />
              </div>
            </div>

            <ChartGraph title={graph} loading={isLoading} data={graphData} />
          </CCard>
        </div>

        <CCard classes="w-full h-full mt-5">
          <div>
            <div className="w-[230px] ml-auto mb-5">
              <CPeriodPicker
                handleValue={setCountsDate}
                placeholder="Tanlang"
              />
            </div>
            {progressLoading ? (
              <div className="mt-5">
                {Array.from(new Array(12)).map((_) => (
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                ))}
              </div>
            ) : (
              <div className="mt-3 h-full">
                {progress?.map((val: any) => (
                  <div className="flex flex-col justify-between  h-full">
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-sm font-normal text-[var(--black)]">
                        {val.region_name ? val.region_name : "Noma'lum viloyat"}
                      </p>
                      <p className="text-sm font-semibold text-[var(--black)]">
                        {val.users_count}
                      </p>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      sx={{
                        backgroundColor: "#FFEFE6",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#FF7C34",
                        },
                        marginTop: "3px",
                        borderRadius: 5,
                      }}
                      value={val?.value}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </CCard>
      </div>
    </div>
  );
};

export default Selection;
