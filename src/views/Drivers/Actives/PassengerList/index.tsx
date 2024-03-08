import CModal from "../../../../components/CElements/CModal";
import usePageRouter from '../../../../hooks/useObjectRouter';
import { useMemo } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Avatar } from "@mui/material";
import Places from "../../../../components/Places";


const PassengerList = ({ data }: { data: any }) => {
    const { getQueries, navigateQuery } = usePageRouter()
    const query = getQueries()


    const pasengerList = useMemo(() => {
        if (!data && !data.passengers.length) return []
        let passenger = data?.passengers
        return passenger?.map((val: any) => {
            return {
                ...val,
                seats: Array.from(new Array(4)).map((_, idx) => {
                    if (idx + 1 == val.place_number) {
                        return { gender: val.gender, reserved: val.reserved }
                    }
                    return { gender: 'false', reserved: 'false' }
                })
            }
        })
    }, [data]);

    console.log(data);
    console.log(pasengerList);




    return (
        <CModal title={data.full_name} open={!!query?.id} handleClose={() => navigateQuery({ id: '' })} footerActive={false}>
            <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold text-[var(--black)]">{data?.from_region_name}</p>
                <IoIosArrowRoundForward size='20' color="#858592" />
                <p className="text-2xl font-semibold text-[var(--black)]">{data?.to}</p>
            </div>
            <div>
                {pasengerList?.map((val: any) => (
                    <div className="flex items-center justify-between py-4 border-b ">
                        <div className="flex items-center gap-3">
                            <Avatar alt="" src={val.photo} />
                            <div>
                                <p className="text-[var(--black)] font-semibold text-sm">{val.full_name}</p>
                                <p className="text-sm font-normal text-[#475467]">+{val.phone}</p>
                            </div>
                        </div>
                        <div>
                            <Places data={val.seats} />
                        </div>
                    </div>
                ))}
            </div>
        </CModal>
    )
}

export default PassengerList