import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

const ChartGraph = () => {
    return (
        <div >
            <BarChart
                height={300}
                series={[
                    { data: uData, label: 'uv', id: 'uvId', color: 'var(--main)' },
                ]}
                xAxis={[{ data: xLabels, scaleType: 'band', label: 'Oylar', }]}
                yAxis={[{ label: 'Yangi foydalanuvhchilar' }]}
                slotProps={{ legend: { hidden: true } }}
                sx={{
                    [`.${axisClasses.left} .${axisClasses.label}`]: {
                        transform: 'translate(-25px, 0)',
                        fontWeight: 500,
                    },
                    padding: '5px',
                }}
            />
        </div>
    )
}

export default ChartGraph