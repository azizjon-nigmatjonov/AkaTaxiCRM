import { useMemo } from "react"
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs"
import { Header } from "../../../../components/Header"
import AddButton from "../../../../components/Buttons/AddButton"


const Booking = () => {

    const breadcrumbs = useMemo(() => {
        return [
            {
                label: "Yo'lovchi",
            },
            {
                label: "Aktiv",
                link: '/passengers/active_passengers'

            },
            {
                label: 'Buyurtma berish',
                // link: '/passengers/active_passengers'
            }
        ]
    }, [])

    return (
        <>
            <Header>
                <CBreadcrumbs items={breadcrumbs} progmatic={true} type="link" />
            </Header>
            <section className="px-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[var(--black)] text-lg font-semibold">Buyurtma berish</p>
                        <p className="text-[varr(--gray)] text-sm font-normal">Yo’lovchiga admin tomondan haydovchi topib berish</p>
                    </div>
                    <div>
                        <AddButton iconLeft={false} text="Haydovchi qidirish" />
                    </div>
                </div>
                
                <div>
                    <form>

                    </form>
                </div>
            </section>
        </>
    )
}

export default Booking