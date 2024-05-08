import { ResponsiveLine } from '@nivo/line'
import { LineChartBackground } from '../../../../../components/UI/IconGenerator/Svg'
import LineChartTooltip from './LineChartTooltip'

const LineChart = ({ data }: { data: any }) => {
  return (
    <div className='w-full h-[500px] relative'>
      <div className='absolute left-0 top-[50px] w-full h-full'>
        <LineChartBackground />
      </div>
      <ResponsiveLine
        data={data}
        margin={{ top: 100, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        tooltip={( {point} ) => <LineChartTooltip data={point}/>}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle',
          truncateTickAt: 0
        }}
        enableGridX={false}
        colors={{ scheme: 'nivo' }}
        pointSize={2}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderColor={{ from: 'color', modifiers: [] }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-10}
        areaBaselineValue={140}
        areaOpacity={0.35}
        enableCrosshair={false}
        crosshairType="top-right"
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            justify: false,
            translateX: 34,
            translateY: -300,
            itemsSpacing: 6,
            itemDirection: 'left-to-right',
            itemWidth: 75,
            itemHeight: 200,
            itemOpacity: 0.75,
            symbolSize: 8,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  )
}

export default LineChart