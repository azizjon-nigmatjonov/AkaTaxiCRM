import { BarChart } from '@mui/x-charts'
import { Skeleton } from '@mui/material';
import { axisClasses } from '@mui/x-charts';
const MONTHS = [
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


const StatisticsLineChart = ({ grapData, loading }: { grapData: any, loading?: any }) => {

    return (
        <div>
            {loading ? <Skeleton height={300} /> : <BarChart
                // width={1400}
                height={300}
                series={[
                    { data: grapData, stack: 'drivers', label: 'Yo’lovchi topganlar', id: 'trip', color: 'var(--main)', },
                    { data: grapData, stack: 'drivers', label: 'Trip amalga oshirganlar', id: 'passenger', color: 'var(--main)', }
                ]}
                sx={{
                    [`.${axisClasses.left} .${axisClasses.label}`]: {
                        transform: 'translate(-20px, 0)',
                    },
                    padding: 0.5
                }}
                xAxis={[{ data: MONTHS, scaleType: 'band', label: 'Oylar' }]}
                yAxis={[{ label: 'Yangi foydalanuvhchilar' }]}
                slotProps={{ legend: { hidden: true } }}
                skipAnimation={false}
            />}

        </div>
    )
}

export default StatisticsLineChart