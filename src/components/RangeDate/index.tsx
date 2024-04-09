import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import './style.scss'
import { FormatCalendar } from '../../utils/formatTime';
import usePageRouter from "../../hooks/useObjectRouter";

const RangeDate = () => {
    const { navigateQuery } = usePageRouter();

    const clickhandler = (e: any) => {
        navigateQuery({ start: FormatCalendar(e[0].$d) })
        navigateQuery({ end: FormatCalendar(e[1].$d) })
    }


    return (
        <div className='rangeDate'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangeCalendar onChange={e => clickhandler(e)} calendars={2} />
            </LocalizationProvider>
        </div>
    )
}

export default RangeDate