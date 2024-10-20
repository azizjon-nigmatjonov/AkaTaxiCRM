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
  const { storeFilters } = FilterFunctions({ filterParams, setFilterParams });

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };

  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrumbItems} type="link" progmatic={true} />
        <div>
          <AddButton
            text="Yangi xabar"
            onClick={() => navigate("/notifications/smsnotification/add_sms")}
          />
        </div>
      </Header>

      <div className="container">
        <CTable
          headColumns={headColumns}
          isLoading={isLoading}
          bodyColumns={tableData?.data}
          handleActions={handleActions}
          filterParams={filterParams}
          handleFilterParams={handleFilterParams}
          meta={tableData?.meta}
        />
      </div>
    </>
  );
};

export default SMSNotification;
