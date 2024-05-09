import { useCallback, useMemo, useState, useEffect } from "react";
import CTable from "../../../../components/CElements/CTable";
import { useQuery } from "react-query";
import driverService from "../../../../services/drivers";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import carService from "../../../../services/cars";
import { FormatTime } from "../../../../utils/formatTime";
import { Header } from "../../../../components/UI/Header";
import { useParams } from "react-router-dom";
import ImageFrame from "../../../../components/UI/ImageFrame";
import { useDispatch } from "react-redux";
import { websiteActions } from "../../../../store/website";
import usePageRouter from "../../../../hooks/useObjectRouter";
import Form from "./Form";



const tabList = [
  { slug: 1, name: 'Standart' },
  { slug: 2, name: 'Komfort' },
  { slug: 3, name: 'Bisness' }
]

const SingleCar = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { currentPage, page } = useGetQueries();
  const { navigateQuery, navigateTo } = usePageRouter()
  const { currentTab } = useGetQueries();
  const setCarList = useState([])[1];
  const setLoading = useState(false)[1];

  const { data: driversData } = useQuery(
    ["GET_DRIVERS_BY_CAR", id, page],
    () => {
      return driverService.getList({ page: page ?? 1, car_id: id });
    },
    {
      enabled: !!id,
    }
  );

  const tab = useMemo(() => {
    return currentTab ? currentTab : "1";
  }, [currentTab]);

  const getCarList = (tab: string) => {
    setCarList([]);
    setLoading(true);
    carService
      .getList(tab)
      .then((res) => {
        setCarList(res?.data);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (tab) getCarList(tab);
  }, [tab]);

  const { data: carData } = useQuery(
    ["GET_BY_CAR"],
    () => {
      return carService.getElement(id);
    },
    {
      enabled: !!id,
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
            <span>{val.name}</span>
          </div>
        )
      },
      {
        title: "phone_number",
        id: "phone",
      },
      {
        title: "Tug‘ilgan sana",
        id: "birthday",
        render: (val?: any) => {
          return <>{FormatTime(val)}</>;
        },
      },
      {
        title: "mashina raqami",
        id: "car_number",
      },
      {
        title: "status",
        id: "status",
        render: (val: any) => (
          <div
            className={
              val != 'Aktiv' ? "text-[var(--error)]" :
                "text-[var(--green)]"
            }
          >
            {val}
          </div >
        ),
      },
      {
        title: "",
        id: "actions",
        permission: ["edit", "delete", "view", 'd'],
      },
    ];
  }, []);

  const drivers: any = useMemo(() => {
    const lists: any = driversData ?? [];


    return {
      list: lists.data?.map((val: any) => {
        return {
          ...val,
          info: {
            name: val.full_name,
            img: val.image,
            gender: val.gender
          }
        }

      }),
      ...lists,
    }
  }, [driversData]);

  const handleActions = useCallback((element: any, status: any) => {
    if (element === "edit") {
      navigateQuery({ id: status.id })
    } else if (status == 'view') {
      navigateTo(`/drivers/main/driver?id=${element.id}`)
    }
    else {
      driverService.deleteElement(status?.id).then(() => {
        dispatch(
          websiteActions.setAlertData({
            title: "Ma'lumotlar o'chirildi!",
            translation: "common",
            type: 'error'
          })
        );
      })
    }
  }, []);

  const breadCrumbItems = useMemo(() => {
    return [
      {
        label: "Haydovchi ",
        link: "/drivers/main",
      },
      {
        label: 'Mashinalar',
        link: '/drivers/cars'
      },
      {
        label: drivers?.list?.[0]?.car_name ?? "Mashina",
      },
    ];
  }, [carData, driversData]);

  
  // console.log(drivers);
  // console.log(driversData);




  return (
    <>
      <Header><CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" /></Header>
      <div className="px-5">
        {/* <SectionHeader>
          <FilterButton text="filter" />
        </SectionHeader> */}
        <CTable
          headColumns={headColumns}
          bodyColumns={drivers?.list}
          totalCount={drivers?.meta?.totalCount}
          count={drivers?.meta?.pageCount}
          handleActions={handleActions}
          currentPage={currentPage}
        />
        <Form id={id} classes={tabList} tab={tab} getCarList={getCarList} />
      </div>
    </>
  );
};

export default SingleCar;
