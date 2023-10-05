import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import AddButton from "../../../components/Buttons/AddButton";
import SectionHeader from "../../../components/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import Form from './Form'

const Admins = () => {
  const { navigateQuery } = usePageRouter();

  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism familiya",
        id: "full_name"
      },
      {
        title: "Login",
        id: "login"
      },
      {
        title: "Tel.raqam",
        id: "phone_number",
      },
      {
        title: "Roli",
        id: "rol",
      },
      {
        title: "Yaratilgan sana",
        id: "created_date",
      },
      {
        title: "Status",
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
        title: '',
        id: 'actions',
        width: 90,
        permission: ['edit', 'delete', 'freez']
      }
    ];
  }, []);

  const bodyColumns = [
    {
      full_name: 'Javohir Zokirov',
      login: '@javohir7777',
      phone_number: "+998 (90) 948-48-10",
      rol: 'Super admin',
      created_date: '19.08.2023',
      status: true,
    },
  ];

  return (
    <>
      <SectionHeader title="Adminlar ro‘yxati">
        <div className="flex items-center gap-3">
          <AddButton
            text="new_admin"
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
export default Admins;
