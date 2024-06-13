import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import AddButton from "../../../components/UI/Buttons/AddButton";
import CTable from "../../../components/CElements/CTable";
import { useNavigate } from "react-router-dom";
import { FetchFunction, TableData } from "./Logic";
import { useState } from "react";
import { FilterFunctions } from "../../../components/UI/Filter/Logic";

const breadCrumbItems = [
  {
    label: "Xabarnomalar",
    link: "/notifications/notification",
  },
  {
    label: "SMS xabarnoma",
  },
];

const SMSNotification = () => {
  const navigate = useNavigate();
  const { tableData, isLoading } = FetchFunction();
  const { headColumns, handleActions } = TableData();
  const [filterParams, setFilterParams]: any = useState({});
  const { storeFilters } = FilterFunctions({filterParams, setFilterParams});

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };
    
  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbItems} type="link" progmatic={true} />
      </Header>
      <div className="flex items-center justify-end px-5 pb-5">
        <div>
          <AddButton
            text="Yangi xabar"
            onClick={() => navigate("/notifications/smsnotification/add_sms")}
          />
        </div>
      </div>

      <div className="container">
        <CTable
          headColumns={headColumns}
          isLoading={isLoading}
          bodyColumns={tableData?.data}
          handleActions={handleActions}
          filterParams={filterParams}
          handleFilterParams={handleFilterParams}
          count={tableData?.meta?.pageCount}
          totalCount={tableData?.meta?.totalCount}
        />
      </div>
    </>
  );
};

export default SMSNotification;
