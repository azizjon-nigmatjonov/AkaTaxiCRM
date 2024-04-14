import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import './style.scss'
import { FormatCalendar } from '../../utils/formatTime';
import usePageRouter from "../../hooks/useObjectRouter";
// import { Closer } from '../../components/Closer';

const RangeDate = ({ handlerValue = () => { } }: { handlerValue?: (e: any) => void }) => {
    const { navigateQuery } = usePageRouter();

    const clickhandler = (e?: any) => {
        navigateQuery({ start: FormatCalendar(e[0].$d) })
        navigateQuery({ end: FormatCalendar(e[1].$d) })
        handlerValue(e)
    }

    return (
        <div className='rangeDate'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangeCalendar onChange={(e: any) => clickhandler(e)} calendars={2} />
            </LocalizationProvider>
            {/* <Closer handleClose={() => clickhandler()} /> */}
        </div>
    )
}

export default RangeDate