import { useQuery } from "react-query";
import ImageFrame from "../../../../components/UI/ImageFrame";
import { FormatTime } from "../../../../utils/formatTime";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import passengerService from "../../../../services/passengers";
import { useMemo } from "react";
import usePageRouter from "../../../../hooks/useObjectRouter";

export const breadCrumbItems = [
  {
    label: "Yo'lovchilar",
    link: "/passengers/main",
  },
  {
    label: "Ro‘yxat",
  },
];

export const TableData = ({ passengerRefetch }: { passengerRefetch: () => void }) => {
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
      title: "coin",
      id: "coin_balance"
    },
    {
      title: "",
      id: "actions",
      permission: ["view"],
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
  const {
    currentPage,
    q,
    region_id,
    birthday,
    start,
    end,
    device_type,
    version,
    gender,
  } = useGetQueries();
  const {
    data: passengers,
    isLoading: passengerLoading,
    refetch: passengerRefetch,
  } = useQuery(
    [
      "GET_PASSENGER_LIST",
      currentPage,
      q,
      region_id,
      birthday,
      start,
      end,
      device_type,
      version,
      gender,
    ],
    () => {
      return passengerService.getList({
        page: currentPage,
        perPage: 10,
        q,
        region_id,
        birthday,
        device_type,
        created_at: start && end && JSON.stringify([start, end]),
        version,
        gender,
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
        };
      }) ?? []
    );
  }, [passengers]);

  return { passengers, passengerTableList, passengerLoading, passengerRefetch };
};
