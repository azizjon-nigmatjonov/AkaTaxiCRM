import { LineChart } from "@mui/x-charts";
import { FC } from "react";
interface Props {
  width?: number;
  height?: number;
}
const StatisticsLineChart: FC<Props> = ({ width = 900, height = 570 }) => {
  return (
    <div className="w-[100%]">
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
        series={[
          { curve: "natural", data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8] },
          { curve: "natural", data: [6, 3, 7, 9.5, 4, 2] },
        ]}
        width={width}
        height={height}
     
      >
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="5%" stopColor="gold" />
            <stop offset="95%" stopColor="red" />
          </linearGradient>
        </defs>
      </LineChart>
    </div>
  );
};

export default StatisticsLineChart;
