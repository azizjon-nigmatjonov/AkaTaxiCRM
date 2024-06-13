import { useCallback, useMemo, useState } from "react";
import { useQuery } from "react-query";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import SectionHeader from "../../../components/UI/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import CTable from "../../../components/CElements/CTable";
import ImageFrame from "../../../components/UI/ImageFrame";
// import Date from "./Date"
import driverService from "../../../services/drivers";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { DangerNotification, EyeIcon } from "../../../components/UI/IconGenerator/Svg";
import CSelect from "../../../components/CElements/CSelect";
import { FilterFunctions } from "../../../components/UI/Filter/Logic";

const options = [
  { value: 'new', label: 'Yangilar' },
  { value: 'middle', label: "O'rtacha" },
  { value: 'pre_finish', label: "Tugash muddatida" },
  { value: 'finish', label: "Tugagan" },
]
const FotoControl = () => {
  const { page, start, end } = useGetQueries();
  const { navigateTo } = usePageRouter();
  const [filterParams, setFilterParams]: any = useState({});
  const { collectFilter, storeFilters } = FilterFunctions({ store: true, filterParams, setFilterParams });


  const { data: fotoControl, isLoading } = useQuery(
    ["FOTO_CONTROL", page, filterParams?.q, start, end],
    () => {
      return driverService.getFotoContols({
        page: filterParams?.page,
        q: filterParams?.q,
        perPage: 10,
        create_at: start && end && JSON.stringify([start, end]),
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
        title: '',
        id: 'index',

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
      { title: "muddat", id: "created_at" },
      {
        title: "",
        id: "status",
        render: (val: any) =>
          val && (
            <div className="flex items-center justify-center">
              {val == "created" ? (
                <DangerNotification />
              ) : (
                <EyeIcon fill="var(--gray)" />
              )}
            </div>
          ),
      },
    ];
  }, []);

  const bodyColumns: any = useMemo(() => {
    if (!fotoControl?.data) return [];

    let list: any = fotoControl;

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

  const handleSearch = (value: any) => {
    collectFilter({ type: "q", val: value });
  };

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} type="link" />
      </Header>

      <div className="px-6">
        <SectionHeader handleSearch={handleSearch} defaultValue={filterParams?.q}>
          <div className="w-[240px] bg-red-500">
            <CSelect options={options} />
          </div>
        </SectionHeader>

        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns?.list}
          count={bodyColumns?.meta?.pageCount}
          totalCount={bodyColumns?.meta?.totalCount}
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
