import { useSelector } from "react-redux";
import CSelect from "../../../../components/CElements/CSelect";
import DropDown from "../../../../components/FormElements/DropDown";
import Filters from "../../../../components/UI/Filter";
import usePageRouter from "../../../../hooks/useObjectRouter";
import { useMemo } from "react";

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

export const FilterPassenger = () => {
  const { getQueries, navigateQuery } = usePageRouter();
  const { filter } = getQueries();
  const regions = useSelector((state: any) => state.regions.regions);

  const handlerRegion = (evt: any) => {
    navigateQuery({ region_id: evt });
  };

  const handlerDiviceModel = (evt: any) => {
    navigateQuery({ device_type: evt });
  };

  const handlerVersion = (evt: any) => {
    navigateQuery({ version: evt });
  };

  const handlerGender = (evt: any) => {
    navigateQuery({ gender: evt });
  };

  const Regions = useMemo(() => {
    return regions?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regions]);

  return (
    <Filters filter={!!filter}>
      <div className="grid grid-cols-5 gap-x-4">
        <DropDown
          label="Vaqt"
          name="Vaqt"
          placeholder="Tanlang"
          defaultValue={"01.01-.01.01"}
        />
        <CSelect
          handlerValue={handlerDiviceModel}
          options={Divice}
          label="Operatsion sistema"
          placeholder="Tanglang"
        />
        <CSelect
          handlerValue={handlerVersion}
          options={Version}
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
          options={Regions}
          label="Viloyat"
          placeholder="Tanlang"
        />
      </div>
    </Filters>
  );
};
