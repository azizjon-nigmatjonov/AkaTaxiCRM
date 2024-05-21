import { useMemo, useState } from "react";
import { usePlaces } from "../../../../hooks/usePlaces";
import ImageFrame from "../../../../components/UI/ImageFrame";

export const PointData = () => {
  const { setLocalIds, districtList } = usePlaces();
  console.log('districtList', districtList);
  
  return { districtList, setLocalIds };
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
    // const list: any = [];

    // parent.list?.forEach((element: any) => {
    //   if (element.id === obj.id) {
    //     element = obj;
    //   }
    //   if (element.checked) checked.push(obj);
    //   list.push(element);
    // });

    // handleList({ ...parent, list });
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
      },
    ];
  }, []);

  return { headColumns };
};
