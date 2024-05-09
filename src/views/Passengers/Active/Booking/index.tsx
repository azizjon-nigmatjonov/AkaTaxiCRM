import { useEffect, useMemo, useState } from "react"
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs"
import { Header } from "../../../../components/UI/Header"
import AddButton from "../../../../components/UI/Buttons/AddButton"
import CancelButton from "../../../../components/UI/Buttons/Cancel"
import { useForm } from "react-hook-form"
import Info from "./Form/Info"
import Seating from "./Seating"
import Features from "./Features"
import passengerService from '../../../../services/passengers';
import { useDispatch } from "react-redux"
import { websiteActions } from "../../../../store/website"
import usePageRouter from "../../../../hooks/useObjectRouter"
import priceService from "../../../../services/price";

const Booking = () => {
    const [seating, setSeating] = useState({})
    const [features, setFeatures] = useState({})
    const [getPrice, setGetPrice] = useState<any>({});
    const dispatch = useDispatch()
    const { progmatic, navigateTo } = usePageRouter();

    const { control, getValues  } = useForm({
        mode: 'onSubmit'
    })

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


    const SeatingHandle = (e: any) => {
        setSeating({ place_order: e });
        // let info: any = {};

        // let value = getValues()
        // Object.entries(value).map(([key, value]) => {
        //     if (key == 'start_location_id' || key == 'end_location_id') {
        //         info[key] = value
        //     }
        // })

        // setGetPrice({ ...getPrice, ...info, place_order: e })

        // priceService.getBookingPrice({ ...getPrice, ...info, place_order: e })
        // console.log(getPrice);

    }


    const FeatureHandle = (e: any) => {
        setFeatures(e)
        GetPrice(e)
    }

    const formsubmit = () => {
        const value = getValues();
        let obj: any = { ...value, ...seating, ...features };

        for (let i in obj) {
            if (i == 'from_region' || i == 'to_region') delete obj[i]
        }
        obj.passenger_phone = obj.passenger_phone.substring(1).replace(/\s+/g, '')
        // priceService.getBookingPrice(obj)
        passengerService.bookingTrip(obj).then(() => {
            dispatch(
                websiteActions.setAlertData({
                    title: "Qidiruv boshlandi!",
                    translation: "common",
            }))
            progmatic()
        }
        ).catch((err) => {
            dispatch(
                websiteActions.setAlertData({
                    mainTitle: 'Xatoliklarni tuzating',
                    title: err?.data?.error.message,
                    translation: "common",
                    type: 'error'
                }))
            console.log(err);

        })
    }

    useEffect(() => {
        GetPrice()
    }, [seating])

    const GetPrice = (e?: any) => {
        let info: any = {};
        let value = getValues()
        Object.entries(value).map(([key, value]) => {
            if (key == 'start_location_id' || key == 'end_location_id') {
                info[key] = value
            }
        })

        priceService.getBookingPrice({ ...info, ...seating, ...e }).then(data => setGetPrice(data?.data))

    }

    return (
        <>
            <Header sticky={true}>
                <CBreadcrumbs items={breadcrumbs} progmatic={true} type="link" />
            </Header>
            <section className="px-6 divide-y-[1px] divide-[#EAECF0]">
                <div className="flex items-center justify-between pb-5">
                    <div>
                        <p className="text-[var(--black)] text-lg font-semibold">Buyurtma berish</p>
                        <p className="text-[varr(--gray)] text-sm font-normal">Yo’lovchiga admin tomondan haydovchi topib berish</p>
                    </div>
                    <div>
                        <AddButton onClick={formsubmit} iconLeft={false} text="Haydovchi qidirish" />
                    </div>
                </div>
                <div>
                    <form className="divide-y-[1px] divide-[#EAECF0]">
                        <Info control={control} />
                        <Seating seatingHandle={SeatingHandle} />
                        <Features price={getPrice} featureHandle={FeatureHandle} />

                        <div className={`flex  justify-end py-4`}>
                            <div className="flex gap-4 ">
                                <CancelButton text='Bekor qilish' onClick={() => navigateTo('/passengers/active-passengers')} />
                                <AddButton onClick={formsubmit} iconLeft={false} text='Haydovchi qidirish' />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Booking