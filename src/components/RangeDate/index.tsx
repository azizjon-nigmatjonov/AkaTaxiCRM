import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import cls from './style.module.scss'

const RangeDate = () => {
    return (
        <div className={cls.rangeDate}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangeCalendar']}>
                    <DateRangeCalendar />
                </DemoContainer>
            </LocalizationProvider>
        </div>
    )
}

export default RangeDate