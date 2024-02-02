import { LineChart, } from "@mui/x-charts";
import { FC, useMemo } from "react";
interface Props {
  width?: number;
  height?: number;
  data?: any
}
const uData = [40, 30, 20, 27, 18, 23, 34];
const pData = [24, 13, 90, 39, 48, 38, 43];
const xLabels = [
  'Yan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Iyun',
  'Iyul',
  'Avg',
  'Sen',
  'Okt',
  'Noy',
  'Dek'
];

const StatisticsLineChart: FC<Props> = ({ data, width = 875, height = 481 }) => {

  const getGraph: any = useMemo(() => {
    let trips: any = [];
    let users: any = [];

    if (!data) {
      return []
    } else {
      trips = Object.values(data?.trips)
      users = Object.values(data?.users)
    }

    return { trips, users }
  }, [data])


  return (
    <div className="w-[100%]">
      <LineChart
        width={width}
        height={height}
        series={[
          { data: getGraph.trips ?? uData, label: 'Trips', color: '#DD431F', showMark: false, },
          { data: getGraph.users ?? pData, label: 'Users', color: '#0BD976', showMark: false, }
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        yAxis={[{ data: [10, 20, 30] }]}
        slotProps={{
          legend: {
            direction: 'row',
            position: { vertical: 'top', horizontal: 'right', },
            padding: 0,
            itemMarkHeight: 7,
            itemMarkWidth: 7,
          }

        }}
      />
    </div>
  );
};

export default StatisticsLineChart;
