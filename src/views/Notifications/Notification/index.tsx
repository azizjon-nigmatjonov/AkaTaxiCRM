import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import AddButton from "../../../components/UI/Buttons/AddButton";
import { useNavigate } from "react-router-dom";
import CTable from "../../../components/CElements/CTable";
import { FetchFunction, TableData } from "./Logic";
import { useState } from "react";
import { FilterFunctions } from "../../../components/UI/Filter/Logic";

const breadCrumbItems = [
  {
    label: "Xabarnomalar",
    link: "/notifications/notification",
  },
  {
    label: "Bildirishnomalar",
  },
];

const Notification = () => {
  const navigate = useNavigate();
  const { tableData, isLoading } = FetchFunction();
  const { headColumns, handleActions } = TableData();
  const [filterParams, setFilterParams]: any = useState({});
  const { storeFilters } = FilterFunctions({ filterParams, setFilterParams });

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbItems} type="link" />
        <div>
          <AddButton
            text="Yangi bildirishnoma"
            onClick={() =>
              navigate("/notifications/notification/add_notification")
            }
          />
        </div>
      </Header>

      <section className="px-6">
        <CTable
          headColumns={headColumns}
          bodyColumns={tableData?.data}
          isLoading={isLoading}
          handleActions={handleActions}
          clickable={true}
          meta={tableData?.meta}
          filterParams={filterParams}
          handleFilterParams={handleFilterParams}
        />
      </section>
    </>
  );
};

export default Notification;
