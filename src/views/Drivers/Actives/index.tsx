import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import FilterButton from "../../../components/Filters";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useQuery } from "react-query";
import driverService from "../../../services/drivers";
import { useGetQueries } from "../../../hooks/useGetQueries";
import CSlider from "../../../components/CElements/CSlider";
import { Header } from "../../../components/Header";
import { FormatTime } from "../../../utils/formatTime";
import CSelect from "../../../components/CElements/CSelect";
import { useSelector } from "react-redux";
import CDriver from "../../../components/CElements/CDivider";
import carService from '../../../services/cars'

const ActiveDrivers = () => {
  const { navigateQuery } = usePageRouter();
  const { currentPage, q } = useGetQueries();
  const regions = useSelector((state: any) => state.regions.regions)

  const { data: drivers, isLoading } = useQuery(
    ["GET_ACTIVE_DRIVERS", q, currentPage],
    () => {
      return driverService.getActives({ q, page: currentPage });
    }
  );

  const driversData: any = useMemo(() => {
    if (!drivers) return [];
    const list: any = drivers?.data;
    return {
      list: list.map((item: any) => {
        return {
          ...item,
          data: {
            car_name: item.car_name,
            full_name: item.full_name,
            car_number: item.car_number,
          },
        };
      }),
      ...drivers,
    };
  }, [drivers]);

  // console.log(driversData);


  const { data: carModals } = useQuery(['GET_CAR_MODELS'], () => {
    return carService.getCarModel()
  });

  const carModalData: any = useMemo(() => {
    if (!carModals) return [];
    const list = carModals?.data;
    return {
      list: list.map((model: any) => {
        return {
          value: model.id,
          label: model.name
        }
      })
    }
  }, [carModals])

  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism / mashina",
        id: "data",
        render: (obj: any) => {
          return obj?.full_name ? (
            <div className="py-2">
              <p>{obj.full_name}</p>
              <span className="text-[var(--gray)] uppercase">
                {obj.car_name} - {obj.car_number}
              </span>
            </div>
          ) : (
            ""
          );
        },
      },
      {
        title: "Tel.raqam",
        id: "phone",
      },
      {
        title: "Qayerdan",
        id: "from",
      },
      {
        title: "qayerga",
        id: "to",
      },
      // {
      //   title: "qidiruv vaqti",
      //   id: "time_search",
      // },
      {
        title: 'Sayohat turi',
        id: 'search_type'
      },
      {
        title: 'Online vaqti',
        id: 'last_seen',
        render: (val?: any) => {
          return <>{FormatTime(val, "time")}</>;
        },
      }
    ];
  }, []);

  const handleSearch = (evt: any) => {
    navigateQuery({ q: evt });
  };

  const Regions = useMemo(() => {
    return regions?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz
      }
    })
  }, [regions])

  return (
    <>
      <Header title="Aktiv haydovchilar" />
      <div className="p-6">
        <SectionHeader  handleSearch={handleSearch}>
          <div className="flex items-center gap-3">
            <FilterButton  text="filter">
              <div>
                <CSelect options={Regions} id='filter' label='Viloyat' />
              </div>
              <CDriver classes="my-4" />
              <div >
                <CSelect options={[{ value: 'man', label: 'Male' }, { value: 'female', label: 'Female' }]} id='filter' label='Jins' />
              </div>
              <CDriver classes="my-4" />
              <div >
                <CSelect options={carModalData.list} id='filter' label='Model' />
              </div>
              <CDriver classes="my-4" />
              <CSlider label='Yosh' />
            </FilterButton>
          </div>
        </SectionHeader>

        <CTable
          headColumns={headColumns}
          bodyColumns={driversData?.list}
          count={driversData?.meta?.pageCount}
          isLoading={isLoading}
          currentPage={currentPage}
        />
        <Form />
      </div>
    </>
  );
};

export default ActiveDrivers;
