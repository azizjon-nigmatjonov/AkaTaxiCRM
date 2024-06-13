import { useMemo } from 'react'
import { Header } from '../../../../components/UI/Header'
import CCard from '../../../../components/CElements/CCard'
import MainInfo from '../Driver/Info/Main'
import { useForm } from 'react-hook-form'
import HFSelect from '../../../../components/FormElements/HFSelect'
import { useMutation, useQuery } from 'react-query'
import carService from '../../../../services/cars'
import HFTextField from '../../../../components/FormElements/HFTextField'
import { CDriverImageUpload } from '../../../../components/CElements/CDriverImageUpload'
// import AddButton from '../../../../components/UI/Buttons/AddButton'
import CancelButton from '../../../../components/UI/Buttons/Cancel'
import driverService from '../../../../services/drivers'
// import { websiteActions } from "../../../../store/website";
import usePageRouter from '../../../../hooks/useObjectRouter'
import { useDispatch } from 'react-redux'
import { websiteActions } from "../../../../store/website";
import CBreadcrumbs from '../../../../components/CElements/CBreadcrumbs'
import { usePlaces } from '../../../../hooks/usePlaces'
import { CircularProgress } from '@mui/material'
import { PlusIcon } from '../../../../components/UI/IconGenerator/Svg'
import { yupResolver } from '@hookform/resolvers/yup'
import { Validation } from './validate'
import { useNavigate } from 'react-router-dom'

const breadCrumbs = [
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

const AddDriver = () => {
    const schema = Validation()
    const { regionList } = usePlaces()
    const dispatch = useDispatch();
    const { navigateTo } = usePageRouter();
    const { control, handleSubmit } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema)
    })

    const navigate = useNavigate()

    const Regions: any = useMemo(() => {
        return regionList?.map((val: any) => {
            return {
                value: val.id,
                label: val.name.uz
            }
        })
    }, [regionList])

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


    const { mutate: addDriver, isLoading } = useMutation({
        mutationFn: (data: any) => {
            return driverService.createElement(data).then(() => {
                dispatch(
                    websiteActions.setAlertData({
                        mainTitle: '',
                        title: "Ma'lumotlar yangilandi!",
                        translation: "common",
                    })
                );
                // navigate(-1)
            });
        },
    });


    const submitHandler = (e: any) => {
        
        e.phone = e.phone?.substring(1).replace(/\s+/g, '');
        const data = new FormData();
        for (let i in e) {
            data.append(i, e[i])
        }
        
        addDriver(data)
        navigate(-1)

    }



    return (
        <div className='relative'>
            <Header sticky={true} >
                <CBreadcrumbs items={breadCrumbs} progmatic={true} type='link' />
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
                                        <CDriverImageUpload control={control} style={{ height: 200 }} name='car_first_image_id' required={true} label='Oldi qismi rasmi' />
                                        <CDriverImageUpload control={control} style={{ height: 200 }} name='car_second_image_id' required={true} label='Salon qismi rasmi' />
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
                                    <CDriverImageUpload control={control} style={{ height: 200 }} name='profile_image' required={true} label='Profil avatar' />
                                    <CDriverImageUpload control={control} style={{ height: 200 }} name='tex_passport_id' required={true} label='Tex.pasport' />
                                    <CDriverImageUpload control={control} style={{ height: 200 }} name='driver_license_id' required={true} label='Guvohnoma rasmi' />
                                    <CDriverImageUpload control={control} style={{ height: 200 }} name='selfie_driver_license_id' required={true} label=' Guvohnoma bilan selfi' />
                                </div>
                            </div>
                        </CCard>
                    </div> 
                    <div className='my-3 flex justify-end'>
                        <div className='flex gap-2'>
                            <CancelButton onClick={() => navigateTo('/drivers/main')} text='Bekor qilish' />
                            {/* <AddButton type='submit' text='Qoshish' /> */}
                            <button type='submit' className={`custom-btn ${isLoading ? 'disabled' : ''}`} disabled={isLoading} >
                                <div className='mr-2'>
                                    {isLoading ? <CircularProgress size={24} /> : <PlusIcon fill='white' />}
                                </div>
                                <span>Qo'shish</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddDriver