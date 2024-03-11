import { useGetQueries } from '../../../../hooks/useGetQueries';
import usePageRouter from '../../../../hooks/useObjectRouter';
import CModal from '../../../../components/CElements/CModal'
import Avatar from '@mui/material/Avatar';
import { IoIosArrowRoundForward } from "react-icons/io";

const DriversList = ({ data }: { data?: any }) => {
    const query = useGetQueries();
    const { navigateQuery, } = usePageRouter();


    return (
        <div>
            <CModal title={query.driver_list ? "Aktiv haydovchilar" : "Tahrirlash"}
                open={!!query.id}
                handleClose={() => {
                    navigateQuery({ id: "" });
                }}
                footerActive={false}
            >
                <div className='flex items-center justify-between'>
                    <p className='text-[24px] text-[var(--black)] font-semibold'>{data?.from_region_name.split('viloyati')}</p>
                    <IoIosArrowRoundForward size={24} />
                    <p className='text-[24px] text-[var(--black)] font-semibold'>{data?.to_region_name.split('viloyati')}</p>
                </div>
                <div className='max-h-[450px] overflow-y-scroll'>
                    {data?.bids?.map((val: any) => (
                        <div className='flex items-center justify-between'>
                            <div key={val?.id} className='flex items-center gap-3 p-4 border-b border-[#EAECF0]'>
                                <Avatar sx={{ width: 24, height: 24 }} alt={val?.full_name} src={val?.image} />
                                <div>
                                    <p className='text-sm font-semibold text-[var(--black)]'>{val?.full_name}</p>
                                    <p className='text-sm font-normal text-[#475467]'>+{val?.phone}</p>
                                </div>
                            </div>
                            <p className={`${val?.status == 'searching_driver' ? 'text-[var(--green)]' : 'text-red-500'}`}>{val?.status == 'searching_driver' ? 'Qidirilmoqda' : val?.status == 'driver_accepted' ? 'Qabul qildi' : val?.status == 'driver_canceled' ? 'Haydovchi bekor qildi' : 'Yolovchi bekor qildi'}</p>
                        </div>
                    ))}
                </div>
            </CModal>
        </div>
    )
}

export default DriversList