import { useCallback, useMemo } from "react";
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import CTable from "../../../../components/CElements/CTable";
import SectionHeader from "../../../../components/Sections/Header";
import FilterButton from "../../../../components/Buttons/FilterButton";

const breadCrumbItems = [
  {
    label: "Mashinalar ro‘yxati",
    link: -1,
  },
  {
    label: "Malibu 2",
  },
];

const SingleCar = () => {
  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism familya",
        id: "full_name",
      },
      {
        title: "phone_number",
        id: "phone_number",
      },
      {
        title: "Tug‘ilgan sana",
        id: "birth_date",
      },
      {
        title: "mashina raqami",
        id: "car_number",
      },
      {
        title: "raqam viloyati",
        id: "car_number_region",
      },
      {
        title: "status",
        id: "status",
        render: (val: any) => (
          <div
            className={
              val === false
                ? "text-[var(--error)]"
                : val === true
                ? "text-[var(--green)]"
                : ""
            }
          >
            {val === false ? "Noaktiv" : val === true ? "Aktiv" : ""}
          </div>
        ),
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
      full_name: "Alisher Hakimov",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
      status: true,
      car_number: "70R481EC",
      car_number_region: "Qashqadaryo",
      id: "123",
    },
  ];

  const handleActions = useCallback((element: any, status: string) => {
    if (status === "edit") {
      console.log(element);
    }
  }, []);

  return (
    <>
      <SectionHeader
        extra={
          <CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" />
        }
      >
        <FilterButton text="filter" />
      </SectionHeader>

      <CTable
        headColumns={headColumns}
        bodyColumns={bodyColumns}
        count={1}
        handleActions={handleActions}
      />
    </>
  );
};

export default SingleCar;
