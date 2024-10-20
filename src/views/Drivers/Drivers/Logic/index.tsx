import usePageRouter from "../../../../hooks/useObjectRouter";
import ImageFrame from "../../../../components/UI/ImageFrame";
import { FormatTime } from "../../../../utils/formatTime";
import { useQuery } from "react-query";
import driverService from "../../../../services/drivers";
import {
  DangerNotification,
  EyeIcon,
  PlusIcon,
} from "../../../../components/UI/IconGenerator/Svg";
import { ListIcon } from "../../../../components/UI/IconGenerator/Svg";
import { useCallback, useMemo } from "react";
import { getStoredFilters } from "../../../../components/UI/Filter/Logic";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import { usePermissions } from "../../../../hooks/usePermissions";
import { TableSort } from "../../../../components/CElements/CTable/Details/Sort";
import TaskIcon from "@mui/icons-material/Task";

export const TableData = ({
  driversRefetch,
  filterParams,
  handleFilterParams = () => {},
  setMailDriverId = () => {},
  setTaskOpen = () => {},
  setTegOpen = () => {},
}: {
  filterParams: any;
  handleFilterParams: (val: any) => void;
  driversRefetch: () => void;
  setTaskOpen: (val: number) => void;
  setMailDriverId: (val: number) => void;
  setTegOpen: (val: number) => void;
}) => {
  const { navigateQuery, navigateTo } = usePageRouter();
  const { checkPermission } = usePermissions();
  const handleActions = useCallback((element: any, status: string) => {
    if (checkPermission("view")) {
      if (status === "view") navigateTo(`/drivers/main/${element.id}`);
    }

    if (status === "edit") navigateQuery({ id: element.id });

    if (status === "delete") {
      driverService.deleteElement(element.id).then(() => {
        driversRefetch();
      });
    }
  }, []);

  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism familya",
        id: "info",
        render: (val: any) =>
          val && (
            <div className="flex items-center space-x-2 py-2">
              <ImageFrame image={val.image} gender={val.gender} />
              <span>{val.full_name}</span>
            </div>
          ),
      },
      {
        title: "phone_number",
        id: "phone",
        render: (val: any) => val && <p>+{val}</p>,
        permission: "phone",
      },
      {
        title: "Tug‘ilgan sana",
        id: "birthday",
        render: (val?: any) => {
          return <>{FormatTime(val)}</>;
        },
      },
      {
        title: "Ro'yxatdan o'tgan sana",
        id: "created_at",
        width: 300,
        render: (val?: any) => {
          return <>{FormatTime(val)}</>;
        },
      },
      {
        title: "Mashina / raqam",
        id: "car_info",
        render: (val: any) =>
          val && (
            <p>
              {val.car},{" "}
              <span className="block text-[var(--gray)]">{val.number}</span>
            </p>
          ),
      },
      {
        title: "Hisob raqami",
        id: "id",
      },
      {
        // title: "",
        renderHead: () => {
          return (
            <div className="w-full flex items-center justify-between">
              <span>Mablag'i</span>

              <TableSort
                value={filterParams?.sort?.value}
                handleClick={(sort: string) =>
                  handleFilterParams({ sort: { value: sort, label: sort } })
                }
              />
            </div>
          );
        },
        id: "balance",
      },
      {
        title: "To'lov vaqti",
        id: "paid_at",
      },
      {
        title: "Viloyat",
        id: "region_name",
      },
      {
        title: "Hamkor statusi",
        id: "partner_status",
      },
      {
        title: "Pochta",
        id: "poch",
        click: "custom",
        render: () => {
          return (
            <button onClick={() => setMailDriverId(8)} className="w-full">
              0
            </button>
          );
        },
      },
      {
        title: "Status",
        id: "info",
        render: (info: any) => {
          return (
            info?.status !== undefined && (
              <div
                className="cursor-pointer"
                onClick={() => handleActions({ id: info.id }, "view")}
              >
                {info.status === "active" ? (
                  <EyeIcon
                    fill={checkPermission("view") ? "black" : "var(--gray30)"}
                  />
                ) : info.status === "inactive" ? (
                  <DangerNotification />
                ) : (
                  <NotInterestedIcon style={{ color: "var(--error)" }} />
                )}
              </div>
            )
          );
        },
      },
      {
        title: "Vazifa",
        id: "id",
        click: "custom",
        render: (id: number) => {
          return (
            <div className="flex space-x-5">
              <button onClick={() => setTaskOpen(id)}>
                <PlusIcon fill="black" />
              </button>
              <button onClick={() => navigateTo(`/drivers/reminder/${id}/`)}>
                <TaskIcon fill="var(--primary)" />
              </button>
            </div>
          );
        },
      },
      {
        title: "Teg",
        id: "id",
        click: "custom",
        render: (id: number) => {
          return (
            <div>
              <button onClick={() => setTegOpen(id)}>
                <PlusIcon fill="black" />
              </button>
            </div>
          );
        },
      },
      {
        title: "Eslatma",
        id: "notelist",
        click: "custom",
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
    ];
  }, [filterParams]);

  return { headColumns, handleActions };
};

export const breadCrubmsItems = [
  { label: "Haydovchilar", link: "/drivers/main" },
  { label: "Ro'yxat" },
];

export const FetchFunctions = () => {
  const { filters } = getStoredFilters({});
  const {
    gender,
    device_type,
    region,
    version,
    date,
    q,
    status,
    page,
    is_paid,
    money,
  } = filters;

  const start = date?.[0];
  const end = date?.[1];

  const {
    data: drivers,
    isLoading: driversLoading,
    refetch: driversRefetch,
  } = useQuery(
    [
      "GER_DRIVERS_LIST",
      page,
      q,
      gender,
      device_type,
      start,
      end,
      version,
      region,
      status,
      is_paid,
      money,
    ],
    () => {
      const region_ids = region?.map((item: any) => item.value).join(",");
      return driverService.getList({
        page: page || 1,
        perPage: 10,
        q,
        gender: gender?.value,
        device_type: device_type?.value,
        created_at: start && end && start + "," + end,
        version: version?.value,
        region_id: region_ids,
        status: status?.value,
        is_paid: is_paid?.value,
        balance: money?.length > 1 ? `${money[0]},${money[1]}` : undefined,
      });
    }
  );
  return { drivers, driversLoading, driversRefetch };
};
