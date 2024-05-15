import CFilterTabs from "../../components/CElements/CFilterTab";
import CBreadcrumbs from "../../components/CElements/CBreadcrumbs";
import { Header } from "../../components/UI/Header";
import { GetCurrentPage, breadCrumbsItems, tabList } from "./Logic";


const Regions = () => {
    const { currentPage } = GetCurrentPage()
  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrumbsItems} type="link" progmatic={true} />
      </Header>
      <div className="px-5">
        <div className="inline-block">
          <CFilterTabs tabList={tabList} slug="tab" />
        </div>
        <div className="bg-white border border-[var(--gray20)] common-shadow rounded-[18px]">
            {currentPage()}
        </div>
      </div>
    </>
  );
};

export default Regions;
