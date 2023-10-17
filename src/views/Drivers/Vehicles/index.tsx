import { useMemo } from "react";
import AddButton from "../../../components/Buttons/AddButton";
import SectionHeader from "../../../components/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import Form from "./Form";
import CTabs from "../../../components/CElements/CTab";
import { useGetQueries } from "../../../hooks/useGetQueries";
import Section from "./Section";

const Vehicles = () => {
  const { navigateQuery } = usePageRouter();
  const { currentTab } = useGetQueries();

  const list = useMemo(() => {
    return [
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
      name: "Labo",
      slug: "cashback",
    },
    {
      name: "Gurzavik",
      slug: "menu",
    },
    {
      name: "Fura",
      slug: "bonus",
    },
  ];

  console.log('currentTab', currentTab);
  
  return (
    <>
      <SectionHeader title="Mashinalar ro‘yxati">
        <div className="flex items-center gap-3">
          <AddButton
            text="new_mark"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </div>
      </SectionHeader>

      <CTabs tabList={tabList} />

      <Section list={list}/>

      {/* <div className="space-y-[18px]">
        <Section list={list}/>
        <Section list={list2}/>
      </div> */}

      <Form />
    </>
  );
};

export default Vehicles;
