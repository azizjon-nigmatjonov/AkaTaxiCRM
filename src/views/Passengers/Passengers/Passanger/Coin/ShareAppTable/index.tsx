import CTable from "../../../../../../components/CElements/CTable";
import { TableHeadContent } from "../TableHeadContent";
import { headColumns } from "./Logic";

export const ShareAppTable = ({
  list = [],
  isLoading = false,
}: {
  list: any;
  isLoading: boolean;
}) => {
  return (
    <>
      <TableHeadContent
        title="Dasturni ulashish uchun"
        text="+1 coin beriladi"
      />
      <div className="mt-4">
        <CTable
          headColumns={headColumns}
          bodyColumns={list}
          count={123}
          isLoading={isLoading}
          currentPage={1}
        />
      </div>
    </>
  );
};
