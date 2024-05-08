import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const LineChartTooltip = ({ data }: { data?: any }) => {
    return (
        <div className='bg-white rounded-lg p-3 space-y-1 relative'>
            <p className='text-xs font-semibold text-center'>{data.y}</p>
            <p className='text-[#667085] font-medium'>12 Jul, 2023</p>
            <ArrowDropDownIcon style={{ height: 26, width: 26, color: 'white', position: 'absolute', bottom: '-15px', left: '50%', transform:'translateX(-50%)'}} />
        </div>
    )
}

export default LineChartTooltip