import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { Skeleton } from '@mui/material';

interface Props {
  region_name: string,
  male_users: number,
  female_users: number,
  all: number,
  data: { value: number, label: string }[]
}


const RegionsPie = ({ data, loading }: { data: any, loading: boolean }) => {
  const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 12,
    fontWeight: 600
  }));


  function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

  const Label = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    fontSize: 12,
    fontWeight: 600,
    color: 'var(--black)',
  }))

  return (
    <div className={`grid ${loading ? 'grid-cols-5' : 'grid-cols-4'} gap-8 py-6  `}>
      {loading ?
        Array.from(new Array(20))?.map((_) => <Skeleton variant='circular' width={120} height={120} />)
        : data?.map(({ region_name: region, all, data: pieData }: Props) => (
          <div key={region}>
            <Label>{region ?? 'Noma\'lum viloyat'}</Label>
            <div className='mt-5'>
              <PieChart
                series={[
                  {
                    // arcLabel: (item) => `${item.label} (${item.value})`,
                    data: pieData,
                    innerRadius: 30,
                    outerRadius: 60,
                  },
                ]}
                colors={['#287EFF', '#FF35BA']}
                height={120}
                width={230}
                slotProps={{
                  legend: {
                    direction: 'column',
                    position: { vertical: 'top', horizontal: 'right' },
                    itemMarkHeight: 8,
                    itemMarkWidth: 8,
                    itemGap: 4,

                  },
                }}
              >
                <PieCenterLabel>{all}</PieCenterLabel>
              </PieChart>
            </div>
          </div>
        ))}
    </div>
  )
}

export default RegionsPie