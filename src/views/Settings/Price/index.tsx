import CTabs from "../../../components/CElements/CTab";
import { useGetQueries } from "../../../hooks/useGetQueries";
// import { useSelector } from "react-redux";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { breadCrumbs, tabList } from "./Logic";
import { ToTashkent } from "./To";
import { PriceHistory } from "./PriceHistory";
import { FromTashkent } from "./From";
import { useSelector } from "react-redux";

const Price = () => {
  const { currentTab } = useGetQueries();
  const collapsed = useSelector((state: any) => state.sidebar.collapsed);
  // const { GetCurrentPage } = TabActions(currentTab);

  const GetCurrentPage = () => {
    switch (currentTab) {
      case "to_tashkent":
        return <ToTashkent />;
      case "price_history":
        return <PriceHistory />;
      default:
        return <FromTashkent />;
    }
  };

  return (
    <div className="pb-10">
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
      </Header>

      <div className={`px-5 fixed top-[90px] ${collapsed ? 'left-[70px]' : 'left-[280px]'}`}>
        <CTabs tabList={tabList} />
      </div>

      <div className="mt-[90px]">{GetCurrentPage()}</div>
    </div>
  );
};
export default Price;
