import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import AddButton from "../../../components/Buttons/AddButton";
import FilterButton from "../../../components/Filters";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useQuery } from "react-query";
import passengerService from "../../../services/passengers";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { FormatTime } from "../../../utils/formatTime";
import CSelect from "../../../components/CElements/CSelect";
import CDriver from "../../../components/CElements/CDivider";
import CSlider from "../../../components/CElements/CSlider";
import { useSelector } from "react-redux";
import { Header } from "../../../components/Header";

const Passengers = () => {
  const { navigateQuery } = usePageRouter();
  const { currentPage } = useGetQueries();
  const regions = useSelector((state: any) => state.regions.regions);

  const { data, isLoading, refetch } = useQuery(
    ["GET_PASSENGER_LIST", currentPage],
    () => {
      return passengerService.getList({ page: currentPage, perPage: 10 });
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
        id: "full_name",
      },
      {
        title: "Viloyat",
        id: "region_name",
      },
      {
        title: "Tel.raqam",
        id: "username",
      },
      {
        title: "Tug‘ilgan sana",
        id: "birthday",
        render: (val?: any) => {
          return <>{FormatTime(val)}</>;
        },
      },
      {
        title: "",
        id: "actions",
        permission: ["edit", "delete"],
      },
    ];
  }, []);

  const bodyColumns = useMemo(() => {
    return passengers?.data ?? [];
  }, [passengers]);

  const handleActions = (status: string, el: any) => {
    if (status === "delete") {
      passengerService.deleteElement(el.id).then(() => {
        refetch();
      });
    }
    if (status === "edit") {
      navigateQuery({ id: el.id });
    }
  };

  const handleSearch = (value: any) => {
    console.log("va", value);
  };

  const Regions = useMemo(() => {
    return regions?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regions]);

  return (
    <>
      <Header title="Yo'lovchilar" />
      <div className="px-6">
        <SectionHeader handleSearch={handleSearch}>
          <div className="flex items-center gap-3">
            <FilterButton text="filter">
              <div>
                <CSelect options={Regions} id="filter" label="Viloyat" />
              </div>
              <CDriver classes="my-4" />
              <div>
                <CSlider />
              </div>
            </FilterButton>

            <AddButton
              text="new_passenger"
              onClick={() => navigateQuery({ id: "create" })}
            />
          </div>
        </SectionHeader>
        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns}
          count={passengers?.meta?.pageCount ?? 5}
          isLoading={isLoading}
          handleActions={handleActions}
          currentPage={currentPage}
        />

        <Form refetch={refetch} />
      </div>
    </>
  );
};

export default Passengers;
