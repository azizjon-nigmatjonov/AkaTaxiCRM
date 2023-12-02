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
import { useDispatch } from "react-redux";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const [logout, setLogout] = useState(false);
  const { control, setValue } = useForm({
    mode: "onSubmit",
  });

  const updateUserInfo = () => {
    const params = {
      name: "Muhammadaziz",
      email: "example@gmail.com",
      phone: "998994912730",
      old_password: "",
      new_password: "",
    };
    authService.updateUserInfo(params).then((res) => {
      console.log("res", res);
    });
  };

  // const { data: user } = useQuery(
  //   ["GET_ADMINS"],
  //   () => {
  //     return authService.getUserInfo();
  //   },
  //   {
  //     enabled: true,
  //   }
  // );

  const Logout = () => {
    dispatch(authActions.logout());
    window.location.reload();
  };

  return (
    <div>
      <CCard style={{ minHeight: "auto" }} classes="flex justify-between">
        <div className="flex items-center space-x-8">
          <div className="w-[150px]">
            <CImageUpload name="avatar" setValue={setValue} />
          </div>

          <div className="grid grid-cols-2 gap-4 w-[600px]">
            <HFTextField
              name="full_name"
              control={control}
              placeholder="Ism sharif"
              label="Ism sharif"
              setValue={setValue}
              required={true}
              // defaultValue={driver?.data?.full_name}
            />
            <HFInputMask
              name="phone"
              control={control}
              label={`Telefon raqam`}
              placeholder={`Telefon raqam`}
              required={true}
              mask={"+\\9\\9\\8 99 999 99 99"}
              setValue={setValue}
              // defaultValue={driver?.data?.phone}
            />
            <HFTextField
              name="login"
              control={control}
              placeholder="Login"
              label="Login"
              setValue={setValue}
              required={true}
              // defaultValue={driver?.data?.full_name}
            />
        
          </div>
        </div>
        <div>
          <CustomBtn
            text="Profildan chiqish"
            icon={<LogoutIcon />}
            handleClick={() => setLogout(true)}
          />
        </div>
      </CCard>

      <div className="flex justify-end mt-5">
        <AddButton
          text="Taxrirlash"
          iconLeft={false}
          style={{ width: "120px" }}
          onClick={() => updateUserInfo()}
        />
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
    </div>
  );
};

export default ProfilePage;
