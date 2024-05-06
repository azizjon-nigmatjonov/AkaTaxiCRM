import CBreadcrumbs from "../../components/CElements/CBreadcrumbs";
import { Header } from "../../components/UI/Header";
import { CallCard } from "./Call";
import { breadCrumbsItems } from "./Logic";
import { OperatorTable } from "./OperatorTable";
import { CallCenterStatistics } from "./Statistics";

const CallCenter = () => {
  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrumbsItems} />
      </Header>

      <div className="px-5 space-y-8 pb-10">
        <CallCard />
        <CallCenterStatistics />
        <OperatorTable />
      </div>
    </>
  );
};

export default CallCenter;
