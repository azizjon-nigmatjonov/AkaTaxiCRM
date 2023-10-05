import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import AddButton from "../../../components/Buttons/AddButton";
import FilterButton from "../../../components/Buttons/FilterButton";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";

const ActiveDrivers = () => {
  const { navigateQuery } = usePageRouter();
  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism / mashina",
        id: "name_vehicle",
        render: (obj: any) => {
          return (
            <>
              <p>{obj?.name}</p>
              <span className="text-[var(--gray)] uppercase">{obj?.car}</span>
            </>
          );
        },
      },
      {
        title: "Tel.raqam",
        id: "phone_number",
      },
      {
        title: "Qayerdan",
        id: "from",
      },
      {
        title: "qayerga",
        id: "where",
      },
      {
        title: "qidiruv vaqti",
        id: "time_search",
      },
      {
        title: "",
        id: "actions",
        permission: ["edit", "delete"],
      },
    ];
  }, []);

  const bodyColumns = [
    {
      name_vehicle: {
        car: "cobalt - 60Y418BC",
        name: "Muhammad Karim S.",
      },
      from: "Toshkent shahar, Barcha t.",
      phone_number: "+998 (90) 948-48-10",
      where: "Andijon, Andijon sh.",
      time_search: "1 soat, 17 daqiqa"
    },
  ];

  return (
    <>
      <SectionHeader title="Aktiv haydovchilar ro'yxati">
        <div className="flex items-center gap-3">
          <FilterButton text="filter" />
          <AddButton
            text="Yangi marshrut"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </div>
      </SectionHeader>
      <CTable headColumns={headColumns} bodyColumns={bodyColumns} count={1} />

      <Form />
    </>
  );
};

export default ActiveDrivers;
