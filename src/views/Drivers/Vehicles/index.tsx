import { useEffect, useMemo } from "react";
import AddButton from "../../../components/Buttons/AddButton";
import SectionHeader from "../../../components/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import Form from "./Form";
import CTabs from "../../../components/CElements/CTab";
import { useGetQueries } from "../../../hooks/useGetQueries";
import Section from "./Section";
import FilterButton from "../../../components/Filters";
import { useQuery } from "react-query";
import carService from "../../../services/cars";

const Vehicles = () => {
  const { navigateQuery } = usePageRouter();
  const { currentTab } = useGetQueries();

  const { data: classes } = useQuery(["GET_TAB_LIST"], () => {
    return carService.getCarClasses();
  });

  const tabList = useMemo(() => {
    if (!classes) return [];
    const list: any = classes;

    return list.map((item: any) => {
      return {
        slug: item,
        name: item,
      };
    });
  }, [classes]);

  const tab = useMemo(() => {
    return currentTab ? currentTab : "standart";
  }, [currentTab]);

  const { data: cars, isLoading } = useQuery(
    ["GET_CAR_LIST", tab],
    () => {
      return carService.getList(tab);
    },
    {
      enabled: !!tab,
    }
  );

  return (
    <>
      <SectionHeader title="Mashinalar ro‘yxati">
        <div className="flex items-center gap-3">
          <FilterButton text="filter" />
          <AddButton
            text="new_mark"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </div>
      </SectionHeader>

      {tabList ? (
        <>
          <CTabs tabList={tabList ?? []} />

          <Section list={cars} isLoading={isLoading} />
        </>
      ) : (
        ""
      )}
      
      <Form />
    </>
  );
};

export default Vehicles;
