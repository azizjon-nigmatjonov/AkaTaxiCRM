import usePageRouter from "../../../../hooks/useObjectRouter";
import { ListTable } from "../../../../components/UI/ListTable";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import { FetchFunction } from "../Logic";

const Region = () => {
  const { navigateQuery } = usePageRouter();
  const {
    regions,
    districts,
    villages,
    villageLoading,
    districtLoading,
    regionLoading,
    regionRefetch,
    districtRefetch,
    villageRefetch,
  } = FetchFunction();
  const query = useGetQueries();
  const refetch = (type: string) => {
    if (type === "region") {
      regionRefetch();
    } else if (type === "district") {
      districtRefetch();
    } else {
      villageRefetch();
    }
  };

  const handleClickActions = (type: string, id?: number) => {
    const arr = type.split("_");

    if (arr[0] === "remove") {
      if (query?.["edit_" + arr[1]]) navigateQuery({ ["edit_" + arr[1]]: "" });
      else navigateQuery({ ["add_" + arr[1]]: "" });

      return;
    }

    navigateQuery({ [type]: id });
  };

  return (
    <div className="rounded-[18px] overflow-hidden">
      <div className="grid grid-cols-3">
        <ListTable
          id={query?.region}
          title="Viloyatlar"
          textBtn="Viloyat qo'shish"
          list={regions}
          isLoading={regionLoading}
          type="region"
          refetch={refetch}
          handleClickActions={handleClickActions}
          openModal={!!query?.edit_region || !!query?.add_region}
        />
        <ListTable
          id={query?.district}
          oneStepId={query?.region}
          title="Tumanlar"
          textBtn="Tuman qo'shish"
          list={districts}
          type="district"
          refetch={refetch}
          isLoading={districtLoading}
          handleClickActions={handleClickActions}
          openModal={!!query?.edit_district || !!query?.add_district}
        />
        <ListTable
          id={query?.village}
          oneStepId={query?.district}
          title="Qishloqlar"
          textBtn="Qishloq qo'shish"
          list={villages}
          type="village"
          refetch={refetch}
          isLoading={villageLoading}
          handleClickActions={handleClickActions}
          openModal={!!query?.edit_village || !!query?.add_village}
        />
      </div>
    </div>
  );
};

export default Region;
