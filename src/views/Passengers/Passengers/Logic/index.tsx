import { useQuery } from "react-query";
import ImageFrame from "../../../../components/UI/ImageFrame";
import { FormatTime } from "../../../../utils/formatTime";
import passengerService from "../../../../services/passengers";
import { useMemo } from "react";
import usePageRouter from "../../../../hooks/useObjectRouter";
import { ListIcon } from "../../../../components/UI/IconGenerator/Svg";
import { getStoredFilters } from "../../../../components/UI/Filter/Logic";

export const breadCrumbItems = [
  {
    label: "Yo'lovchilar",
    link: "/passengers/main",
  },
  {
    label: "Ro‘yxat",
  },
];

export const TableData = ({
  passengerRefetch,
}: {
  passengerRefetch: () => void;
}) => {
  const { navigateQuery, navigateTo } = usePageRouter();
  const headColumns = [
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
      title: "Viloyat",
      id: "region_name",
    },
    {
      title: "Tel.raqam",
      id: "username",
      render: (val: any) => val && <p>+{val}</p>,
      permission: "phone",
    },
    {
      title: "triplar",
      id: "bookings_count",
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
      width: 270,
      render: (val?: any) => {
        return <>{FormatTime(val)}</>;
      },
    },
    {
      title: "coin",
      id: "coin_balance",
    },
    {
      title: "",
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
      click: "custom",
    },
    {
      title: "",
      id: "actions",
      actions: ["view"],
    },
  ];

  const handleActions = (el: any, status: string) => {
    if (status === "delete") {
      passengerService.deleteElement(el.id).then(() => {
        passengerRefetch();
      });
    }
    if (status === "edit") {
      navigateQuery({ id: el.id });
    }
    if (status === "view") {
      navigateTo(`/passengers/passenger-list/${el.id}`);
    }
  };

  return { headColumns, handleActions };
};

export const FetchFunction = () => {
  const { filters } = getStoredFilters({});
  const { gender, device_type, region_id, version, date, q, page } = filters;

  const start = date?.[0];
  const end = date?.[1];

  const {
    data: passengers,
    isLoading: passengerLoading,
    refetch: passengerRefetch,
  } = useQuery(
    [
      "GET_PASSENGER_LIST",
      page,
      q,
      region_id,
      start,
      end,
      device_type,
      version,
      gender,
    ],
    () => {
      return passengerService.getList({
        page: page || 1,
        perPage: 10,
        q,
        region_id: region_id?.map((item: any) => item.value),
        device_type: device_type?.value,
        created_at: start && end && start + "," + end,
        version: version?.value,
        gender: gender?.value,
      });
    }
  );

  const passengerTableList = useMemo(() => {
    return (
      passengers?.data?.map((el: any) => {
        return {
          ...el,
          info: {
            full_name: el.full_name,
            image: el?.image,
            gender: el.gender,
          },
          notelist: {
            id: el.id,
            notelist: el.notes_count,
          },
        };
      }) ?? []
    );
  }, [passengers]);

  return { passengers, passengerTableList, passengerLoading, passengerRefetch };
};
