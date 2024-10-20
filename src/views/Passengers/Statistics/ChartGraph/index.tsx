import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts";
import { Skeleton } from "@mui/material";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

const ChartGraph: React.FC<{
  data?: any;
  loading?: boolean;
  title?: string;
}> = ({ data, loading, title }) => {
  const { t } = useTranslation();
  const labelList = useMemo(() => {
    return data?.label?.map((item: any) => {
      return t(item?.toLowerCase(item));
    });
  }, [data?.label]);

  return (
    <div>
      {loading ? (
        <Skeleton height={300} width={"100%"} />
      ) : (
        <BarChart
          height={300}
          series={[{ data: data.data, color: "var(--main)" }]}
          xAxis={[
            {
              data: labelList,
              scaleType: "band",
              label: `${
                title == "year"
                  ? "Yillar"
                  : title == "month"
                  ? "Oylar"
                  : "Kunlar"
              }`,
            },
          ]}
          yAxis={[{ label: "Yangi foydalanuvchilar" }]}
          slotProps={{ legend: { hidden: true } }}
          sx={{
            [`.${axisClasses.left} .${axisClasses.label}`]: {
              transform: "translate(-30px, 0)",
              fontWeight: 500
            },
            padding: 1.5,
          }}
        />
      )}
    </div>
  );
};

export default ChartGraph;
