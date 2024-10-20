import CTable from "../../../../../../components/CElements/CTable";
import { TableHeadContent } from "../TableHeadContent";
import { headColumns } from "./Logic";

export const PassengerTable = ({ list = [], isLoading = true }: { list: any, isLoading: boolean }) => {
  
  return (
    <>
      <TableHeadContent
        title="Boshqa yo’lovchi uchun"
        text="+1 coin beriladi"
      />
      
      <div className="mt-4">
        <CTable
          headColumns={headColumns}
          bodyColumns={list}
          isLoading={isLoading}
          filterParams={{}}
          handleFilterParams={() => {}}
        />
      </div>
    </>
  );
};
