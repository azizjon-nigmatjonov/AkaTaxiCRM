import { BarChart} from '@mui/x-charts'
import { Skeleton } from '@mui/material';
import { axisClasses } from '@mui/x-charts';

const StatisticsLineChart = ({ grapData: data, loading }: { grapData: any, loading?: any }) => {

    return (
        <div>
            {loading ? <Skeleton height={300} /> : <BarChart
                height={300}
                series={[
                    { data: data.trip, stack: 'driver', label: 'Trip amalga oshirganlar', id: 'found', color: 'var(--main)' },
                    { data: data.founded, stack: 'driver', label: "Yo'lovchi topganlar", id: 'trip', color: '#FFDECC', },
                ]}
                sx={{
                    [`.${axisClasses.left} .${axisClasses.label}`]: {
                        transform: 'translate(-20px, 0)',
                    },
                    padding: 0.5,
                }}
                xAxis={[{ data: data.label, scaleType: 'band', label: 'Oylar' }]}
                yAxis={[{ label: 'Yangi foydalanuvhchilar' }]}
                slotProps={{ legend: { hidden: true } }}
                skipAnimation={false}
            />}

        </div>
    )
}

export default StatisticsLineChart