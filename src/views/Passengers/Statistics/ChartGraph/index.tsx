import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { Skeleton } from '@mui/material';

const ChartGraph = ({ data, loading }: { data?: any, loading?: boolean }) => {

    return (
        <div>
            {loading ?
                <Skeleton height={300} width={'100%'} /> : <BarChart
                    height={300}
                    series={[
                        { data: data.data, color: 'var(--main)' },
                    ]}
                    xAxis={[{ data: data.label, scaleType: 'band', label: 'Yillar' }]}
                    yAxis={[{ label: 'Yangi foydalanuvhchilar' }]}
                    slotProps={{ legend: { hidden: true } }}
                    sx={{
                        [`.${axisClasses.left} .${axisClasses.label}`]: {
                            transform: 'translate(-15px, 0)',
                            fontWeight: 500,
                        },
                        padding: '5px',
                    }}
                />}
        </div>
    )
}

export default ChartGraph