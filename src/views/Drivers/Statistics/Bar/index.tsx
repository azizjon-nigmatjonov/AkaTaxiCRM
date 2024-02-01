import { BarChart } from '@mui/x-charts'
import { Skeleton } from '@mui/material';

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
            {loading ? <Skeleton height={300}/> : <BarChart
                width={1400}
                height={300}
                series={[
                    { data: grapData, label: 'Mashrutlar soni', id: 'pvId', color: 'var(--main)', },
                ]}
                xAxis={[{ data: MONTHS, scaleType: 'band' }]}
                slotProps={{ legend: {hidden: true} }}
                skipAnimation={false}
            />}

        </div>
    )
}

export default StatisticsLineChart