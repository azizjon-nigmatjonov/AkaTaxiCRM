import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../../components/UI/Header";
import { CreateFunction, NotificationData, breadCrumbItems } from "./Logic";
// import CRadio from "../../../../components/CElements/Radio";
import CCard from "../../../../components/CElements/CCard";
import HFSelect from "../../../../components/FormElements/HFSelect";
import CText from "../../../../components/CElements/CText";
import { HFPeriodPicker } from "../../../../components/FormElements/HFPeriodPicker";
import { useForm } from "react-hook-form";
import { HFMultipleSelect } from "../../../../components/FormElements/HFMultipleSelect";
import { UserGroup } from "./UserGroup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validation } from "./Validation";
const Divice = [
  { value: "ios", label: "IOS" },
  { value: "android", label: "Android" },
];

const Version = [
  { value: "v 1.1.04", label: "v 1.1.04" },
  { value: "v 1.1.03", label: "v 1.1.03" },
  { value: "v 1.1.02", label: "v 1.1.02" },
  { value: "v 1.1.01", label: "v 1.1.01" },
];

const AddNotification = () => {
  const schema = Validation();
  const { createNotification } = CreateFunction();
  const { regionOption } = NotificationData();
  const { control, handleSubmit, setValue } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    createNotification({ ...data, type: "firebase" });
  };

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" />
      </Header>

      <div className="px-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <CCard style={{ minHeight: 0 }}>
            <span className="text-base font-medium">Kimga yuborish kerak?</span>
            <UserGroup setValue={setValue} />

            <div className="grid grid-cols-5 gap-x-4">
              <HFPeriodPicker
                label="Vaqt"
                name="send_at"
                control={control}
                placeholder="Tanlang"
                required={true}
                // defaultValue={"01.01-.01.01"}
              />
              <HFMultipleSelect
                control={control}
                options={Divice}
                name="device_types"
                label="Operatsion sistema"
                placeholder="Tanglang"
              />
              <HFSelect
                control={control}
                options={Version}
                name="versions"
                label="Versiyalar"
                placeholder="Tanglang"
              />
              <HFSelect
                control={control}
                options={[
                  { label: "Erkak", value: "m" },
                  { label: "Ayol", value: "f" },
                ]}
                name="genders"
                label="Jinsi"
                placeholder="Tanglang"
              />
              <HFMultipleSelect
                control={control}
                options={regionOption}
                name="region_ids"
                label="Yashash joyi "
                placeholder="Tanglang"
              />
            </div>
          </CCard>

          <CText control={control} />

          <div className="flex justify-end">
            <div>
              <button className="custom-btn" type="submit">
                Bildirishnomani yuborish
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNotification;
