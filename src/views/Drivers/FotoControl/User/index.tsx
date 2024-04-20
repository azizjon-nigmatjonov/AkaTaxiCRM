import { useMemo } from "react"
import { useQuery } from "react-query"
import { Header } from "../../../../components/Header"
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs"
import driverService from "../../../../services/drivers"
import { useGetQueries } from '../../../../hooks/useGetQueries';
import DriverInfo from "./Info"
import StickerControl from "./StickerControl"
import StickerHistory from "./StickerHistory"


const FotoControlUser = () => {
    const { id } = useGetQueries()

    const { data: fotoControl } = useQuery(['GET_FOTOCONTROL_USER', id], () => {
        return driverService.getFotoControlUser(id)
    })

    const breadCrubmsItems = useMemo(() => {
        return [
            {
                label: 'Haydovchi', link: '/drivers/main'
            },
            {
                label: 'Foto nazorat', link: '/drivers/fotocontrolusers'
            },
            {
                label: fotoControl?.data?.full_name || 'User'
            }
        ]
    }, [fotoControl])




    return (
        <>
            <Header sticky={true}>
                <CBreadcrumbs items={breadCrubmsItems} type="link" />
            </Header>
            <div className="px-6 space-y-6">
                <DriverInfo data={fotoControl?.data} />
                {fotoControl?.data?.status != "verified" && <StickerControl data={fotoControl?.data} />}
                <StickerHistory data={fotoControl?.data} />
            </div>
        </>
    )
}

export default FotoControlUser