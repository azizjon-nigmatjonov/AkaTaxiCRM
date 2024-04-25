import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import './style.scss'
import { FormatCalendar } from '../../utils/formatTime';
import usePageRouter from "../../hooks/useObjectRouter";
import AddButton from '../../components/Buttons/AddButton';
import { Closer } from '../../components/Closer';

interface Props {
    footerActive?: boolean,
    setShow?:any,
    handlerValue?: (e: any) => void
}

const RangeDate = ({ handlerValue = () => { }, setShow, footerActive = false }: Props) => {
    const { navigateQuery } = usePageRouter();

    const clickhandler = (e?: any) => {
        navigateQuery({ start: FormatCalendar(e[0]?.$d) })
        navigateQuery({ end: FormatCalendar(e[1]?.$d) })
        handlerValue(e)
    }


    return (
        <>
            <div className='rangeDate'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateRangeCalendar onChange={(e: any) => clickhandler(e)} calendars={2} />
                </LocalizationProvider>
                {footerActive && <div className='p-5 flex justify-end'>
                    <div>
                        <AddButton iconLeft={false} text='Tanlang' />
                    </div>
                </div>}
            </div>
            <Closer handleClose={() => setShow(false)} />
        </>
    )
}

export default RangeDate