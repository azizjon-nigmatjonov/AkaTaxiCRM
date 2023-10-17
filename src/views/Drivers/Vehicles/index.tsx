import { useMemo } from "react";
import AddButton from "../../../components/Buttons/AddButton";
import SectionHeader from "../../../components/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import Form from "./Form";
import CTabs from "../../../components/CElements/CTab";
import { useGetQueries } from "../../../hooks/useGetQueries";
import Section from "./Section";
import FilterButton from "../../../components/Buttons/FilterButton";

const Vehicles = () => {
  const { navigateQuery } = usePageRouter();
  const { currentTab } = useGetQueries();

  const list = useMemo(() => {
    return [
      {
        title: "Malibu 1",
        image: "/images/trash/malibu-1.svg",
      },
      {
        title: "Malibu 1",
        image: "/images/trash/malibu-1.svg",
      },
      {
        title: "Malibu 1",
        image: "/images/trash/malibu-1.svg",
      },
    ];
  }, []);

  const tabList = [
    {
      name: "Standart",
      slug: "guests",
    },
    {
      name: "Comfort",
      slug: "settings",
    },
    {
      name: "Business",
      slug: "employees",
    },
    {
      name: "light_truck",
      slug: "light_truck",
    },
    {
      name: "lorry",
      slug: "lorry",
    },
    {
      name: "hevier_truck",
      slug: "hevier_truck",
    },
  ];

  console.log("currentTab", currentTab);

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

      <CTabs tabList={tabList} />

      <Section list={list} />

      {/* <div className="space-y-[18px]">
        <Section list={list}/>
        <Section list={list2}/>
      </div> */}

      <Form />
    </>
  );
};

export default Vehicles;
