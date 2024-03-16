import { useForm } from "react-hook-form";
import CCard from "../../../../../components/CElements/CCard";
import MainInfo from "./Main";
import CarInfo from "./CarInfo";
import DriverImages from "./Images";
import AddButton from "../../../../../components/Buttons/AddButton";
import CancelButton from "../../../../../components/Buttons/Cancel";
import { Modal } from "@mui/material";
import { InfoIcon } from "../../../../../components/IconGenerator/Svg";
import usePageRouter from "../../../../../hooks/useObjectRouter";
import { useState } from "react";
import { useDispatch } from "react-redux";
import driverService from "../../../../../services/drivers";
import { websiteActions } from '../../../../../store/website';


const DriverInfo = ({ driver = {} }: { driver?: any }) => {
  const [alert, setAlert] = useState("Ma'lumotlarni o'zgartishish!")

  const dispatch = useDispatch()
  const { getQueries, navigateQuery, navigateTo } = usePageRouter();
  const query = getQueries();

  const { control, setValue, getValues } = useForm({
    mode: "onSubmit",
  });

  const deleteAccount = () => {
    setAlert('Haqiqatdan ham o’chirishni istaysizmi?'),
      navigateQuery({ passenger: 'delete' })
  }

  const updateInfo = () => {
    setAlert('Haqiqatdan ham ma’lumotlarni yangilashni istaysizmi?'),
      navigateQuery({ passenger: 'update' })
  }


  const alertMessage = (e: string) => {
    if (e == 'delete') {
      driverService.deleteElement(query?.id).then(() => {
        dispatch(
          websiteActions.setAlertData({
            title: "Ma'lumotlar o'chirildi!",
            translation: "common",
            type: 'error'
          })
        );
        navigateTo('/drivers/main')
      })
      navigateQuery({ passenger: '' })
    }
    else if (e == 'update') {
      const value = getValues();     
      let obj: any = {};
      Object.entries(driver).map(([keys, _]) => {
        Object.entries(value).map(([newkeys, _]) => {
          if (typeof value[newkeys] == 'undefined' || value[newkeys] == 'undefined') return;
          else if (driver[keys] === null) return;
          else if (keys == newkeys) {
            if (driver[keys] !== value[keys]) {
              obj[newkeys] = value[newkeys]
            }
          }
          return;
        })
      })

      obj.phone ? obj.phone = obj?.phone?.substring(1).replace(/\s+/g, '') : null;
      obj._method = 'PUT'
      const data = new FormData();

      for (let i in obj) {
        data.append(i, obj[i])
      }

      driverService.updateElement(query?.id, data).then(() => {
        dispatch(
          websiteActions.setAlertData({
            title: "Ma'lumotlar yangilandi!",
            translation: "common",
          })
        )
        navigateTo('/drivers/main')
      })
      navigateQuery({ passenger: '' })
    }
    else {
      navigateQuery({ passenger: '' })
    }
  }

  return (
    <>
      <div className="grid gap-5">
        <form>
          <CCard style={{ minHeight: "auto", }}>
            <p className="bg-[var(--softGray)] p-3 rounded-[10px] font-[600]">
              Asosiy ma’lumotlar
            </p>
            <MainInfo driver={driver} control={control} setValue={setValue} />
          </CCard>

          <CCard style={{ minHeight: "auto", marginTop: 18 }}>
            <p className="bg-[var(--softGray)] p-3 rounded-[10px] font-[600]">
              Mashina ma’lumotlari
            </p>
            <CarInfo driver={driver} control={control} setValue={setValue} />
          </CCard>

          <CCard style={{ minHeight: "auto", marginTop: 18 }}>
            <p className="bg-[var(--softGray)] p-3 rounded-[10px] font-[600]">
              Haydovchi rasmlari
            </p>

            <DriverImages driver={driver} control={control} setValue={setValue} />
          </CCard>

          <div className="flex items-center justify-between mt-6">
            <div><AddButton onClick={deleteAccount} iconLeft={false} text="Akkountni o'chirish" /></div>
            <div className="flex items-center gap-2">
              <CancelButton onClick={() => navigateTo('/drivers/main')} text='Bekor qilish' />
              <AddButton onClick={updateInfo} iconLeft={false} text="Saqlash" />
            </div>
          </div>
        </form>
      </div>

      <Modal open={!!query?.passenger}>
        <div className='grid place-items-center h-full'>
          <div className='bg-white px-6 py-8  max-w-[400px] mx-auto rounded-[20px]'>
            <div className='flex items-center gap-2'>
              <InfoIcon fill={'#FFC542'} />
              <p className='text-base font-medium text-[var(--black)]'>{alert}</p>
            </div>
            <div className='flex items-center gap-2 mt-6'>
              <CancelButton text="Yo'q" onClick={() => alertMessage('')} />
              <AddButton text='Ha' iconLeft={false} onClick={() => alertMessage(query?.passenger)} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DriverInfo;
