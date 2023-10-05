import { useMemo } from "react";
import CCard from "../../../../components/CElements/CCard";
import CTable from "../../../../components/CElements/CTable";

const Result = () => {
  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism / mashina",
        id: "name_vehicle",
        render: (obj: any) => {
          return (
            <div className="flex justify-center flex-col" style={{ height: '60px' }}>
              <p>{obj?.name}</p>
              <span className="text-[var(--gray)] uppercase">{obj?.car}</span>
            </div>
          );
        },
      },
      {
        title: "Tel.raqam",
        id: "phone_number",
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
    ];
  }, []);

  const bodyColumns = [
    {
      name_vehicle: {
        car: "cobalt - 60Y418BC",
        name: "Muhammad Karim S.",
      },
      phone_number: "+998 (90) 948-48-10",
      status: true,
    },
    {
      name_vehicle: {
        car: "cobalt - 60Y418BC",
        name: "Muhammad Karim S.",
      },
      phone_number: "+998 (90) 948-48-10",
      status: true,
    },
  ];

  return (
    <CCard
      classes="bg-transparent rounded-[30px] border-[var(--lineGray)]"
      style={{ background: "transparent", padding: "18px", minHeight: "100%" }}
    >
      <div className="flex justify-between mb-[14px] ">
        <p className="text-[var(--gray)] text-base font-medium">Natijalar</p>
        <span className="text-[var(--main)] text-base font-medium">
          371 ta haydovchi
        </span>
      </div>

      <CTable
        headColumns={headColumns}
        bodyColumns={bodyColumns}
        disablePagination={true}
        isResizeble={false}
      />
    </CCard>
  );
};

export default Result;
