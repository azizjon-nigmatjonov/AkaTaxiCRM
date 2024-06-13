import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../../components/UI/Header";
import { CreateFunction, NotificationData, breadCrumbItems } from "./Logic";
import CCard from "../../../../components/CElements/CCard";
import CText from "../../../../components/CElements/CText";
import { HFPeriodPicker } from "../../../../components/FormElements/HFPeriodPicker";
import { useForm } from "react-hook-form";
import { HFMultipleSelect } from "../../../../components/FormElements/HFMultipleSelect";
import { UserGroup } from "./UserGroup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validation } from "./Validation";
import { useVersions } from "../../../../hooks/useVersions";
const Divice = [
  { value: "ios", label: "IOS" },
  { value: "android", label: "Android" },
];

// const Version = [
//   { value: "v 1.1.04", label: "v 1.1.04" },
//   { value: "v 1.1.03", label: "v 1.1.03" },
//   { value: "v 1.1.02", label: "v 1.1.02" },
//   { value: "v 1.1.01", label: "v 1.1.01" },
// ];

const AddNotification = ({
  breadCrumbs,
  type = "",
}: {
  breadCrumbs?: any;
  type?: string;
}) => {
  const schema = Validation();
  const { VersionOptions } = useVersions()
  const { createNotification } = CreateFunction({
    type: type ? type : "firebase",
  });
  const { regionOption } = NotificationData();
  const { control, handleSubmit, setValue } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  

  const onSubmit = (data: any) => {
    createNotification({ ...data });
  };


  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs
          items={breadCrumbs ? breadCrumbs : breadCrumbItems}
          progmatic={true}
          type="link"
        />
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
                defaultValue={new Date()}
              />
              <HFMultipleSelect
                control={control}
                options={Divice}
                name="device_types"
                label="Operatsion sistema"
                placeholder="Tanglang"
              />
              <HFMultipleSelect
                control={control}
                options={VersionOptions}
                name="versions"
                label="Versiyalar"
                placeholder="Tanglang"
              />
              <HFMultipleSelect
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
