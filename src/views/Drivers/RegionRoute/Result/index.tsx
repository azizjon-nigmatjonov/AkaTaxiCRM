import { useMemo, useState } from "react";
import CTable from "../../../../components/CElements/CTable";
import { useQuery } from "react-query";
import fileService from "../../../../services/fileService";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import LTabs from "../../../../components/CElements/CTab/LineTab";
import { TableData } from "../Logic";
import { FilterFunctions } from "../../../../components/UI/Filter/Logic";

const tabList = [
  { slug: "", name: "Aktiv" },
  { slug: "on-way", name: "Yo'lda" },
  { slug: "canceled", name: "Bekor qilingan" },
  { slug: "done", name: "Yetib borgan" },
];

const Result = ({ selected }: { selected?: any }) => {
  const { currentPage, status } = useGetQueries();
  const { headColumns } = TableData();
  const [filterParams, setFilterParams]: any = useState({});
  const { storeFilters } = FilterFunctions({ filterParams, setFilterParams });

  const locations = useMemo(() => {
    const arr = selected[0].list?.map((item: any) => item.id) ?? [];
    const arr2 = selected[1].list?.map((item: any) => item.id) ?? [];

    return { start: arr.join(","), end: arr2?.join(",") };
  }, [selected[0]?.list?.length, selected[1]?.list?.length]);

  const { data, isLoading } = useQuery(
    [
      "GET_TRIPS",
      locations.start,
      locations.end,
      currentPage,
      status,
      selected[0]?.list?.length,
    ],
    () => {
      return fileService.getTrips({
        page: currentPage,
        perPage: 10,
        from_location_id: locations.start,
        to_location_id: locations.end,
        status,
      });
    }
  );

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };

  const bodyColumns: any = useMemo(() => {
    const list = data?.data ?? [];

    const modifiedList = list.map((li: any) => {
      return {
        ...li,
        userInfo: {
          full_name: li.name,
          gender: li.gender,
          image: li.image,
        },
        carInfo: {
          name: li.car,
          number: li.car_number,
        },
        fromStart: {
          city: li.from_region_name,
          district: li.from_district_name,
        },
        fromEnd: {
          city: li.to_region_name,
          district: li.to_district_name,
        },
      };
    });

    return {
      list: modifiedList,
      ...data,
    };
  }, [data]);

  return (
    <div className="mt-8">
      <div className="flex justify-between mb-[6px]">
        <p className="text-[var(--gray)] text-base font-medium">Natijalar</p>
        <span className="text-[var(--main)] text-base font-medium">
          {bodyColumns.list.length ?? 0} ta haydovchi
        </span>
      </div>
      <LTabs tabList={tabList} />
      <CTable
        headColumns={headColumns}
        bodyColumns={bodyColumns.list}
        meta={bodyColumns?.meta}
        disablePagination={false}
        isResizeble={true}
        isLoading={isLoading}
        filterParams={filterParams}
        handleFilterParams={handleFilterParams}
      />
    </div>
  );
};

export default Result;
