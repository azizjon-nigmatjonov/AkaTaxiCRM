import { useEffect, useMemo, useState } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import FilterButton from "../../../components/Filters";
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
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import Places from "../../../components/Places";
import PassengerList from "./PassengerList";
import ImageFrame from "../../../components/ImageFrame";
import LTabs from "../../../components/CElements/CTab/LineTab";

const tabList = [
  { slug: '', name: 'Aktiv' },
  { slug: 'on-way', name: "Yo'lda" },
  { slug: 'canceled', name: 'Bekor qilingan' },
  { slug: 'done', name: 'Yetib borgan' }
]


const ActiveDrivers = () => {
  const [passenger, setPassenger] = useState([])
  const { t } = useTranslation()
  const { navigateQuery } = usePageRouter();
  const setSearchParams = useSearchParams()[1]
  const { currentPage, q, gender, region_id, f, car_model_id, status } = useGetQueries();

  const regions = useSelector((state: any) => state.regions.regions);

  const { data: drivers, isLoading } = useQuery(
    ["GET_ACTIVE_DRIVERS", q, gender, region_id, f, car_model_id, currentPage, status],
    () => {
      return driverService.getActives({ q, gender, region_id, f, car_model_id, page: currentPage, status });
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
            phone: item.phone,
            full_name: item.full_name,
            gender: item.gender,
            image: item.image
          },
          carInfo: {
            car_name: item.car_name,
            car_number: item.car_number
          }
        };
      }),
      ...drivers,
    };
  }, [drivers]);

  const { data: carModals } = useQuery(['GET_CAR_MODELS'], () => {
    return carService.getCarModel();
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

  const passengerList = (e: any) => {
    setPassenger(e)
  }


  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism Familiya",
        id: "data",
        render: (obj: any) => {
          return obj?.full_name ? (
            <div className="flex items-center gap-3">
              <ImageFrame image={obj.image} gender={obj.gender} />
              <div>
                <p>{obj.full_name}</p>
                <span className="text-[var(--gray)] uppercase">
                  +{obj.phone}
                </span>
              </div>
            </div>
          ) : (
            ""
          );
        },
      },
      {
        title: "Qayerdan",
        id: "from_region_name",
      },
      {
        title: "qayerga",
        id: "to",
      },
      {
        title: 'Sayohat turi',
        id: 'search_type'
      },
      {
        title: 'Online vaqti',
        id: 'created_at',
        render: (val?: any) => {
          return <>{FormatTime(val, "time")}</>;
        },
      },
      {
        title: 'Raqam',
        id: 'carInfo',
        render: (val: any) => val && (
          <div>
            <p className="text-[var(--black)]">{val.car_name}</p>
            <p className="text-[var(--gray)]  text-xs">{val.car_number}</p>
          </div>
        )
      },
      {
        id: 'places',
        render: (val: any, items: any) => val && (
          <Places data={val} item={items} clickHandle={passengerList} />
        )
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
        label: i.name.uz,
      }
    })
  }, [regions])


  const handleRegion = (evt: any) => {
    navigateQuery({ region_id: evt })

  }

  const handleGender = (evt: any) => {
    navigateQuery({ gender: evt })
  }

  const handleCarModel = (evt: any) => {
    navigateQuery({ car_model_id: evt })
  }

  const handleAge = (evt: any) => {
    navigateQuery({ birthday: [...evt] })
  }

  const breadCrumbs = useMemo(() => {
    return [
      { label: "Haydovchi" },
      { label: "Aktiv", link: '/drivers/active' }
    ]
  }, [])

  useEffect(() => {
    Regions.unshift({ value: 0, label: 'Barchasi' })
    carModalData?.list?.unshift({ value: 0, label: 'Barchasi' })
  }, [Regions])

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
      </Header>
      <div className="p-6">
        <SectionHeader handleSearch={handleSearch}>
          <div className="flex items-center gap-3">
            <FilterButton text="filter">
              <div>
                <CSelect handlerValue={handleRegion} options={Regions} id='filter' label='Viloyat' />
              </div>
              <CDriver classes="my-4" />
              <div >
                <CSelect handlerValue={handleGender} options={[{ value: 'barchasi', label: 'Barchasi' },{ value: 'm', label: 'Male' }, { value: 'f', label: 'Female' }]} id='filter' label='Jins' />
              </div>
              <CDriver classes="my-4" />
              <div >
                <CSelect handlerValue={handleCarModel} options={carModalData.list} id='filter' label='Model' />
              </div>
              <CDriver classes="my-4" />
              <CSlider handleValue={handleAge} label="Tug'ilgan yili" />
              <CDriver classes="my-4" />
              <span onClick={() => setSearchParams({})} className="text-[var(--main)]  text-end block cursor-pointer ">{t('ignore_text')}</span>
            </FilterButton>
          </div>
        </SectionHeader>

        <LTabs tabList={tabList} />

        <CTable
          headColumns={headColumns}
          bodyColumns={driversData?.list}
          count={driversData?.meta?.pageCount}
          isLoading={isLoading}
          currentPage={currentPage}
        />

        <PassengerList data={passenger} />
      </div>
    </>
  );
};

export default ActiveDrivers;
