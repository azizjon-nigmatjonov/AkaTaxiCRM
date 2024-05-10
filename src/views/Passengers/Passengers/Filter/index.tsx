import CSelect from "../../../../components/CElements/CSelect";
import Filters from "../../../../components/UI/Filter";
import usePageRouter from "../../../../hooks/useObjectRouter";
import { VersionsList } from "../../../../constants/versions";
import { DivicesList } from "../../../../constants/devices";
import { GetRegion } from "./Logic";
import { CPeriodPicker } from "../../../../components/CElements/CPeriodPicker";
// import DropDown from "../../../../components/FormElements/DropDown";

export const FilterPassenger = () => {
  const { getQueries, navigateQuery } = usePageRouter();
  const { filter } = getQueries();
  const { regionList } = GetRegion();

  const handlerRegion = (evt: any) => navigateQuery({ region_id: evt });
  const handlerDiviceModel = (evt: any) => navigateQuery({ device_type: evt });
  const handlerVersion = (evt: any) => navigateQuery({ version: evt });
  const handlerGender = (evt: any) => navigateQuery({ gender: evt });

  return (
    <Filters filter={!!filter}>
      <div className="grid grid-cols-5 gap-x-4 w-full">
        <CPeriodPicker label="Vaqt" placeholder="Vaqtni tanlang" />
        {/* <DropDown
          label="Vaqt"
          name="Vaqt"
          placeholder="Tanlang"
          defaultValue={"01.01-.01.01"}
        /> */}
        <CSelect
          handlerValue={handlerDiviceModel}
          options={DivicesList}
          label="Operatsion sistema"
          placeholder="Tanglang"
        />
        <CSelect
          handlerValue={handlerVersion}
          options={VersionsList}
          label="Versiyalar"
          placeholder="Tanglang"
        />
        <CSelect
          handlerValue={handlerGender}
          options={[
            { value: "m", label: "Erkak" },
            { value: "f", label: "Ayol" },
          ]}
          label="Jinsi"
          placeholder="Tanlang"
        />
        <CSelect
          handlerValue={handlerRegion}
          options={regionList}
          label="Viloyat"
          placeholder="Tanlang"
        />
      </div>
    </Filters>
  );
};
