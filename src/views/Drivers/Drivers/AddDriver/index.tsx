import { useMemo } from 'react'
import { Header } from '../../../../components/Header'
import CCard from '../../../../components/CElements/CCard'
import MainInfo from '../Driver/Info/Main'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import HFSelect from '../../../../components/FormElements/HFSelect'
import { useQuery } from 'react-query'
import carService from '../../../../services/cars'
import HFTextField from '../../../../components/FormElements/HFTextField'
import DImageUpload from '../../../../components/CElements/CDivider/DImageUpload'
import AddButton from '../../../../components/Buttons/AddButton'
import CancelButton from '../../../../components/Buttons/Cancel'
import driverService from '../../../../services/drivers'
// import { websiteActions } from "../../../../store/website";
import usePageRouter from '../../../../hooks/useObjectRouter'
import { useDispatch } from 'react-redux'
import { websiteActions } from "../../../../store/website";
import CBreadcrumbs from '../../../../components/CElements/CBreadcrumbs'

const AddDriver = () => {
    const regions = useSelector((state: any) => state.regions.regions);
    const dispatch = useDispatch();
    const { navigateTo, navigateQuery } = usePageRouter();
    
    const Regions: any = useMemo(() => {
        return regions?.map((val: any) => {
            return {
                value: val.id,
                label: val.name.uz
            }
        })
    }, [regions])

    const { data: carModals } = useQuery(['GET_CAR_MODELS'], () => {
        return carService.getCarModel();
    });

    const carModal: any = useMemo(() => {
        if (!carModals?.data) return []
        const list = carModals?.data;
        return {
            list: list.map((model: any) => {
                return {
                    value: model.id,
                    label: model.name
                }
            })
        }
    }, [carModals])

    const { control, handleSubmit } = useForm({
        mode: "onSubmit",
    })

    const submitHandler = (e: any) => {
        e.phone = e.phone?.substring(1).replace(/\s+/g, '');
        const data = new FormData();
        for (let i in e) {
            data.append(i, e[i])
        }
        driverService.createElement(data).then(() => {
            dispatch(
                websiteActions.setAlertData({
                    title: "Ma'lumotlar yangilandi!",
                    translation: "common",
                })
            );

            setTimeout(() => {
                window.location.reload();
            }, 3000);
            navigateQuery({ id: "" })
        })
    }

    const breadCrumbs = useMemo(() => {
        return [
            {
                label: "Haydovchi",
                link: '/drivers/main'
            },
            {
                label: "Ro'yhat",
                link: '/drivers/main'
            },

            {
                label: "Yangi haydovchi qo’shish"
            }
        ]
    }, [])

    return (
        <div className='relative'>
            <Header sticky={true} >
                <CBreadcrumbs items={breadCrumbs} progmatic={true} type='link'/>
            </Header>
            <div className='px-6 '>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className='mt-3'>
                        <CCard style={{ minHeight: 0 }}>
                            <div className='bg-[var(--softGray)] p-[10px] rounded-lg text-xs font-semibold'>Asosiy ma’lumotlar</div>
                            <MainInfo control={control} />
                        </CCard>
                    </div>
                    <div className='mt-3'>
                        <CCard style={{ minHeight: 0 }}>
                            <div className='bg-[var(--softGray)] p-[10px] rounded-lg text-xs font-semibold'>Asosiy ma’lumotlar</div>
                            <div className='grid grid-cols-3  gap-5 mt-4'>
                                <HFSelect placeholder='Tanlang' name='car_id' label="Mashina ma'lumotlari" options={carModal?.list} control={control} />
                                <HFTextField name='car_number' label='Mashina raqami' control={control} placeholder='eg: 01 AB 123 C' />
                                <HFSelect placeholder='Tanlang' name='region_id' label="Viloyat" options={Regions} control={control} />
                                <div>
                                    <div className='flex items-start gap-5'>
                                        <DImageUpload control={control} style={{ height: 200 }} name='first_image' label='Oldi qismi rasmi' />
                                        <DImageUpload control={control} style={{ height: 200 }} name='second_image' label='Salon qismi rasmi' />
                                    </div>
                                </div>
                            </div>
                        </CCard>
                    </div>
                    <div className='mt-3'>
                        <CCard style={{ minHeight: 0, }}>
                            <div className='bg-[var(--softGray)] p-[10px] rounded-lg text-xs font-semibold'>Haydovchi rasmilari</div>
                            <div className='flex items-start justify-between  gap-5 mt-4'>
                                <div className='flex flex-wrap items-start gap-5'>
                                    <DImageUpload control={control} style={{ height: 200 }} name='profile_image' label='Profil avatar' />
                                    <DImageUpload control={control} style={{ height: 200 }} name='tex_passport' label='Tex.pasport' />
                                    <DImageUpload control={control} style={{ height: 200 }} name='driver_license' label='Haydovchilik guvohnoma rasmi' />
                                    <DImageUpload control={control} style={{ height: 200 }} name='selfie_driver_license' label='Haydovchilik guvohnoma bilan selfi' />
                                </div>
                            </div>
                        </CCard>
                    </div>
                    <div className='my-3 flex justify-end'>
                        <div className='flex gap-2'>
                            <CancelButton onClick={() => navigateTo('/drivers/main')} text='Bekor qilish' />
                            <AddButton type='submit' text='Qoshish' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddDriver