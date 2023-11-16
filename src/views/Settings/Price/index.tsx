import CTabs from "../../../components/CElements/CTab";
import { useGetQueries } from "../../../hooks/useGetQueries";
import DynamicPrice from "./DynamicPrice";
import StaticPrice from "./StaticPrice";
const tabList = [
  {
    slug: "static",
    name: "Statik narxlar",
  },
  {
    slug: "regional_price",
    name: "Viloyatlararo narxlar",
  },
];

const Price = () => {
  const { currentTab } = useGetQueries();
  return (
    <>
      <CTabs tabList={tabList} />

      <div>
        {currentTab === "regional_price" ? <DynamicPrice /> : <StaticPrice />}
      </div>
    </>
  );
};
export default Price;
