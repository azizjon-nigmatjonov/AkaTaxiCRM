import { useForm } from "react-hook-form";
import CCard from "../../../../../components/CElements/CCard";
import MainInfo from "./Main";
import CarInfo from "./CarInfo";
import DriverImages from "./Images";
import AddButton from "../../../../../components/UI/Buttons/AddButton";
import { Modal } from "@mui/material";
import { InfoIcon } from "../../../../../components/UI/IconGenerator/Svg";
import usePageRouter from "../../../../../hooks/useObjectRouter";
import { useState } from "react";
import { useDispatch } from "react-redux";
import driverService from "../../../../../services/drivers";
import { websiteActions } from "../../../../../store/website";
import Ignored from "./Modal";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { CarClass } from "./CarClass";

const DriverInfo = ({
  driver = {},
  refetch,
}: {
  driver?: any;
  refetch: any;
}) => {
  const [alert, setAlert] = useState("Ma'lumotlarni o'zgartirish!");
  const { id } = useParams();

  const dispatch = useDispatch();
  const { getQueries, navigateQuery, navigateTo } = usePageRouter();
  const query = getQueries();
  // const [loading, setLoading] = useState(false)

  const { control, setValue, getValues } = useForm({
    mode: "onSubmit",
  });

  const deleteAccount = () => {
    setAlert("Haqiqatdan ham o’chirishni istaysizmi?"),
      navigateQuery({ passenger: "delete" });
  };

  const updateInfo = () => {
    setAlert("Haqiqatdan ham ma’lumotlarni yangilashni istaysizmi?");
    navigateQuery({ passenger: "update" });
  };

  const { mutate: updateElement, isLoading } = useMutation({
    mutationFn: (data: any) => {
      return driverService.updateElement(data.id, data.data).then(() => {
        dispatch(
          websiteActions.setAlertData({
            mainTitle: "Muvaffaqiyatli amalga oshirildi",
            title: "Ma'lumotlar yangilandi!",
            translation: "common",
          })
        );
        navigateTo("/drivers/main");
      });
    },
  });

  const alertMessage = (e: string) => {
    if (isLoading) return;
    if (e == "delete") {
      driverService.deleteElement(id).then(() => {
        dispatch(
          websiteActions.setAlertData({
            mainTitle: "Ma'lumotlar o'chirildi!",
            title: "Sizning akkountingiz o'chirib tashlandi!",
            translation: "common",
            type: "error",
          })
        );
        navigateTo("/drivers/main");
      });
    } else if (e == "update") {
      const value = getValues();

      const obj: any = {};
      Object.entries(driver).map(([keys, _]) => {
        Object.entries(value).map(([newkeys, _]) => {
          if (
            typeof value[newkeys] == "undefined" ||
            value[newkeys] == "undefined"
          )
            return;
          else if (driver[keys] === null) return;
          else if (keys == newkeys) {
            if (driver[keys] !== value[keys]) {
              obj[newkeys] = value[newkeys];
            }
          }
          return;
        });
      });

      obj.phone
        ? (obj.phone = obj?.phone?.substring(1).replace(/\s+/g, ""))
        : null;
      // obj._method = "PUT";
      const data = new FormData();

      if (obj.second_image) {
        obj.car_second_image_id = obj.second_image
        delete obj.second_image
      }
      if (obj.first_image) {
        obj.car_first_image_id = obj.first_image
        delete obj.first_image
      }

      if (obj.profile_image) {
        obj.profile_image_id = obj.profile_image
        delete obj.profile_image
      }
      if (obj.tex_passport) {
        obj.tex_passport_id = obj.tex_passport
        delete obj.tex_passport
      }
      if (obj.driver_license) {
        obj.driver_license_id = obj.driver_license
        delete obj.driver_license
      }
      if (obj.selfie_driver_license) {
        obj.selfie_driver_license_id = obj.selfie_driver_license
        delete obj.selfie_driver_license
      }
        
      for (const i in obj) {
        data.append(i, obj[i]);
      }
      
      updateElement({ id, data });
    } else {
      navigateQuery({ passenger: "" });
    }
  };

  const acceptDriverInfo = () => {
    driverService.updateCarInfo(id, { status: "active" }).then(() => {
      refetch();
      dispatch(
        websiteActions.setAlertData({
          mainTitle: "Tasdiqlandi",
          title: "Sizning tasdiqlash so'rovingiz yuborildi!",
          translation: "common",
        })
      );
      navigateTo("/drivers/main");
    });
  };

  return (
    <>
      <div className="grid gap-5">
        <form>
          <CCard style={{ minHeight: "auto" }}>
            <p className="bg-[var(--softGray)] p-3 rounded-[10px] font-[600]">
              Mashina klasi
            </p>

            <CarClass />
          </CCard>
          <CCard style={{ minHeight: "auto" }} classes="mt-5">
            <p className="bg-[var(--softGray)] p-3 rounded-[10px] font-[600]">
              Asosiy ma’lumotlar
            </p>

            <MainInfo driver={driver} control={control} setValue={setValue} />
          </CCard>

          <CCard style={{ minHeight: "auto" }} classes="mt-5">
            <p className="bg-[var(--softGray)] p-3 rounded-[10px] font-[600]">
              Mashina ma’lumotlari
            </p>
            <CarInfo driver={driver} control={control} setValue={setValue} />
          </CCard>

          <CCard style={{ minHeight: "auto" }} classes="mt-5">
            <p className="bg-[var(--softGray)] p-3 rounded-[10px] font-[600]">
              Haydovchi rasmlari
            </p>

            <DriverImages
              driver={driver}
              control={control}
              setValue={setValue}
            />
          </CCard>

          {driver.status === "active" ? (
            <div className="flex items-center justify-between mt-6">
              <div>
                <AddButton
                  onClick={deleteAccount}
                  iconLeft={false}
                  text="Akkountni o'chirish"
                  permission="delete"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => navigateTo("/drivers/main")}
                >
                  Ortga qaytish
                </button>
                <button
                  type="button"
                  className="custom-btn"
                  onClick={() => updateInfo()}
                >
                  Saqlash
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-end">
              <div className="flex items-center justify-end gap-4 mt-5">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => navigateQuery({ accept: "true" })}
                >
                  Rad etish
                </button>
                <button
                  type="button"
                  className="custom-btn"
                  onClick={() => acceptDriverInfo()}
                >
                  Tasdiqlash
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      <Modal open={!!query?.passenger || !!query?.accept}>
        {query.passenger ? (
          <div className="grid place-items-center h-full">
            <div className="bg-white px-6 py-8  max-w-[400px] mx-auto rounded-[20px]">
              <div className="flex items-center gap-2">
                <InfoIcon fill={"#FFC542"} />
                <p className="text-base font-medium text-[var(--black)]">
                  {alert}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <button className="cancel-btn" onClick={() => alertMessage("")}>
                  Yo'q
                </button>
                <button
                  className={`custom-btn ${isLoading ? "disabled" : ""}`}
                  onClick={() => alertMessage(query?.passenger)}
                  disabled={isLoading}
                >
                  Ha
                </button>
              </div>
            </div>
          </div>
        ) : (
          <CCard
            style={{ minHeight: 0 }}
            classes="max-w-[400px] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
          >
            <Ignored />
          </CCard>
        )}
      </Modal>
    </>
  );
};

export default DriverInfo;
