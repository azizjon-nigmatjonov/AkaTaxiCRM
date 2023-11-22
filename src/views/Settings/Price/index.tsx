import AddButton from "../../../components/Buttons/AddButton";
import CTabs from "../../../components/CElements/CTab";
import { useGetQueries } from "../../../hooks/useGetQueries";
import usePageRouter from "../../../hooks/useObjectRouter";
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
  const { currentTab, edit } = useGetQueries();
  const { navigateQuery } = usePageRouter();

  return (
    <>
      <div className="flex justify-between">
        <CTabs tabList={tabList} />
        <AddButton
          onClick={() => navigateQuery({ edit: true })}
          iconLeft={false}
          text={edit ? "Bekor qilish" : "Tahrirlash"}
          style={{ maxWidth: "200px" }}
          id={edit ? "disableButton" : "addBtn"}
        />
      </div>

      <div>
        {currentTab === "regional_price" ? <DynamicPrice /> : <StaticPrice />}
      </div>
    </>
  );
};
export default Price;
