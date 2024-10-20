import ImageFrame from "../../../../components/UI/ImageFrame";
import { useMemo } from "react";
import { FormatTime } from "../../../../utils/formatTime";
import Places from "../../../../components/UI/Places";
import DriversAvater from "../../../../views/Passengers/Active/DriversAvatar";
import { useQuery } from "react-query";
import driverService from "../../../../services/drivers";
import { ListIcon } from "../../../../components/UI/IconGenerator/Svg";
import usePageRouter from "../../../../hooks/useObjectRouter";

export const ActiveDriversTable = ({
  setPassenger = () => {},
  handleOffers = () => {},
}: {
  setPassenger: (val: any) => void;
  handleOffers: (val: any) => void;
}) => {
  const handlePlaces = (e: any) => {
    setPassenger(e);
  };
  const { navigateQuery } = usePageRouter();

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
        render: (arr: any, item: any) => (
          <div className="py-4">
            <DriversAvater
              data={arr}
              item={item}
              driversHandle={handleOffers}
            />
          </div>
        ),
      },
      {
        id: "places",
        render: (val: any, element: any) => {
          return (
            val && (
              <Places data={val} element={element} clickHandle={handlePlaces} />
            )
          );
        },
      },
      {
        title: "Eslatma",
        id: "notelist",
        render: (item: any) => {
          return (
            <button
              onClick={() => navigateQuery({ modal: "note", row_id: item.id })}
            >
              <ListIcon stroke={item.notelist ? "black" : "#98A2B3"} />
            </button>
          );
        },
      },
      {
        title: "",
        id: "actions",
        actions: ["view"]
      }
    ];
  }, []);

  return { headColumns };
};

export const FetchFunction = () => {
  const { data: activeDriverCount } = useQuery(
    ["GET_ACTIVE_DRIVERS_COUNT"],
    () => {
      return driverService.getActiveDriverCount();
    }
  );

  const list = activeDriverCount?.data;

  const tabList = [
    { slug: "", name: "Aktiv", count: list?.pending },
    { slug: "on-way", name: "Yo'lda", count: list?.["on-way"] },
    { slug: "canceled", name: "Bekor qilingan", count: list?.canceled },
    { slug: "done", name: "Yetib borgan", count: list?.done },
  ];

  return { activeDriverCount, tabList };
};

export const breadCrumbs = [
  { label: "Haydovchilar", link: "/drivers/active" },
  { label: "Aktiv" },
];
