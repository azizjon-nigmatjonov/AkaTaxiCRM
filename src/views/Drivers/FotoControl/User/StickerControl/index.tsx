import { Modal } from "@mui/material"
import AddButton from "../../../../../components/UI/Buttons/AddButton"
import CCard from "../../../../../components/CElements/CCard"
import usePageRouter from '../../../../../hooks/useObjectRouter'
import Accepted from "./StickerAccept"
import Ignored from "./StickerIgnore"


const StickerControl = ({ data }: { data?: any }) => {
    const { navigateQuery, getQueries } = usePageRouter();
    const query = getQueries();

    return (
        <>
            <CCard style={{ minHeight: 0 }} >
                <p className='text-lg font-semibold'>Yangi nakleyka rasmini tekshirish</p>
                <div className="mt-6 flex gap-6">
                    <div>
                        <img src={data?.image ?? 'https://th.bing.com/th/id/R.61c0c952b431b396b50e2797e9712039?rik=RW5uMcJi0Z2rsg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fCar-PNG-Photos.png&ehk=emMA5t10uspNLJ%2bt4x6Ll5zpkyUB%2fcnWlYK8114xyUc%3d&risl=&pid=ImgRaw&r=0'} alt="sticker" className="max-w-[249px] w-full min-w-[249px] max-h-[150px] h-full rounded-xl" />
                    </div>
                    <div>
                        <span className="text-[#667085] text-sm">Yuborilgan vaqt</span>
                        <p className="text-base font-medium mt-2">{data?.created_at}</p>
                        <div className="mt-6 flex gap-3">
                            <AddButton iconLeft={false} text='Rad qilish' onClick={() => navigateQuery({ action: 'ignore' })} />
                            <AddButton id='saveButton' iconLeft={false} text='Qabul qilish' onClick={() => navigateQuery({ action: 'accept' })} />
                        </div>
                    </div>
                </div>
            </CCard>

            <Modal open={!!query?.action}>
                <CCard style={{ minHeight: 0 }} classes='max-w-[400px] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'>

                    {query.action == 'ignore' ? <Ignored /> : <Accepted date={data?.created_at} />}
                </CCard>
            </Modal>
        </>

    )
}

export default StickerControl