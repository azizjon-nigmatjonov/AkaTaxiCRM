import { useCallback, useMemo, useState } from "react";
import { useQuery } from "react-query";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import CTable from "../../../components/CElements/CTable";
import ImageFrame from "../../../components/UI/ImageFrame";
import driverService from "../../../services/drivers";
import {
  DangerNotification,
  EyeIcon,
} from "../../../components/UI/IconGenerator/Svg";
import CSelect from "../../../components/CElements/CSelect";
import { FilterFunctions } from "../../../components/UI/Filter/Logic";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import { GetTimeFutureBack } from "../../../utils/formatTime";

const options = [
  { value: "new", label: "Yangilar" },
  { value: "middle", label: "O'rtacha" },
  { value: "outdated", label: "Tugagan" },
];
const FotoControl = () => {
  const { navigateTo } = usePageRouter();
  const [filterParams, setFilterParams]: any = useState({});
  const { collectFilter, storeFilters } = FilterFunctions({
    store: true,
    filterParams,
    setFilterParams,
  });

  const { data: fotoControl, isLoading } = useQuery(
    ["FOTO_CONTROL", filterParams],
    () => {
      return driverService.getFotoContols({
        page: filterParams?.page || 1,
        q: filterParams?.q,
        status: filterParams?.status?.value,
        perPage: 10,
      });
    }
  );

  const breadCrumbs = useMemo(() => {
    return [
      { label: "Haydovchi", link: "/drivers/main" },
      { label: "Foto nazorat" },
    ];
  }, []);

  const headColumns = useMemo(() => {
    return [
      {
        title: "",
        id: "index",
      },
      {
        title: "ism familiya",
        id: "userInfo",
        render: (obj: any) => {
          return obj?.full_name ? (
            <div className="flex items-center gap-3">
              <ImageFrame image={obj.image} gender={obj.gender} />
              <div>
                <p>{obj.full_name}</p>
              </div>
            </div>
          ) : (
            ""
          );
        },
      },
      { title: "viloyat", id: "region_name" },
      {
        title: "mashina  raqam",
        id: "carInfo",
        render: (val: any) =>
          val && (
            <div>
              <p>{val.car_name}</p>
              <p className="text-[#858592]">{val.car_number}</p>
            </div>
          ),
      },
      {
        title: "tel.raqam",
        id: "phone",
        render: (val: any) => val && <p>+{val}</p>,
      },
      {
        title: "muddat",
        id: "created_at",
      },
      {
        title: "tugash muddati",
        id: "created_at",
        render: (val: string) => {
          return <>{GetTimeFutureBack(val ?? 0)} kun qoldi</>;
        },
      },
      {
        title: "Status",
        id: "status",
        render: (info: any) => {
          return (
            info !== undefined && (
              <div
                className="cursor-pointer"
                onClick={() => handleActions({ id: info.id })}
              >
                {info === "verified" ? (
                  <EyeIcon fill="var(--black)" />
                ) : info === "created" ? (
                  <DangerNotification />
                ) : (
                  <NotInterestedIcon style={{ color: "var(--error)" }} />
                )}
              </div>
            )
          );
        },
      },
    ];
  }, []);

  const bodyColumns: any = useMemo(() => {
    if (!fotoControl?.data) return [];

    const list: any = fotoControl;

    return {
      list: list.data?.map((val: any) => {
        return {
          ...val,
          carInfo: {
            car_name: val.car_name,
            car_number: val.car_number,
          },
          userInfo: {
            image: val.user_image,
            gender: val.gender,
            full_name: val.full_name,
          },
        };
      }),
      ...list,
    };
  }, [fotoControl]);

  const handleActions = useCallback((element: any) => {
    navigateTo(`/drivers/fotocontrolusers/${element.id}`);
  }, []);

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };

  const handleSearch = (value: any) => {
    collectFilter({ type: "q", val: value });
    handleFilterParams({ ...filterParams, q: value, page: 1 });
  };

  const handleFilter = (type: string, val: any, status?: string) => {
    collectFilter({ type, val, status });
  };

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs
          items={breadCrumbs}
          progmatic={true}
          type="link"
          handleSearch={handleSearch}
          defaultValue={filterParams?.q}
        />
        <div className="w-[200px] ml-5">
          <CSelect
            options={options}
            placeholder="Muddat tanlash"
            value={filterParams?.status?.value}
            handlerValue={(val: any) => handleFilter("status", val)}
          />
        </div>
      </Header>

      <div className="container">
        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns?.list}
          meta={bodyColumns?.meta}
          handleActions={handleActions}
          clickable={true}
          isLoading={isLoading}
          filterParams={filterParams}
          handleFilterParams={handleFilterParams}
        />
      </div>
    </>
  );
};

export default FotoControl;
