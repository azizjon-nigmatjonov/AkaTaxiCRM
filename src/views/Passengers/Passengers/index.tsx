import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import AddButton from "../../../components/Buttons/AddButton";
import FilterButton from "../../../components/Buttons/FilterButton";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";

const Passengers = () => {
  const { navigateQuery } = usePageRouter();
  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism familya",
        id: "full_name",
      },
      {
        title: "Viloyat",
        id: "region",
      },
      {
        title: "Tel.raqam",
        id: "phone_number",
      },
      {
        title: "Tug‘ilgan sana",
        id: "birth_date",
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
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
  ];

  return (
    <>
      <SectionHeader title="Yo‘lovchilar ro‘yxati">
        <div className="flex items-center gap-3">
          <FilterButton text="filter" />
          <AddButton
            text="new_passenger"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </div>
      </SectionHeader>
      <CTable headColumns={headColumns} bodyColumns={bodyColumns} count={10} />

      <Form />
    </>
  );
};

export default Passengers;
