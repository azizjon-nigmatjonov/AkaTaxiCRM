import { useMemo } from 'react';
import usePageRouter from '../../../../../../hooks/useObjectRouter'
import AddButton from '../../../../../../components/UI/Buttons/AddButton';
import CancelButton from '../../../../../../components/UI/Buttons/Cancel';
import { RxCross2 } from "react-icons/rx";
import { CgArrowLongRight } from "react-icons/cg";
import driverService from '../../../../../../services/drivers';
import { useDispatch } from 'react-redux';
import { websiteActions } from '../../../../../../store/website'
import { useParams } from 'react-router-dom';

const Accepted = ({ date }: { date?: string }) => {
    const { navigateQuery } = usePageRouter();
    const { id } = useParams()
    const dispatch = useDispatch()

    const showPeriodTime: any = useMemo(() => {
        let day = date?.slice(0, 2);
        let month = date?.slice(3, 5)
        let year = date?.slice(6, 11);


        let startDate = [day, month, year].join('.')
        let endDate = [day, month?.split('').map((a: string, index: number) => index == 1 ? parseFloat(a) + 1 : parseFloat(a)).join(''), year].join('.')

        return { startDate, endDate }

    }, [date])

    const acceptHandler = () => {
        driverService.updateFotoControl(id, { status: 'verified' }).then(() => {
            navigateQuery({ action: '' })
            dispatch(websiteActions.setAlertData({
                mainTitle: 'Qabul qilindi!',
                title: "Sizning so'rovingiz qabul qilindi!"
            }))

            setTimeout(() => {
                window.location.reload()
            }, 2000)
        })

    }

    return (
        <>
            <div className='flex items-start justify-between'>
                <div >
                    <span className='text-lg font-semibold '>Qabul qilish</span>
                    <p className='text-[var(--gray)] text-sm'>Haydovchini qabul qilganingizga to’lov vaqti yangilanadi va muddat cho’ziladi</p>
                </div>
                <div className='cursor-pointer' onClick={() => navigateQuery({ action: '' })}>
                    <RxCross2 />
                </div>
            </div>
            <div className='my-5 text-lg text-[#475467] font-normal flex items-center justify-between'>
                <p>{showPeriodTime.startDate}</p>
                <CgArrowLongRight />
                <p>{showPeriodTime.endDate}</p>
            </div>
            <div className='flex items-center justify-end gap-3'>
                <CancelButton text='Orqaga' onClick={() => navigateQuery({ action: '' })} />
                <AddButton id='saveButton' iconLeft={false} text='Qabul qilsh' onClick={acceptHandler} />
            </div>
        </>
    )
}

export default Accepted