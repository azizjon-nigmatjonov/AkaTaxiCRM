import { useMemo, useState } from 'react';
import { useQuery } from "react-query";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useGetQueries } from "../../../../hooks/useGetQueries"
import passengerService from "../../../../services/passengers";
import CCard from "../../../../components/CElements/CCard";
import { InfoIcon } from '../../../../components/IconGenerator/Svg';
import HFTextField from '../../../../components/FormElements/HFTextField';
import { HFDatePicker } from '../../../../components/FormElements/HFDatePicker';
import HFSelect from '../../../../components/FormElements/HFSelect';
import regionService from '../../../../services/regions';
import AddButton from '../../../../components/Buttons/AddButton';
import CancelButton from '../../../../components/Buttons/Cancel';
import HFInputMask from '../../../../components/FormElements/HFInputMask';
import usePageRouter from '../../../../hooks/useObjectRouter';
import { Modal } from '@mui/material'
import PImageUpdate from './ImageUpdate';
import { websiteActions } from '../../../../store/website';


const SelectGender = [
  { id: 1, value: 'm', label: 'Male' },
  { id: 2, value: 'f', label: 'Female' }
]

const PassengerProfile = () => {
  const dispatch = useDispatch()
  const [alert, setAlert] = useState('')
  const { id, } = useGetQueries();
  const { getQueries } = usePageRouter();
  const query = getQueries();
  const { navigateQuery, navigateTo } = usePageRouter()

  const { data } = useQuery(['GET_PASSANGER', id], () => {
    return passengerService.getElement(id)
  })

  const { data: regions } = useQuery(["GET_REGIONS_LIST"], () => {
    return regionService.getList();
  });

  const SelecTList = useMemo(() => {
    if (!regions?.data) return [];
    return (regions.data as any).map((item: any) => {
      return {
        ...item,
        label: item.name?.uz,
        value: item.id,
      };
    });
  }, [regions]);

  const { control, setValue, getValues } = useForm({
    mode: 'onSubmit',
  })

  const passenger = useMemo(() => {
    return data?.data ?? {}
  }, [data])

  const deleteAccount = () => {
    navigateQuery({ passenger: 'delete' })
    setAlert('Haqiqatdan ham o’chirishni istaysizmi?')
  }

  const updateProfile = () => {
    navigateQuery({ passenger: 'update' })
    setAlert('Haqiqatdan ham ma’lumotlarni yangilashni istaysizmi?')
  }

  const alertMessage = (e: string) => {
    if (e == 'delete') {
      passengerService.deleteElement(query.id).then(() => {
        dispatch(
          websiteActions.setAlertData({
            title: "Ma'lumotlar o'chirildi!",
            translation: "common",
            type: 'error'
          })
        );
        navigateTo('/passengers/main')
      })
      navigateQuery({ passenger: '' })
    } else if (e == 'update') {
      const data = getValues()
      data.phone = data.phone.substring(1).replace(/\s+/g, '')
      data.image_id = String(data?.image_id)
      passengerService.updateElement(query?.id, data).then(() => {
        dispatch(
          websiteActions.setAlertData({
            title: "Ma'lumotlar yangilandi!",
            translation: "common",
          })
        );
        navigateTo('/passengers/main')
      })
      navigateQuery({ passenger: '' })
    } else {
      navigateQuery({ passenger: '' })
    }
  }
  
  
  return (
    <div>
      <CCard style={{ minHeight: 0 }}>
        <div className='flex items-start gap-4 '>

          <div className='relative'>
            <PImageUpdate control={control} setValue={setValue} name='image_id' defaultValue={passenger?.image_id} />
          </div>

          <div className='w-full'>
            <div className='w-full  flex items-center gap-6'>
              <HFTextField control={control} name='full_name' setValue={setValue} required={true} placeholder='Ism familiya' label='Ism familiya' defaultValue={passenger?.full_name} />

              <HFDatePicker name="birthday" label="Tug'ilgan sana" control={control} required={true} placeholder="Tug'ilgan sana"  />

              <HFSelect
                name="gender"
                control={control}
                options={SelectGender}
                label="Jinsi"
                placeholder="Jinsi"
                required={true}
                setValue={setValue}
                defaultValue={passenger?.gender}
              />
            </div>

            <div className='mt-6 flex items-start gap-6'>
              <HFSelect
                name="region_id"
                control={control}
                options={SelecTList}
                label="Viloyat"
                placeholder="Viloyat"
                required={true}
                setValue={setValue}
                defaultValue={passenger?.region_id}
              />
              <HFInputMask control={control}
                name="phone"
                setValue={setValue}
                mask={"+\\9\\9\\8 99 999 99 99"}
                label="Tel.raqam"
                placeholder="Tel.raqam"
                required={true}
                defaultValue={passenger?.phone} />
            </div>
          </div>
        </div>
      </CCard>

      <div className='flex items-center justify-between mt-6'>
        <div ><AddButton onClick={deleteAccount} iconLeft={false} text="Akkauntni o'chirish" /></div>
        <div className='flex items-centet gap-2'>
          <CancelButton onClick={() => navigateTo('/passengers/main')} text='Bekor qilish' />
          <AddButton onClick={updateProfile} iconLeft={false} text="Saqlash" />
        </div>
      </div>

      <Modal open={!!query?.passenger}>
        <div className='grid place-items-center h-full'>
          <div className='bg-white px-6 py-8  max-w-[400px] mx-auto rounded-[20px]'>
            <div className='flex items-center gap-2'>
              <InfoIcon fill={'#FFC542'}/>
              <p className='text-base font-medium text-[var(--black)]'>{alert}</p>
            </div>
            <div className='flex items-center gap-2 mt-6'>
              <CancelButton text="Yo'q" onClick={() => alertMessage('')} />
              <AddButton text='Ha' iconLeft={false} onClick={() => alertMessage(query?.passenger)} />
            </div>
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default PassengerProfile