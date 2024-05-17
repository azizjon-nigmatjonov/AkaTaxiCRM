// import CFilterTabs from "../../../components/CElements/CFilterTab";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import { breadCrumbsItems } from "./Logic";
import Region from "./Region";

export const Regions = () => {

  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrumbsItems} type="link" progmatic={true} />
      </Header>
      <div className="px-5">
        <div className="bg-white border border-[var(--gray20)] common-shadow rounded-[18px]">
          <Region />
        </div>
      </div>
    </>
  );
};

