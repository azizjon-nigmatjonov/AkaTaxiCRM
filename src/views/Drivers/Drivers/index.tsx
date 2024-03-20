import { useCallback, useMemo } from "react";
import AddButton from "../../../components/Buttons/AddButton";
import FilterButton from "../../../components/Filters";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import driverService from "../../../services/drivers";
import { useQuery } from "react-query";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { FormatTime } from "../../../utils/formatTime";
import CSlider from "../../../components/CElements/CSlider";
import { Header } from "../../../components/Header";
import ImageFrame from "../../../components/ImageFrame";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";


const Drivers = () => {
  const { navigateQuery, navigateTo } = usePageRouter();
  const { currentPage, q } = useGetQueries();
  // const { getQueries } = usePageRouter();


  const { data, isLoading, refetch } = useQuery(
    ["GER_DRIVERS_LIST", currentPage, q],
    () => {
      return driverService.getList({ page: currentPage, perPage: 10, q });
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
        permission: ["learn_more", "edit", "delete"],
      },
    ];
  }, []);

  const handleActions = useCallback((status: string, element: any) => {
    if (status === "learn_more") {
      navigateTo(`/drivers/driver?id=${element.id}`);
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

  const handleSearch = (evt: any) => {
    navigateQuery({ q: evt })
  };

  const breadCrubmsItems = useMemo(() => {
    return [
      { label: "Haydovchi" },
      { label: "Ro'yxat", link: '/drivers/main' }
      // { label: }
    ]
  }, [])


  return (
    <>
      <Header >
        <CBreadcrumbs items={breadCrubmsItems} progmatic={true} />
      </Header>
      <div className="px-6">
        <SectionHeader handleSearch={handleSearch}>
          <div className="flex items-center gap-3">
            <FilterButton text="filter">
              <CSlider />
            </FilterButton>
            <AddButton
              text="new_driver"
              onClick={() => navigateTo('/drivers/add')}
            />
          </div>
        </SectionHeader>

        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns ?? []}
          count={drivers?.meta?.pageCount}
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
