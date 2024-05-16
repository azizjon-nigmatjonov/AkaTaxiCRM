// import Card from "./Card";
import NullData from "../../../../components/UI/NullData";
import Header from "./Header";
import ClassWrapper from "./ClassWrapper";
import { useQuery } from "react-query";
import carService from "../../../../services/cars";
import { useMemo } from "react";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import CarSkeleton from "../Skeleton";

interface Props {
  list: any;
  isLoading?: boolean;
  loading: boolean;
  setInputValue?: any;
  tabList: any;
}

const Section = ({
  setInputValue,
  list = [],
  loading = true,
  tabList = [],
}: Props) => {
  const { q } = useGetQueries();

  const { data: econom } = useQuery(["GET_ECONOM", q], () => {
    return carService.getList(4, q);
  });

  const { data: standart, isLoading } = useQuery(["GET_STANDART", q], () => {
    return carService.getList(1, q);
  });

  const { data: comfort } = useQuery(["GET_COMFORT", q], () => {
    return carService.getList(2, q);
  });

  const { data: bussniss } = useQuery(["GET_BUSSNESS", q], () => {
    return carService.getList(3, q);
  });

  const allData = useMemo(() => {
    if (!tabList?.length) return [];
    const arr = tabList.map((item: any) => {
      if (item.slug == 1) {
        item.data = standart?.data;
      }
      if (item.slug == 2) {
        item.data = comfort?.data;
      }
      if (item.slug == 3) {
        item.data = bussniss?.data;
      }
      if (item.slug == 4) {
        item.data = econom?.data;
      }

      return item;
    });

    return arr;
  }, [econom, standart, comfort, bussniss, tabList]);

  return (
    <>
      <div className="bg-white p-2 border border-[var(--gray20)] rounded-[16px] common-shadow">
        {Object.keys(allData).length ? <Header arr={allData} /> : ""}
        {list?.length && !loading ? (
          <div>
            {!isLoading ?
              <div className="grid grid-cols-4">
                {Object.values(allData)?.map((item: any, index: number) => (
                  <ClassWrapper
                    key={index}
                    color={`${index % 2 !== 1 ? "bg-white" : "bg-[var(--brown10)]"
                      }`}
                    data={item?.data}
                    setInputValue={setInputValue}
                  />
                ))
                }
              </div> :
              <CarSkeleton />
            }
          </div>

        ) : loading ? (
          "Yuklanmoqda..."
        ) : (
          <NullData classes="h-[500px]" />
        )}
      </div>
    </>
  );
};

export default Section;
