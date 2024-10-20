import { UseAdmins } from "../../../../hooks/useAdmins";
import CSelect from "../../../../components/CElements/CSelect";
import Filters from "../../../../components/UI/Filter";
import { FilterFunctions } from "../../../../components/UI/Filter/Logic";
import { UseOperators } from "../../../../hooks/useOperators";

interface Props {
  filterParams: any;
  setFilterParams: (val: any) => void;
}

export const ReminderFilter = ({ filterParams, setFilterParams }: Props) => {
  const { adminOptions } = UseAdmins();
  const { operatorOptions } = UseOperators({ type: "id" });
  const { collectFilter } = FilterFunctions({ filterParams, setFilterParams });

  const handleFilter = (type: string, val: any) => {
    collectFilter({ type, val });
  };
  return (
    <div className="container">
      <Filters filterParams={filterParams} setFilterParams={setFilterParams}>
        <div className="space-y-5">
          <CSelect
            options={adminOptions}
            label="Adminlar"
            placeholder="Tanlang"
            value={filterParams?.reporter_id?.value}
            handlerValue={(val: any) => handleFilter("reporter_id", val)}
          />
          <CSelect
            options={operatorOptions}
            label="Operator"
            placeholder="Tanlang"
            value={filterParams?.performer_id?.value}
            handlerValue={(val: any) => handleFilter("performer_id", val)}
          />
        </div>
      </Filters>
    </div>
  );
};
