import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FormatCalendar } from '../../../../utils/formatTime';
import usePageRouter from '../../../../hooks/useObjectRouter';

const Tools = () => {
    const [date, setDate] = useState(new Date()); // June 2023
    const { navigateQuery } = usePageRouter();
    
    const handleNextMonth = () => {
        const newDate: any = new Date(date);
        newDate.setMonth(newDate.getMonth() + 1);
        if (newDate.getMonth() === 0) {
            newDate.setFullYear(newDate.getFullYear());
        }
        setDate(newDate);
        console.log(FormatCalendar(newDate) );
        
        navigateQuery({ date: FormatCalendar(newDate) })
    };

    const handlePrevMonth = () => {
        const newDate: any = new Date(date);
        newDate.setMonth(newDate.getMonth() - 1);
        if (newDate.getMonth() === 11) {
            newDate.setFullYear(newDate.getFullYear());
        }
        setDate(newDate);
        navigateQuery({ date: FormatCalendar(newDate) })

    };

    const monthNames: string[] = [
        'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
    ];


    return (
        <div className="calendar">
            <div className='flex items-center gap-[18px]'>
                <p className="text-[var(--error)] font-medium">1 {monthNames[date.getMonth()]}, {date.getFullYear()} - 31 {monthNames[date.getMonth()]}, {date.getFullYear()}</p>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <div >
                        <IoIosArrowBack onClick={handlePrevMonth} />
                    </div>
                    <div >
                        <IoIosArrowForward onClick={handleNextMonth} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Tools


