import CSearchInput from "../../../components/CElements/CSearchInput";
import CSelect from "../../../components/CElements/CSelect";
import CTable from "../../../components/CElements/CTable";
import { TableActions, TableButtonActions } from "./Logic";

const mockdata = [
  {
    date: "12:00:00, 12.01.2024",
    who: "operator 1",
    status: "outgoing",
    phone: "30:00:00",
    lead: "not_hangup",
    id: 1,
  },
];

const selOptions = [
  {
    label: "Operator 1",
    value: 1,
  },
];

export const OperatorTable = () => {
  const { headColumns } = TableActions();

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-5">
        <div className="w-[270px]">
          <CSelect value={1} options={selOptions} id="filter" />
        </div>
        <CSearchInput handleChange={() => { }} />
      </div>
      <CTable
        headColumns={headColumns}
        bodyColumns={mockdata}
        count={1}
        isLoading={false}
        filterParams={{ page: 1 }}
        handleFilterParams={() => {}}
      />

      <TableButtonActions />
    </div>
  );
};
