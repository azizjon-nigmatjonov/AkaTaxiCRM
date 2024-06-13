import CTable from "../../../../components/CElements/CTable";
import CModal from "../../../../components/CElements/CModal";
import { TableData } from "./Logic";

export const OffersModal = ({
  openModal = false,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: (val: boolean) => void;
}) => {
  const { headColumns } = TableData();
  return (
    <>
      <CModal
        title="Takliflar"
        open={openModal}
        handleClose={() => {
          setOpenModal(false);
        }}
        footerActive={false}
        minWidth={1000}
        titleCenter={false}
      >
        <div className="max-h-[450px] overflow-y-scroll mt-5 remove-scroll">
          <CTable
            headColumns={headColumns}
            bodyColumns={[]}
            isLoading={false}
            disablePagination={true}
            filterParams={{}}
            handleFilterParams={() => {}}
          />
        </div>
      </CModal>
    </>
  );
};
