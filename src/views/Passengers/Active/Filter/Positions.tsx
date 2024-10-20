import { usePlaces } from "../../../../hooks/usePlaces";
import CSelect from "../../../../components/CElements/CSelect";

interface Props {
  filterParams: any;
  handleFilter: (val: string, val2: any) => void;
}

export const StartPositions = ({
  filterParams = {},
  handleFilter = () => {},
}: Props) => {
  const { RegionOptions, DistrictOptions, setLocalIds } = usePlaces();

  return (
    <div className="space-y-5">
      <CSelect
        label="Ketish viloyati"
        options={RegionOptions}
        value={filterParams?.start_region_id?.value}
        placeholder="Tanlang"
        handlerValue={(val: any) => {
          handleFilter("start_region_id", val);
          setLocalIds("region", val.value);
        }}
      />
      <CSelect
        label="Ketish tumani"
        options={DistrictOptions}
        value={filterParams?.start_district_id?.value}
        placeholder="Tanlang"
        disabled={!DistrictOptions?.length}
        handlerValue={(val: any) => handleFilter("start_district_id", val)}
      />
    </div>
  );
};

export const EndPositions = ({
  filterParams = {},
  handleFilter = () => {},
}: Props) => {
  const { RegionOptions, DistrictOptions,setLocalIds } = usePlaces();

  return (
    <div className="space-y-5">
      <CSelect
        label="Borish viloyati"
        options={RegionOptions}
        value={filterParams?.end_region_id?.value}
        placeholder="Tanlang"
        handlerValue={(val: any) => {
          setLocalIds("region", val.value);
          handleFilter("end_region_id", val);
        }}
      />
      <CSelect
        label="Borish tumani"
        options={DistrictOptions}
        value={filterParams?.end_district_id?.value}
        placeholder="Tanlang"
        disabled={!DistrictOptions?.length}
        handlerValue={(val: any) => handleFilter("end_district_id", val)}
      />
    </div>
  );
};
