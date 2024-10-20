import CTable from "../../../components/CElements/CTable";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import { breadCrumbsItems } from "./Logic";

const ActionsHistory = () => {
  
  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrumbsItems} type="link" progmatic={true} />
      </Header>

      <div className="container">
        <CTable
          headColumns={[]}
          bodyColumns={[]}
          isResizeble={true}
          isLoading={false}
          filterParams={{}}
          handleFilterParams={() => {}}
        />
      </div>
    </>
  );
};

export default ActionsHistory;
