import { useCallback, useMemo } from "react";
import AddButton from "../../../components/UI/Buttons/AddButton";
import FilterButton from "../../../components/UI/Filters";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/UI/Sections/Header";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import driverService from "../../../services/drivers";
import { useQuery } from "react-query";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { FormatTime } from "../../../utils/formatTime";
// import CSlider from "../../../components/CElements/CSlider";
import { Header } from "../../../components/UI/Header";
import ImageFrame from "../../../components/UI/ImageFrame";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
// import { useSearchParams } from "react-router-dom";
// import { useTranslation } from    "react-i18next";
import Filters from "../../../components/UI/Filter";
import DropDown from "../../../components/FormElements/DropDown";
import CSelect from "../../../components/CElements/CSelect";
import { useSelector } from "react-redux";


const Divice = [
  { value: 'ios', label: 'IOS' },
  { value: 'android', label: 'Android' }
]

const Version = [
  { value: 'v 1.1.04', label: 'v 1.1.04' },
  { value: 'v 1.1.03', label: 'v 1.1.03' },
  { value: 'v 1.1.02', label: 'v 1.1.02' },
  { value: 'v 1.1.01', label: 'v 1.1.01' },
]


const Drivers = () => {
  const { navigateQuery, navigateTo, getQueries } = usePageRouter();
  const { currentPage, q, gender, device_type, start, end, version, region } = useGetQueries();
  const query = getQueries()
  // const { getQueries } = usePageRouter();
  // const setSearchParams = useSearchParams()[1]
  const regions = useSelector((state: any) => state.regions.regions);

  // const { t } = useTranslation()


  const { data, isLoading, refetch } = useQuery(
    ["GER_DRIVERS_LIST", currentPage, q, gender, device_type, start, end, version, region],
    () => {
      return driverService.getList({ page: currentPage, perPage: 10, q, gender, device_type, created_at: start && end && JSON.stringify([start, end]), version, region });
    }
  );


  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism familya",
        id: "info",
        render: (val: any) => val && (
          <div className="flex items-center space-x-2 py-2">
            <ImageFrame image={val.image} gender={val.gender} />
            <span>{val.full_name}</span>
          </div>
        ),
      },
      {
        title: "phone_number",
        id: "phone",
        render: (val: any) => val && (
          <p>+{val}</p>
        )
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
        render: (val: any) => val && (
          <p>{val.car}, <span className="block text-[var(--gray)]">{val.number}</span></p>
        )
      },
      {
        title: "Hisob raqami",
        id: "balance",
      },
      // {
      //   title: "Yaratilgan sana",
      //   id: "created_at",
      //   render: (val: any) => {
      //     return <>{FormatTime(val)}</>
      //   }
      // },
      {
        title: 'Viloyat',
        id: 'region_name'
      },
      {
        title: 'Hamkor statusi',

      },
      {
        title: "",
        id: "actions",
        permission: ["view", "edit", "delete"],
      },
    ];
  }, []);

  const handleActions = useCallback((element: any, status: string) => {
    if (status === "view") {
      navigateTo(`/drivers/main/driver?id=${element.id}`);
    }

    if (status === "edit") navigateQuery({ id: element.id });

    if (status === "delete") {
      driverService.deleteElement(element.id).then(() => {
        refetch();
      });
    }
  }, []);

  const drivers: any = useMemo(() => {
    return data ?? {};
  }, [data]);

  

  const bodyColumns = useMemo(() => {
    return (
      drivers?.data?.map((el: any) => {
        return {
          ...el,
          info: {
            full_name: el.full_name,
            image: el?.image,
            gender: el.gender
          },
          car_info: {
            car: el.car_name,
            number: el.car_number
          }
        };
      }) ?? []
    );
  }, [drivers]);

  const Regions = useMemo(() => {
    return regions?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regions]);

  const handleSearch = (evt: any) => {
    navigateQuery({ q: evt })
  };

  const handlerDiviceModel = (evt: any) => {
    navigateQuery({ device_type: evt })
  }


  const handlerVersion = (evt: any) => {
    navigateQuery({ version: evt })
  }

  const handlerGender = (evt: any) => {
    navigateQuery({ gender: evt })
  }

  const handlerRegion = (evt: any) => {
    navigateQuery({ region: evt })
  }

  const breadCrubmsItems = useMemo(() => {
    return [
      { label: "Haydovchilar", link: '/drivers/main' },
      { label: "Ro'yxat", }
      // { label: }
    ]
  }, [])


  return (
    <>
      <Header >
        <CBreadcrumbs items={breadCrubmsItems} progmatic={true} />
      </Header>
      <div className="px-6">
        <SectionHeader extra={<FilterButton text="filter" />} handleSearch={handleSearch}>
          <div className="flex items-center gap-3">
            {/* <FilterButton text="filter"> */}
            {/* <CSlider handleValue={handleAge} /> */}
            {/* <span onClick={() => setSearchParams({})} className="text-[var(--main)]  text-end block cursor-pointer mt-3">{t('ignore_text')}</span> */}
            {/* </FilterButton> */}
            <AddButton
              text="new_driver"
              onClick={() => navigateTo('/drivers/main/add')}
            />
          </div>
        </SectionHeader>

        <Filters filter={!!query.filter}>
          <DropDown label="Vaqt" name="Vaqt" placeholder="Tanlang" defaultValue={'01.01-.01.01'} />
          <CSelect handlerValue={handlerDiviceModel} options={Divice} label="Operatsion sistema" placeholder="Tanglang" />
          <CSelect handlerValue={handlerVersion} options={Version} label="Versiyalar" placeholder="Tanglang" />
          <CSelect handlerValue={handlerGender} options={[{ value: 'm', label: 'Erkak' }, { value: 'f', label: 'Ayol' }]} label="Jinsi" placeholder="Tanlang" />
          <CSelect handlerValue={handlerRegion} options={Regions} label="Viloyat" placeholder="Tanlang" />
        </Filters>

        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns ?? []}
          count={drivers?.meta?.pageCount}
          totalCount={drivers?.meta?.totalCount}
          handleActions={handleActions}
          isLoading={isLoading}
          currentPage={currentPage}
          clickable={true}
        />
        <Form refetch={refetch} />
      </div>
    </>
  );
};

export default Drivers;
