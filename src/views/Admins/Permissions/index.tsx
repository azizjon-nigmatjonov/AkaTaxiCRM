import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import AddButton from "../../../components/Buttons/AddButton";
import SectionHeader from "../../../components/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import Form from "./Form";
import { useQuery } from "react-query";
import permissionService from "../../../services/admins";

const Permissions = () => {
  const { navigateQuery } = usePageRouter();

  const { data: permissions } = useQuery(
    ["GET_ADMINS"],
    () => {
      return permissionService.getList();
    },
    {
      enabled: true,
    }
  );

  const bodyColumns = useMemo(() => {
    return permissions ?? [];
  }, [permissions]);

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

  return (
    <>
      <SectionHeader title="Ruxsatlar">
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
export default Permissions;
