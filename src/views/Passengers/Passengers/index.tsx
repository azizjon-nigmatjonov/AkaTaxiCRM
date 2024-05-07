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
import CSelect from "../../../components/CElements/CSelect";
import { useSelector } from "react-redux";
import { Header } from "../../../components/UI/Header";
import ImageFrame from "../../../components/UI/ImageFrame";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import Filters from "../../../components/UI/Filter";
import DropDown from "../../../components/FormElements/DropDown";
import { breadCrumbItems } from "./Logic";

const Divice = [
  { value: "ios", label: "IOS" },
  { value: "android", label: "Android" },
];

const Version = [
  { value: "v 1.1.04", label: "v 1.1.04" },
  { value: "v 1.1.03", label: "v 1.1.03" },
  { value: "v 1.1.02", label: "v 1.1.02" },
  { value: "v 1.1.01", label: "v 1.1.01" },
];

const Passengers = () => {
  const { navigateQuery, navigateTo, getQueries } = usePageRouter();
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
  const regions = useSelector((state: any) => state.regions.regions);
  const query = getQueries();

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
      {
        title: "Keshbek (so'm)",
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
      navigateTo(`/passengers/passenger/${el.id}`);
      // navigateQuery({ passengers: el.id });
    }
  };

  const handleSearch = (value: any) => {
    navigateQuery({ q: value });
  };

  const Regions = useMemo(() => {
    return regions?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regions]);

  const handlerRegion = (evt: any) => {
    navigateQuery({ region_id: evt });
  };

  const handlerDiviceModel = (evt: any) => {
    navigateQuery({ device_type: evt });
  };

  const handlerVersion = (evt: any) => {
    navigateQuery({ version: evt });
  };

  const handlerGender = (evt: any) => {
    navigateQuery({ gender: evt });
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

        <Filters filter={!!query.filter}>
          <DropDown
            label="Vaqt"
            name="Vaqt"
            placeholder="Tanlang"
            defaultValue={"01.01-.01.01"}
          />
          <CSelect
            handlerValue={handlerDiviceModel}
            options={Divice}
            label="Operatsion sistema"
            placeholder="Tanglang"
          />
          <CSelect
            handlerValue={handlerVersion}
            options={Version}
            label="Versiyalar"
            placeholder="Tanglang"
          />
          <CSelect
            handlerValue={handlerGender}
            options={[
              { value: "m", label: "Erkak" },
              { value: "f", label: "Ayol" },
            ]}
            label="Jinsi"
            placeholder="Tanlang"
          />
          <CSelect
            handlerValue={handlerRegion}
            options={Regions}
            label="Viloyat"
            placeholder="Tanlang"
          />
        </Filters>

        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns}
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
