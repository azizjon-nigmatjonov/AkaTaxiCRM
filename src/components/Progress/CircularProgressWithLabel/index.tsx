import { Box, CircularProgress } from '@mui/material';
interface Props {
    size?: number;
    color?: string;
    value?: number;
    regionName?: string;
    regionSize?: any;
    icon?:any
}

const StartProgress = ({ size = 50, color, value = 5, regionName, regionSize, icon }: Props) => {

    return <div className='flex items-center gap-[14px]'>
        <Box sx={{ position: 'relative', display: 'inline-flex', backgroundColor: 'white' }}>
            <CircularProgress
                variant="determinate"
                sx={{
                    color: (theme) =>
                        theme.palette.grey[theme.palette.mode === 'light' ? 100 : 800],
                }}
                size={size}
                thickness={2.5}
                value={100}
            />
            <CircularProgress
                variant="determinate"
                sx={{
                    color: (theme) => (theme.palette.mode === 'light' ? color : 'var(--ink)'),
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                }}
                size={size}
                thickness={2.5}
                value={value}
            />
            {icon ? <p>Icon</p> : <p className={`text-lg  font-semibold absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center`}>{value}%</p>}
        </Box>
        <div>
            <p className='text-base font-semibold text-[var(--black)]'>{regionSize} ta</p>
            <p className='text-sm text-[var(--gray)] font-normal'>{regionName}</p>
        </div>
    </div>
}

export default StartProgress