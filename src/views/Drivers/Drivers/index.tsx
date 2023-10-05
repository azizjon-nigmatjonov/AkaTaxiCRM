import { useCallback, useMemo } from "react";
import AddButton from "../../../components/Buttons/AddButton";
import FilterButton from "../../../components/Buttons/FilterButton";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";

const Drivers = () => {
  const { navigateQuery, navigateTo } = usePageRouter();
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
        title: "car",
        id: "vehicle",
      },
      {
        title: 'mashina raqami',
        id: "car_number"
      },
      {
        title: 'raqam viloyati',
        id: 'car_number_region'
      },
      {
        title: "",
        id: "actions",
        permission: ['learn_more', 'edit', 'delete']
      },
    ];
  }, []);

  const bodyColumns = [
    {
      full_name: "Alisher Hakimov",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
      vehicle: 'Onix',
      car_number: "70R481EC",
      car_number_region: "Qashqadaryo",
      id: '123'
    },
  ];

  const handleActions = useCallback((element: any, status: string) => {
    if (status === 'learn_more') {
      navigateTo(`/drivers/driver/${element.id}`)
    }
  }, [])

  return (
    <>
      <SectionHeader title="Haydovchilar ro‘yxati">
        <div className="flex items-center gap-3">
          <FilterButton text="filter" />
          <AddButton
            text="new_driver"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </div>
      </SectionHeader>
      <CTable headColumns={headColumns} bodyColumns={bodyColumns} count={1} handleActions={handleActions} />

      <Form />
    </>
  );
};

export default Drivers;
