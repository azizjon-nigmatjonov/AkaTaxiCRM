import { useMemo } from "react";
import CTable from "../../components/CElements/CTable";


const UndefinedPage = () => {
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
      },
    ];
  }, []);

  const bodyColumns: any = [];

  return (
    <>
      <CTable headColumns={headColumns} bodyColumns={bodyColumns} count={1} />

    </>
  );
};

export default UndefinedPage;
