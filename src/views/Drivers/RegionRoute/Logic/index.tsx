import { useMemo, useState } from "react";
import { usePlaces } from "../../../../hooks/usePlaces";
import ImageFrame from "../../../../components/UI/ImageFrame";

export const PointData = () => {
  const { setLocalIds, districtList } = usePlaces();

  const listDistricts = useMemo(() => {
    const list = districtList?.filter((i: any) => i.name.en !== "Everything");
    return list;
  }, [districtList]);

  return { districtList: listDistricts, setLocalIds };
};

export const PointCheckData = () => {
  const [checkedList, setCheckedList]: any = useState([]);

  const handleCheck = (obj: any) => {
    let list: any = checkedList;

    if (list.find((i: any) => i === obj.id)) {
      list = list.filter((i: any) => i !== obj.id);
    } else {
      list.push(obj.id);
    }

    setCheckedList(list);
  };

  return { handleCheck, checkedList };
};

export const TableData = () => {
  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism familya",
        id: "userInfo",
        render: (val: any) =>
          val && (
            <>
              <div className="flex items-center space-x-2 py-2">
                <ImageFrame image={val.image} gender={val.gender} />
                <span>{val.full_name}</span>
              </div>
            </>
          ),
      },
      {
        title: "Ketish manzil",
        id: "fromStart",
        render: (val: any) =>
          val && (
            <div>
              <p>{val.city}</p>
              <span>{val.district}</span>
            </div>
          ),
      },
      {
        title: "Borish manzil",
        id: "fromEnd",
        render: (val: any) =>
          val && (
            <div>
              <p>{val.city}</p>
              <span>{val.district}</span>
            </div>
          ),
      },
      {
        title: "Mashina / raqam",
        id: "carInfo",
        render: (val: any) =>
          val && (
            <>
              <p>{val?.name}</p>
              <span className="text-[var(--gray)]">{val?.number}</span>
            </>
          ),
      },
      {
        title: "Tel.raqam",
        id: "phone",
        render: (val: any) => val && <p>+{val}</p>,
      },

      {
        title: "Status",
        id: "status",
        render: (val: any) =>
          val && (
            <div
              className={
                val == "canceled"
                  ? "text-[var(--error)]"
                  : "text-[var(--green)]"
              }
            >
              {val == "canceled" ? "Noaktiv" : "Aktiv"}
            </div>
          ),
      },
      {
        title: "Trip yaratilgan vaqti",
        id: "created_at",
        width: 300
      },
    ];
  }, []);

  return { headColumns };
};
