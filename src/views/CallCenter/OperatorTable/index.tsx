import CTable from "../../../components/CElements/CTable";
import { TableActions, TableButtonActions } from "./Logic";

interface Props {
  bodyData: any;
  isLoading: boolean;
  filterParams: {};
}

export const OperatorTable = ({ bodyData, isLoading = false }: Props) => {
  const { headColumns } = TableActions();

  return (
    <div className="mt-5">
      <CTable
        headColumns={headColumns}
        bodyColumns={bodyData}
        isLoading={isLoading}
        disablePagination={true}
        filterParams={{ page: 1 }}
        handleFilterParams={() => {}}
      />

      <TableButtonActions />
    </div>
  );
};
