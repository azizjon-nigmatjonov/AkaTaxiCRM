import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

interface Props {
  region_name: string,
  male_users: number,
  female_users: number,
  all: number,
  data: { value: number, label: string }[]
}


const RegionsPie = ({ data }: { data: any }) => {
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
    <div className='grid grid-cols-4 gap-8 py-6'>
      {data?.map(({ region_name: region, all, data: pieData }: Props) => (
        <div key={region}>
          <Label>{region ?? 'Noma\'lum viloyat'}</Label>
          <div className='mt-5'>
            <PieChart
              series={[
                {
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