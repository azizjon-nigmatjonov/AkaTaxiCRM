import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import FilterButton from "../../../components/Buttons/FilterButton";

const ActivePassengers = () => {
  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism familya",
        id: "full_name",
      },
      {
        title: "Qayerdan",
        id: "from",
      },
      {
        title: "Qayerga",
        id: "to",
      },
      {
        title: "qidiruv vaqti",
        id: "search_time",
      },
      {
        title: "Mavjud taksilar",
        id: "taxi",
        render: (val: number) => {
          return val && <>{val} ta</>;
        },
      },
      {
        title: "",
        id: "actions",
        permission: ['edit', 'delete']
      },
    ];
  }, []);

  const bodyColumns = [
    {
      full_name: "Diyor Asqarov",
      from: "Toshkent shahar, Yunusobod t.",
      to: "Andijon, Andijon sh.",
      search_time: "1 soat, 17 daqiqa",
      taxi: 74,
    },
    {
      full_name: "Diyor Asqarov",
      from: "Toshkent shahar, Yunusobod t.",
      to: "Andijon, Andijon sh.",
      search_time: "1 soat, 17 daqiqa",
      taxi: 74,
    },
    {
      full_name: "Diyor Asqarov",
      from: "Toshkent shahar, Yunusobod t.",
      to: "Andijon, Andijon sh.",
      search_time: "1 soat, 17 daqiqa",
      taxi: 74,
    },
    {
      full_name: "Diyor Asqarov",
      from: "Toshkent shahar, Yunusobod t.",
      to: "Andijon, Andijon sh.",
      search_time: "1 soat, 17 daqiqa",
      taxi: 74,
    },
    {
      full_name: "Diyor Asqarov",
      from: "Toshkent shahar, Yunusobod t.",
      to: "Andijon, Andijon sh.",
      search_time: "1 soat, 17 daqiqa",
      taxi: 74,
    },
    {
      full_name: "Diyor Asqarov",
      from: "Toshkent shahar, Yunusobod t.",
      to: "Andijon, Andijon sh.",
      search_time: "1 soat, 17 daqiqa",
      taxi: 74,
    },
  ];

  return (
    <>
      <SectionHeader title="Aktiv yo‘lovchilar ro‘yxati">
        <FilterButton text="filter" />
      </SectionHeader>
      <CTable
        headColumns={headColumns}
        bodyColumns={bodyColumns}
        count={6}
        isResizeble={true}
      />
    </>
  );
};

export default ActivePassengers;
