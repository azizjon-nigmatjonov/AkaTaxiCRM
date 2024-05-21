import { useMemo } from "react";
import CTable from "../../../../components/CElements/CTable";
import { useQuery } from "react-query";
import fileService from "../../../../services/fileService";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import LTabs from "../../../../components/CElements/CTab/LineTab";
import { TableData } from "../Logic";

const tabList = [
  { slug: '', name: 'Aktiv' },
  { slug: 'on-way', name: "Yo'lda" },
  { slug: 'canceled', name: 'Bekor qilingan' },
  { slug: 'done', name: 'Yetib borgan' }
]

const Result = () => {
  const { start, end, currentPage, status } = useGetQueries();
  const { headColumns } = TableData()
  
  const { data, isLoading } = useQuery(['GET_TRIPS', start, end, currentPage, status], () => {
    return fileService.getTrips({
      page: currentPage, perPage: 10,
      from_location_id:  decodeURIComponent(start).split(',').map(li => parseInt(li)),
      to_location_id: decodeURIComponent(end).split(',').map(li => parseInt(li)),
      status
    })
  })
 


  const bodyColumns: any = useMemo(() => {
    const list = data?.data ?? []

    const modifiedList = list.map((li: any) => {
      return {
        ...li,
        userInfo: {
          full_name: li.name,
          gender: li.gender,
          image: li.image
        },
        carInfo: {
          name: li.car,
          number: li.car_number
        },
        fromStart: {
          city: li.from_region_name,
          district: li.from_district_name,
        },
        fromEnd: {
          city: li.to_region_name,
          district: li.to_district_name
        }
      };
    });

    return {
      list: modifiedList,
      ...data
    }
  }, [data])


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
        count={bodyColumns?.meta?.pageCount}
        disablePagination={false}
        isResizeble={false}
        isLoading={isLoading}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Result;
