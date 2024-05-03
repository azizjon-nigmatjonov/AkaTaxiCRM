import { useEffect, useMemo, useState } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/UI/Sections/Header";
import FilterButton from "../../../components/UI/Filters";
import { useQuery } from "react-query";
import passengerService from "../../../services/passengers";
import CSelect from "../../../components/CElements/CSelect";
// import CDriver from "../../../components/CElements/CDivider";
// import CSlider from "../../../components/CElements/CSlider";
import { useSelector } from "react-redux";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { FormatTime } from "../../../utils/formatTime";
import { Header } from "../../../components/UI/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import DriversAvater from './DriversAvatar';
import DriversList from "./DriversList";
import ImageFrame from "../../../components/UI/ImageFrame";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import Statistics from "./Statistics";
// import { useSearchParams } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import AddButton from "../../../components/UI/Buttons/AddButton";
import cls from './style.module.scss';
import Filters from "../../../components/UI/Filter";

const Reasons = [
  { value: 0, label: 'Sabablar' }
]

const Status = [
  { value: 'created', label: 'Qidiryapti' },
  { value: 'driver_accepted', label: 'Topildi' },
  { value: 'on-way', label: 'Safarda' },
  { value: 'done', label: 'Yetib bordi' },
  { value: 'canceled_by_driver', label: 'Haydovchi bekor qildi' },
  { value: 'canceled_by_client', label: "Yo'lovchi bekor qildi" },
]

const ActivePassengers = () => {
  const { currentPage, q, region_id,  status} = useGetQueries();
  const { navigateQuery, navigateTo, getQueries } = usePageRouter()
  const query = getQueries()
  const [driverLists, setDriverLists] = useState()
  // const setSearchParams = useSearchParams()[1]
  // const { t } = useTranslation()



  const { data: passengers, isLoading } = useQuery(
    ["GET_ACTIVE_PASSENGERS", q, currentPage, region_id, status],
    () => {
      return passengerService.getActivePassengers({ q, page: currentPage, region_id, status });
    },
    { refetchInterval: 4 * 60 * 1000 }
  );

  const regions = useSelector((state: any) => state.regions.regions);

  const driversHandle = (e: any) => {
    setDriverLists(e);
  }


  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism familya",
        id: "info",
        render: (val: any) => val && (
          <div className="flex items-center space-x-2 py-2">
            <ImageFrame image={val.img} gender={val.gender} />
            <span>{val.name}</span>
          </div>
        )
      },
      {
        title: "Qayerdan",
        id: "from",
        render: (val: any) => val && (
          <p>{val.from_region_name}, {val.from_district_name}</p>
        )
      },
      {
        title: "Qayerga",
        id: "to",
        render: (val: any) => val && (
          <p>{val.to_region_name}, {val.to_district_name}</p>
        )
      },
      {
        title: 'status',
        id: 'status',
        render: (val: any) => val && (
          <>
            <p className={`px-2 py-1 inline-block rounded-2xl ${val == 'created' ? cls.search : val == 'driver_accepted' ? cls.found : val == 'on-way' ? cls.onWay : val == 'done' ? cls.done : val == 'canceled' ? cls.notFound : cls.reject}`}>

              {val == 'created' ? 'Qidiryapti' : val == 'driver_accepted' ? 'Topildi' : val == 'on-way' ? 'Safarda' : val == 'done' ? 'Yetib bordi' : val == 'canceled' ? 'Topilmadi' : val == 'canceled_by_driver' ? 'Haydovchi bekor qildi' : 'Yo’lovchi bekor qildi'}
            </p>
          </>
        )
      },
      {
        title: 'Mavjud taksilar',
        id: 'bids',
        render: (val?: any, item?: any) => val && (
          <DriversAvater data={val} item={item} driversHandle={driversHandle} />
        )
      },
      {
        title: 'Narx',
        id: 'price',
        render: (val: any) => val && (
          <p>{val} so'm</p>
        )
      },
      {
        title: "qidiruv vaqti",
        id: "search_time",
        render: (val?: any) => {
          return FormatTime(val, "time")
        },
      },
    ];
  }, []);


  const bodyColumns: any = useMemo(() => {
    const list = passengers?.data?.map((item: any) => {
      return {
        ...item,
        from: {
          from_region_name: item?.from_region_name,
          from_district_name: item?.from_district_name
        },
        to: {
          to_region_name: item?.to_region_name,
          to_district_name: item?.to_district_name
        },
        info: {
          name: item?.full_name,
          gender: item?.gender,
          img: item?.image
        }
      }
    })


    return (
      {
        list,
        ...passengers,
      } ?? []
    );
  }, [passengers]);


  const Regions = useMemo(() => {
    return regions?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regions]);

  useEffect(() => {
    Regions.unshift({ value: 0, label: 'Barchasi' })
  }, [Regions])

  const handleSearch = (value: any) => {
    navigateQuery({ q: value })
  };

  const handlerStatus = (evt: any) => {
    navigateQuery({ status: evt })
  }

  // const handleBirthday = (evt: any) => {
  //   navigateQuery({ birthday: evt })
  // }


  const breadCrubmsItems = useMemo(() => {
    return [
      {
        label: "Yo'lovchi",
        link: "/passengers/active_passengers"
      },
      {
        label: "Aktiv",
      },
    ]
  }, []);



  return (
    <div>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrubmsItems} type="link" progmatic={true} />
      </Header>
      <div className="px-6">
        <SectionHeader extra={<FilterButton text="filter" />} handleSearch={handleSearch}>
          <div className="flex items-center gap-[14px]">

            {/* <FilterButton text="filter">
              <div >
                <CSelect handlerValue={handleRegion} options={Regions} id="filter" label="Viloyat" />
              </div>
              <CDriver classes="my-4" />
              <div>
                <CSlider handleValue={handleBirthday} />
              </div>
              <span onClick={() => setSearchParams({})} className="text-[var(--main)]  text-end block cursor-pointer mt-3">{t('ignore_text')}</span>
            </FilterButton> */}

            <AddButton text="Buyurtma berish" onClick={() => navigateTo('/passengers/booking')} />
          </div>
        </SectionHeader>

        <Filters filter={!!query?.filter}>
          <div className="w-[500px] flex gap-2">
            <CSelect label="Sabablar" options={Reasons} />
            <CSelect handlerValue={handlerStatus} label="Status" options={Status} />
          </div>
        </Filters>


        <Statistics />

        <div className="pb-5">
          <CTable
            headColumns={headColumns}
            bodyColumns={bodyColumns?.list}
            count={bodyColumns?.meta?.pageCount}
            isResizeble={true}
            isLoading={isLoading}
            currentPage={currentPage}
          />
        </div>
      </div>

      <DriversList data={driverLists} />
    </div>
  );
};

export default ActivePassengers;
