import AddButton from "../../../components/UI/Buttons/AddButton";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import CTable from "../../../components/CElements/CTable";
import { useNavigate } from "react-router-dom";
import { FetchFunction, TableData } from "./Logic";

const breadCrumbsItems = [
  {
    label: "Xabarnomalar",
    link: "/notifications/news_notification",
  },
  {
    label: "Yangiliklar",
  },
];

const NewsNotification = () => {
  const navigate = useNavigate();
  const { tableData, refetch, isLoading } = FetchFunction();
  const { headColumns, handleActions } = TableData({ refetch });

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbsItems} progmatic={true} type="link" />
      </Header>
      <div className="px-6 flex justify-end mb-5">
        <div>
          <AddButton
            text="Yangi xabar"
            onClick={() => navigate("/notifications/new_notification/add_news")}
          />
        </div>
      </div>

      <div className="container">
        <CTable
          headColumns={headColumns}
          bodyColumns={tableData?.data}
          handleActions={handleActions}
          isLoading={isLoading}
          filterParams={{}}
          handleFilterParams={() => {}}
        />
      </div>
    </>
  );
};

export default NewsNotification;
