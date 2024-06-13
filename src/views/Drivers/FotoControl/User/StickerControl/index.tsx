import { Modal } from "@mui/material"
import CCard from "../../../../../components/CElements/CCard"
import usePageRouter from '../../../../../hooks/useObjectRouter'
import Accepted from "./StickerAccept"
import Ignored from "./StickerIgnore"
import { RxCross2 } from "react-icons/rx"


const StickerControl = ({ data, refetch }: { data?: any; refetch: () => void }) => {
    const { navigateQuery, getQueries } = usePageRouter();
    const query = getQueries();

    return (
        <>
            <CCard style={{ minHeight: 0 }} >
                <p className='text-lg font-semibold'>Yangi nakleyka rasmini tekshirish</p>
                <div className="mt-6 flex gap-6">
                    <div onClick={() => navigateQuery({ zoom: true })}>
                        <img src={data?.image ?? 'https://th.bing.com/th/id/R.61c0c952b431b396b50e2797e9712039?rik=RW5uMcJi0Z2rsg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fCar-PNG-Photos.png&ehk=emMA5t10uspNLJ%2bt4x6Ll5zpkyUB%2fcnWlYK8114xyUc%3d&risl=&pid=ImgRaw&r=0'} alt="sticker" className="max-w-[249px] w-full min-w-[249px] max-h-[150px] h-full rounded-xl" />
                    </div>
                    <div>
                        <span className="text-[#667085] text-sm">Yuborilgan vaqt</span>
                        <p className="text-base font-medium mt-2">{data?.created_at}</p>
                        <div className="mt-6 flex gap-3">
                            <button className="custom-btn" onClick={() => navigateQuery({ action: 'ignore' })} >Rad qilish</button>
                            <button className='custom-btn success-btn' onClick={() => navigateQuery({ action: 'accept' })} >Qabul qilish</button>
                        </div>
                    </div>
                </div>
            </CCard>

            <Modal open={!!query?.action || !!query.zoom}>
                <div> {!!query?.action ?
                    <CCard style={{ minHeight: 0 }} classes='max-w-[400px] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'>
                        {query.action == 'ignore' ? <Ignored refetch={refetch} /> : <Accepted date={data?.created_at} />}
                    </CCard> :
                    <div className="absolute z-10 bg-red-500 mt-24  mb-24 left-[50%] translate-x-[-50%]  max-w-[600px] w-full h-full max-h-[600px]">
                        <div onClick={() => { navigateQuery({ zoom: '' }) }} className="bg-white rounded-lg inline-block p-[10px] absolute top-[18px] right-[18px]">
                            <RxCross2 size={15} />
                        </div>
                        <img src={data?.image} alt="image" className=" w-full h-full" />
                    </div>
                }
                </div>
            </Modal>
        </>

    )
}

export default StickerControl