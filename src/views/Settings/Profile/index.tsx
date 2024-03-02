// import { useQuery } from "react-query";
import AddButton from "../../../components/Buttons/AddButton";
import CCard from "../../../components/CElements/CCard";
import CImageUpload from "../../../components/CElements/CImageUpload";
import HFInputMask from "../../../components/FormElements/HFInputMask";
import HFTextField from "../../../components/FormElements/HFTextField";
import { useForm } from "react-hook-form";
import { LogoutIcon } from "../../../components/IconGenerator/Svg";
import CustomBtn from "../../../components/Buttons/CustomBtn";
import { useState } from "react";
import CModal from "../../../components/CElements/CModal";
import authService from "../../../services/auth/authService";
import CancelButton from "../../../components/Buttons/Cancel";
import { authActions } from "../../../store/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { websiteActions } from "../../../store/website";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validation } from "./validate";


const ProfilePage = () => {
  const dispatch = useDispatch();
  const schema = Validation();
  const user = useSelector((state: any) => state.auth.user);
  const [logout, setLogout] = useState(false);

  const {
    control,
    setValue,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  

  const onSubmit = () => {
    const params: any = getValues();

    

    params.phone = params.phone?.substring(1)?.replace(/\s+/g, "");
    authService.updateUserInfo(params).then(() => {
      dispatch(
        websiteActions.setAlertData({
          title: "Ma'lumotlar yangilandi!",
          translation: "common",
        })
      );

      // setTimeout(() => {
      //   window.location.reload();
      // }, 3000);
    });
  };

  const Logout = () => {
    dispatch(authActions.logout());
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CCard style={{ minHeight: "auto" }}>
        <div className="flex justify-between">
          <div className="flex items-center space-x-8">
            <div className="w-[150px]">
              <CImageUpload
                name="image_id"
                setValue={setValue}
                defaultValue={user?.image}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 w-[600px]">
              <HFTextField
                name="name"
                control={control}
                placeholder="Ism"
                label="Ism"
                setValue={setValue}
                required={true}
                defaultValue={user?.name}
                errors={errors}
              />
              <HFInputMask
                name="phone"
                control={control}
                label={`Telefon raqam`}
                placeholder={`Telefon raqam`}
                required={true}
                mask={"+\\9\\9\\8 99 999 99 99"}
                setValue={setValue}
                defaultValue={user?.phone}
                errors={errors}
              />
              <HFTextField
                name="email"
                control={control}
                placeholder="Login"
                label="Login"
                setValue={setValue}
                required={true}
                defaultValue={user?.email}
                type="email"
                errors={errors}
              />
            </div>
          </div>
          <div>
            <CustomBtn
              text="Profildan chiqish"
              icon={<LogoutIcon />}
              handleClick={() => setLogout(true)}
              type="button"
            />
          </div>
        </div>

        <h2 className="mt-10 font-medium mb-2 text-2xl">Parolni yangilash</h2>
        <div className="w-1/2 grid grid-cols-2 gap-4">
          <HFTextField
            name="old_password"
            control={control}
            placeholder="Parol"
            label="Parol"
            setValue={setValue}
          />
          <HFTextField
            name="new_password"
            control={control}
            placeholder="Yangi parol"
            label="Yangi parol"
            setValue={setValue}
          />
        </div>
      </CCard>

      <div className="flex justify-end mt-5">
        <button
          type="submit"
          className="px-10 h-[48px] bg-[var(--main)] text-white rounded-[10px]"
        >
          Taxrirlash
        </button>
      </div>

      <CModal
        open={logout}
        handleClose={() => setLogout(false)}
        footerActive={false}
      >
        <p className="text-[var(--danger)] font-medium">
          Akkaunt dan chiqmoqchimisiz!
        </p>

        <div className="grid gap-2 grid-cols-2 mt-8">
          <CancelButton text="Yo'q" onClick={() => setLogout(false)} />
          <AddButton iconLeft={false} text="Ha" onClick={() => Logout()} />
        </div>
      </CModal>
    </form>
  );
};

export default ProfilePage;
