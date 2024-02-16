import { useGetQueries } from '../../../../hooks/useGetQueries';
import usePageRouter from '../../../../hooks/useObjectRouter';
import CModal from '../../../../components/CElements/CModal'
import Avatar from '@mui/material/Avatar';
import { IoIosArrowRoundForward } from "react-icons/io";

const DriversList = ({ data }: { data?: any }) => {
    const query = useGetQueries();
    const { navigateQuery, } = usePageRouter();
    
    // console.log(data());
    

    return (
        <div>
            <CModal title={query.driver_list ? "Aktiv haydovchilar" : "Tahrirlash"}
                open={!!query.driver_list}
                handleClose={() => {
                    navigateQuery({ driver_list: "" });
                }}
                footerActive={false}
            >
                <div className='flex items-center justify-between'>
                    <p className='text-[24px] text-[var(--black)] font-semibold'>{data?.from_region_name.split('viloyati')}</p>
                    <IoIosArrowRoundForward size={24} />
                    <p className='text-[24px] text-[var(--black)] font-semibold'>{data?.to_region_name.split('viloyati')}</p>
                </div>
                <div className='max-h-[500px] overflow-y-scroll'>
                    {data?.bids?.map((val: any) => (
                        <div key={val?.id} className='flex items-center gap-3 p-4 border-b border-[#EAECF0]'>
                            <Avatar sx={{ width: 24, height: 24 }} alt={val?.full_name} src={val?.image} />
                            <div>
                                <p className='text-sm font-semibold text-[var(--black)]'>{val?.full_name}</p>
                                <p className='text-sm font-normal text-[#475467]'>+{val?.phone}</p>
                            </div>
                        </div>
                    ))}
                    
                </div>

            </CModal>
        </div>
    )
}

export default DriversList