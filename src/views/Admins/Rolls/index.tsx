import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import AddButton from "../../../components/Buttons/AddButton";
import SectionHeader from "../../../components/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import Form from "./Form";
import { useQuery } from "react-query";
import roleService from "../../../services/rolls";

const Rolls = () => {
  const { navigateQuery } = usePageRouter();

  const { data: roles } = useQuery(
    ["GET_ADMINS"],
    () => {
      return roleService.getList();
    },
    {
      enabled: true,
    }
  );

  const bodyColumns = useMemo(() => {
    return roles?.data ?? [];
  }, [roles]);

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
      <SectionHeader >
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
