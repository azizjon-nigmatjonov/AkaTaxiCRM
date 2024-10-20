import { useGetQueries } from "../../../../hooks/useGetQueries";
import CModal from "../../../../components/CElements/CModal";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PlusIcon } from "../../../../components/UI/IconGenerator/Svg";
import CTable from "../../../../components/CElements/CTable";
import { FetchFunction, TableData } from "./Logic";
import usePageRouter from "../../../../hooks/useObjectRouter";

const DriversList = ({
  openModal,
  setOpenModal = () => {},
  data = {},
}: {
  data?: any;
  openModal: boolean;
  setOpenModal: (val: boolean) => void;
}) => {
  if (!openModal) return <></>;
  const query = useGetQueries();
  const { navigateQuery, navigateTo } = usePageRouter();

  const { passengerData, refetch, isLoading } = FetchFunction();
  const { headColumns, bodyColumns } = TableData(
    passengerData?.data,
    refetch
  );
  
  return (
    <div>
      <CModal
        title={
          query.driver_list
            ? "Aktiv haydovchilar"
            : "Bildirishnoma borgan haydovchilar"
        }
        open={openModal}
        handleClose={() => {
          navigateQuery({ suggestion: "" });
          setOpenModal(false);
        }}
        footerActive={false}
        minWidth={1000}
        titleCenter={false}
      >
        <div className="flex items-center justify-between">
          <p className="text-[24px] text-[var(--black)] font-semibold">
            {data?.from_region_name.split("viloyati")}
          </p>
          <IoIosArrowRoundForward
            size={30}
            style={{ color: "var(--gray40)" }}
          />
          <p className="text-[24px] text-[var(--black)] font-semibold">
            {data?.to_region_name.split("viloyati")}
          </p>
        </div>
        <div className="max-h-[450px] overflow-y-scroll mt-5 remove-scroll">
          <CTable
            headColumns={headColumns}
            bodyColumns={bodyColumns}
            isLoading={isLoading}
            filterParams={{}}
            handleFilterParams={() => {}}
            disablePagination={true}
            tableSetting={false}
          />
        </div>
        <div className="flex space-x-5 mt-5">
          <button
            className="cancel-btn"
            onClick={() => {
              navigateQuery({ suggestion: "" });
              setOpenModal(false);
            }}
          >
            Ortga
          </button>
          <button
            onClick={() =>
              navigateTo(
                `/passengers/active-passengers/attachment/${query.suggestion}`
              )
            }
            className="custom-btn"
          >
            <PlusIcon />
            <span className="ml-2">Yangi haydovchi biriktirish</span>
          </button>
        </div>
      </CModal>
    </div>
  );
};

export default DriversList;
