import { useMemo } from "react";
import CTable from "../../../../components/CElements/CTable";

const Result = () => {
  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism familya",
        id: "name",
      },
      {
        title: "Mashina / raqam",
        id: "car",
        render: (val: any) => {
          return (
            <>
              <p>{val?.model}</p>
              <span className="text-[var(--gray)]">{val?.number}</span>
            </>
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
      name: "Muhammad Karim S.",
      car: {
        model: "Cobalt",
        number: "60Y418BC",
      },
      phone_number: "+998 (90) 948-48-10",
      status: true,
    },
    {
      name: "Muhammad Karim S.",
      phone_number: "+998 (90) 948-48-10",
      status: true,
    },
  ];

  return (
    <div>
      <div className="flex justify-between mb-[6px] mt-8">
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
    </div>
  );
};

export default Result;
