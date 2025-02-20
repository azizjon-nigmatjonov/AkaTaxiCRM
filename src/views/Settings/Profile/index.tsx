// import { useQuery } from "react-query";
import CCard from "../../../components/CElements/CCard";
import CImageUpload from "../../../components/CElements/CImageUpload";
import HFInputMask from "../../../components/FormElements/HFInputMask";
import HFTextField from "../../../components/FormElements/HFTextField";
import { useForm } from "react-hook-form";
import { EditIcon, LogoutIcon } from "../../../components/UI/IconGenerator/Svg";
import CustomBtn from "../../../components/CElements/CustomBtn";
import { useState } from "react";
import CModal from "../../../components/CElements/CModal";
import authService from "../../../services/auth/authService";
import CancelButton from "../../../components/UI/Buttons/Cancel";
import { authActions } from "../../../store/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { websiteActions } from "../../../store/website";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validation } from "./validate";
import { usePermissions } from "../../../hooks/usePermissions";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const schema = Validation();
  const user = useSelector((state: any) => state.auth.user);
  const [logout, setLogout] = useState(false);
  const { checkPermission } = usePermissions();

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
    if (!checkPermission("edit")) return
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
    sessionStorage.removeItem('has_route')
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-5">
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

      <div className="flex justify-end">
        <div className="mt-5 inline-block">
          <button
            type="submit"
            className={`custom-btn ${!checkPermission("edit") ? "unpermit" : ""}`}
          >
            <EditIcon />
            <span className="ml-2">Taxrirlash</span>
          </button>
        </div>
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
          <button className="custom-btn" onClick={() => Logout()}>
            Ha
          </button>
        </div>
      </CModal>
    </form>
  );
};

export default ProfilePage;
