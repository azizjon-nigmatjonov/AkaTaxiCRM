import { BarChart} from '@mui/x-charts'
import { Skeleton } from '@mui/material';
import { axisClasses } from '@mui/x-charts';

const StatisticsLineChart = ({ grapData: data, loading }: { grapData: any, loading?: any }) => {

    return (
        <div>
            {loading ? <Skeleton height={300} /> : <BarChart
                height={300}
                series={[
                    { data: data?.trip, stack: 'driver', label: 'Trip amalga oshirganlar', id: 'found', color: 'var(--main)' },
                    { data: data?.founded, stack: 'driver', label: "Yo'lovchi topganlar", id: 'trip', color: '#FFDECC', },
                ]}
                sx={{
                    [`.${axisClasses.left} .${axisClasses.label}`]: {
                        transform: 'translate(-40px, 0)',
                    },
                    padding: 1.3,
                }}
                xAxis={[{ data: data?.label, scaleType: 'band', label: 'Oylar' }]}
                yAxis={[{ label: 'Yangi foydalanuvchilar' }]}
                slotProps={{ legend: { hidden: true } }}
                skipAnimation={false}
            />}

        </div>
    )
}

export default StatisticsLineChart