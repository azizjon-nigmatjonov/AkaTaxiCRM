import AddButton from "../../../components/Buttons/AddButton";
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
      <div className="flex justify-between">
        <CTabs tabList={tabList} />
        <AddButton iconLeft={false} text="Tahrirlash" style={{ maxWidth: '200px' }} />
      </div>

      <div>
        {currentTab === "regional_price" ? <DynamicPrice /> : <StaticPrice />}
      </div>
    </>
  );
};
export default Price;
