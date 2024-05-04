// import Card from "./Card";
import NullData from "../../../../components/UI/NullData";
import Header from "./Header";
import Standard from "./Standar";
import Comfort from "./Comfort";
import Bussness from "./Bussniss";
import { useQuery } from "react-query";
import carService from "../../../../services/cars";
import { useMemo } from "react";
import { useGetQueries } from "../../../../hooks/useGetQueries";

interface Props {
  list: any;
  isLoading?: boolean;
  loading: boolean;
  setInputValue?: any;
}

const Section = ({ setInputValue, list = [], loading = true }: Props) => {
  const { q } = useGetQueries();

  const { data: econom } = useQuery(["GET_ECONOM", q], () => {
    return carService.getList(3, q);
  });

  const { data: standart } = useQuery(["GET_STANDART", q], () => {
    return carService.getList(1, q);
  });

  const { data: comfort } = useQuery(["GET_COMFORT", q], () => {
    return carService.getList(2, q);
  });

  const { data: bussniss } = useQuery(["GET_BUSSNESS", q], () => {
    return carService.getList(3, q);
  });

  const economData = useMemo(() => {
    return econom?.data ?? [];
  }, [standart]);

  const standartData = useMemo(() => {
    return standart?.data ?? [];
  }, [standart]);

  const comfortData = useMemo(() => {
    return comfort?.data ?? [];
  }, [comfort]);

  const bussnissData = useMemo(() => {
    return bussniss?.data ?? [];
  }, [bussniss]);

  return (
    <>
      <div className="bg-white p-2 border border-[var(--lightGray)] rounded-xl">
        <Header
          standart={standartData.length}
          comfort={comfortData.length}
          bussniss={bussnissData.length}
        />
        {list?.length && !loading ? (
          <div className="grid grid-cols-4">
            <Standard data={economData} setInputValue={setInputValue} />
            <Standard data={standartData} setInputValue={setInputValue} />
            <Comfort data={comfortData} setInputValue={setInputValue} />
            <Bussness data={bussnissData} setInputValue={setInputValue} />
          </div>
        ) : loading ? (
          "Yuklanmoqda..."
        ) : (
          <NullData />
        )}
      </div>
    </>
  );
};

export default Section;
