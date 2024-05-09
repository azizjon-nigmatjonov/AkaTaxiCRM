import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/UI/Sections/Header";
import AddButton from "../../../components/UI/Buttons/AddButton";
import FilterButton from "../../../components/UI/Filters";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useQuery } from "react-query";
import passengerService from "../../../services/passengers";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { FormatTime } from "../../../utils/formatTime";
import { Header } from "../../../components/UI/Header";
import ImageFrame from "../../../components/UI/ImageFrame";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { breadCrumbItems } from "./Logic";
import { FilterPassenger } from "./Filter/idex";



const Passengers = () => {
  const { navigateQuery, navigateTo } = usePageRouter();
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
  

  const { data, isLoading, refetch } = useQuery(
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
    },
    {
      enabled: true,
    }
  );

  const passengers: any = useMemo(() => {
    return data ?? {};
  }, [data]);

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
      // {
      //   title: "Keshbek (so'm)",
      // },
      {
        title: "Tug‘ilgan sana",
        id: "birthday",
        render: (val?: any) => {
          return <>{FormatTime(val)}</>;
        },
      },
      {
        title: "coin",
      },
      {
        title: "",
        id: "actions",
        permission: ["view"],
      },
    ];
  }, []);

  const bodyColumns = useMemo(() => {
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

  const handleActions = (el: any, status: string) => {
    if (status === "delete") {
      passengerService.deleteElement(el.id).then(() => {
        refetch();
      });
    }
    if (status === "edit") {
      navigateQuery({ id: el.id });
    }
    if (status === "view") {
      navigateTo(`/passengers/passenger-list/${el.id}`);
      // navigateQuery({ passengers: el.id });
    }
  };

  const handleSearch = (value: any) => {
    navigateQuery({ q: value });
  };

  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" />
      </Header>
      <div className="px-6 ">
        <SectionHeader
          extra={<FilterButton text="Filter" />}
          handleSearch={handleSearch}
        >
          <div className="flex items-center gap-3">
            <AddButton
              text="new_passenger"
              onClick={() => navigateQuery({ id: "create" })}
            />
          </div>
        </SectionHeader>

       <FilterPassenger />

        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns}
          totalCount={passengers?.meta?.totalCount}
          count={passengers?.meta?.pageCount ?? 5}
          isLoading={isLoading}
          handleActions={handleActions}
          currentPage={currentPage}
          clickable={true}
        />

        <Form refetch={refetch} />
      </div>
    </>
  );
};

export default Passengers;
