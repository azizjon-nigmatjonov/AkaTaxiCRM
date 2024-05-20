import { useMemo, useState } from "react";
import CRadio from "../../../../../components/CElements/Radio";
import CCard from "../../../../../components/CElements/CCard";
import HFSelect from "../../../../../components/FormElements/HFSelect";
import CText from "../../../../../components/CElements/CText";
import AddButton from "../../../../../components/UI/Buttons/AddButton";
import { usePlaces } from "../../../../../hooks/usePlaces";
import { HFPeriodPicker } from "../../../../../components/FormElements/HFPeriodPicker";

interface Props {
  control?: any;
  submitHandler: (evt: any) => void;
}

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

const Setting = ({ control, submitHandler }: Props) => {
  const [value, setValue] = useState("Hammasi");

  const handleChange = (e: any) => {
    setValue(e);
    submitHandler(e);
  };

  const { regionList } = usePlaces();

  const Regions = useMemo(() => {
    return regionList?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regionList]);

  return (
    <div className="space-y-6">
      <CCard style={{ minHeight: 0 }}>
        <span className="text-base font-medium">Kimga yuborish kerak?</span>
        <div className="grid grid-cols-6 gap-x-5 mb-4 mt-3">
          <CRadio label={"Hammasi"} value={value} handleChange={handleChange} />
          <CRadio
            label={"Haydovchi"}
            value={value}
            handleChange={handleChange}
          />
          <CRadio
            label={"Yo'lovchi"}
            value={value}
            handleChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-5">
          <HFPeriodPicker
            label="Vaqt"
            name="Vaqt"
            control={control}
            placeholder="Tanlang"
            // defaultValue={"01.01-.01.01"}
          />
          <HFSelect
            control={control}
            options={Divice}
            name={"system"}
            label="Operatsion sistema"
            placeholder="Tanglang"
          />
          <HFSelect
            control={control}
            options={Version}
            name={"version"}
            label="Versiyalar"
            placeholder="Tanglang"
          />
          <HFSelect
            control={control}
            options={[
              { label: "Erkak", value: "m" },
              { label: "Ayol", value: "f" },
            ]}
            name={"gender"}
            label="Jinsi  "
            placeholder="Tanglang"
          />
          <HFSelect
            control={control}
            options={Regions}
            name={"place"}
            label="Yashash joyi "
            placeholder="Tanglang"
          />
        </div>
      </CCard>

      <CText control={control} />

      <div className="flex justify-end">
        <div>
          <AddButton
            iconLeft={false}
            text="Bildirishnomani yuborish"
            onClick={submitHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Setting;
