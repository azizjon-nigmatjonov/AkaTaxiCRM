import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import AddButton from "../../../components/Buttons/AddButton";
import SectionHeader from "../../../components/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import Form from './Form'

const Rolls = () => {
  const { navigateQuery } = usePageRouter();

  const headColumns = useMemo(() => {
    return [
      {
        title: "Rol nomi",
        id: "roll_name",
      },
      {
        title: "Funksiyalar",
        id: "functions",
      },
      {
        title: "Aktiv adminlar",
        id: "active_admins",
      },
      {
        title: "",
        id: "actions",
        width: 90,
        permission: ["edit", "delete"],
      },
    ];
  }, []);

  const bodyColumns = [
    {
      roll_name: "Super admin",
      functions: "44 ta funksiya",
      active_admins: "+998 (90) 948-48-10",
    },
  ];

  return (
    <>
      <SectionHeader title="Rollar ro‘yxati">
        <div className="flex items-center gap-3">
          <AddButton
            text="new_roll"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </div>
      </SectionHeader>
      <CTable
        headColumns={headColumns}
        bodyColumns={bodyColumns}
        isResizeble={true}
      />

      <Form />
    </>
  );
};
export default Rolls;
