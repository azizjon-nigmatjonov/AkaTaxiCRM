import usePageRouter from "../../../../hooks/useObjectRouter";
import ImageFrame from "../../../../components/UI/ImageFrame";
import { FormatTime } from "../../../../utils/formatTime";
import { useQuery } from "react-query";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import driverService from "../../../../services/drivers";
import { DangerNotification,  EyeIcon} from "../../../../components/UI/IconGenerator/Svg";

export const headColumns = [
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
  },
  {
    title: "Tug‘ilgan sana",
    id: "birthday",
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
    id: "balance",
  },
  {
    title: "Viloyat",
    id: "region_name",
  },
  {
    title: "Hamkor statusi",
  },
  {
    title: "",
    id: "status",
    render: (val: any) => val && (
      <div>
        {val != "Aktiv" ?   <DangerNotification /> : <EyeIcon fill="black"/>}
      </div>
    )
  },
];

export const breadCrubmsItems = [
  { label: "Haydovchilar", link: "/drivers/main" },
  { label: "Ro'yxat" },
];

export const FetchFunctions = () => {
  const { currentPage, q, gender, device_type, start, end, version, region } = useGetQueries();
  const { data: drivers, isLoading: driversLoading, refetch: driversRefetch } = useQuery(
    [
      "GER_DRIVERS_LIST",
      currentPage,
      q,
      gender,
      device_type,
      start,
      end,
      version,
      region,
    ],
    () => {
      return driverService.getList({
        page: currentPage,
        perPage: 10,
        q,
        gender,
        device_type,
        created_at: start && end && JSON.stringify([start, end]),
        version,
        region,
      });
    }
  );


  return { drivers, driversLoading, driversRefetch }

}

export const FilterFunction = () => {
  const { navigateQuery } = usePageRouter();

  const handlerDiviceModel = (evt: any) => {
    navigateQuery({ device_type: evt });
  };

  const handlerVersion = (evt: any) => {
    navigateQuery({ version: evt });
  };

  const handlerGender = (evt: any) => {
    navigateQuery({ gender: evt });
  };

  const handlerRegion = (evt: any) => {
    navigateQuery({ region: evt });
  };


  const handleSearch = (evt: any) => {
    navigateQuery({ q: evt });
  };


  return { handlerDiviceModel, handlerVersion, handlerGender, handlerRegion, handleSearch }
}


