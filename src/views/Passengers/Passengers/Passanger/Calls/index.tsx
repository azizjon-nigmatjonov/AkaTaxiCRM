import CTable from "../../../../../components/CElements/CTable";
import { TableActions, TableButtonActions } from "./Logic";

export const PassengerCalls = () => {
  const { headColumns } = TableActions();
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
  return (
    <>
      <CTable
        headColumns={headColumns}
        bodyColumns={mockdata}
        count={1}
        isLoading={false}
        currentPage={1}
      />
      
      <TableButtonActions />
    </>
  );
};