import ImageFrame from "../../../../components/UI/ImageFrame";
import { useMemo } from "react";
import { FormatTime } from "../../../../utils/formatTime";
import Places from "../../../../components/UI/Places";
import DriversAvater from "../../../../views/Passengers/Active/DriversAvatar";

export const ActiveDriversTable = ({
  setPassenger = () => {},
}: {
  setPassenger: (val: any) => void;
}) => {
  const passengerList = (e: any) => {
    setPassenger(e);
  };

  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism Familiya",
        id: "data",
        render: (obj: any) => {
          return obj?.full_name ? (
            <div className="flex items-center gap-3">
              <ImageFrame image={obj.image} gender={obj.gender} />
              <div>
                <p>{obj.full_name}</p>
                <span className="text-[var(--gray)] uppercase">
                  +{obj.phone}
                </span>
              </div>
            </div>
          ) : (
            ""
          );
        },
      },
      {
        title: "Qayerdan",
        id: "from",
      },
      {
        title: "qayerga",
        id: "to",
      },
      {
        title: "Sayohat turi",
        id: "search_type",
      },
      {
        title: "Online vaqti",
        id: "created_at",
        render: (val?: any) => {
          return <>{FormatTime(val, "time")}</>;
        },
      },
      {
        title: "Raqam",
        id: "carInfo",
        render: (val: any) =>
          val && (
            <div>
              <p className="text-[var(--black)]">{val.car_name}</p>
              <p className="text-[var(--gray)]  text-xs">{val.car_number}</p>
            </div>
          ),
      },
      {
        title: "Takliflar",
        id: "bids",
        render: (arr: any, item: any) => {
          console.log(arr);
          return (
            <div className="py-4">
              <DriversAvater data={arr} item={item} />
            </div>
          );
        },
      },
      {
        id: "places",
        render: (val: any, items: any) =>
          val && <Places data={val} item={items} clickHandle={passengerList} />,
      },
    ];
  }, []);

  return { headColumns };
};
