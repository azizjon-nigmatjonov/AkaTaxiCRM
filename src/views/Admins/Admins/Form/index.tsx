import { useForm } from "react-hook-form";
import { Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../../components/FormElements/HFTextField";
import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../../components/CElements/CModal";
import HFInputMask from "../../../../components/FormElements/HFInputMask";
import { useQuery } from "react-query";
import roleService from "../../../../services/rolls";
import HFSelect from "../../../../components/FormElements/HFSelect";
import { useMemo } from "react";
import adminService from "../../../../services/admins";
import { useDispatch } from "react-redux";
import { websiteActions } from "../../../../store/website";
import { AdminData } from "./Function";
const Form = ({ refetch, id }: { refetch: () => void, id: string }) => {
  const dispatch = useDispatch();
  const schema = Validation();
  const adminData = AdminData(id)
  console.log(adminData);
  
  const { navigateQuery } = usePageRouter();
  const { control, setValue, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  
  const { data: rolls } = useQuery(
    ["GET_ROLLS"],
    () => {
      return roleService.getList();
    },
    {
      enabled: true,
    }
  );

  const SelecTList = useMemo(() => {
    if (!rolls) return [];
    const arr = rolls.data.data ?? [];
    return (arr as any).map((item: any) => {
      return {
        ...item,
        label: item.name,
        value: item.id,
      };
    });
  }, [rolls]);

  const HandleSuccess = (title: string) => {
    dispatch(
      websiteActions.setAlertData({
        title: title,
        translation: "common",
      })
    );

    navigateQuery({ id: "" });
    reset();
  };

  const onSubmit = (data: any) => {
    data.phone = data.phone.substring(1).replace(/\s+/g, "");
    const params = data;

    adminService.createAdmin(params).then(() => {
      HandleSuccess("Admin yaratildi!");
      refetch()
    });
  };

  return (
    <CModal
      title="add_new_admin"
      open={true}
      handleClose={() => navigateQuery({ id: "" })}
      footerActive={false}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid space-y-3">
          <HFTextField
            name="name"
            control={control}
            placeholder="Ism familya"
            label="Ism familya"
            setValue={setValue}
            required={true}
          />
          <HFInputMask
            name="phone"
            control={control}
            label={`Telefon raqam`}
            placeholder={`Telefon raqam`}
            required={true}
            mask={"+\\9\\9\\8 99 999 99 99"}
          />
          <HFTextField
            name="email"
            control={control}
            placeholder="Email"
            label="Email"
            setValue={setValue}
            type="email"
          />
          <HFSelect
            name="roles"
            control={control}
            options={SelecTList}
            label="Rolni tanlang"
            placeholder="Rolni tanlang"
            required={true}
            setValue={setValue}
            // defaultValue={partnerInfo?.region_id}
          />
          <HFTextField
            name="password"
            control={control}
            placeholder="Password"
            label="Password"
            setValue={setValue}
            type="password"
            activatePassword={true}
            required={true}
          />
        </div>
        <div className="mt-5">
          <button type="submit" className="custom-btn">
            Tasdiqlash
          </button>
        </div>
      </form>
    </CModal>
  );
};

export default Form;
