import CTable from "../../../../../../components/CElements/CTable";
import { TableHeadContent } from "../TableHeadContent";
import { headColumns } from "./Logic";

export const ShareAppTable = () => {
  return (
    <>
      <TableHeadContent title="Dasturni ulashish uchun" text="+1 coin beriladi" />
      <div className="mt-4">
        <CTable
          headColumns={headColumns}
          bodyColumns={[]}
          count={123}
          isLoading={false}
          currentPage={1}
        />
      </div>
    </>
  );
};
