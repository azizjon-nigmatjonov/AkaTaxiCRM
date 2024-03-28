import { useEffect, useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import AddButton from "../../../components/Buttons/AddButton";
import FilterButton from "../../../components/Filters";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useQuery } from "react-query";
import passengerService from "../../../services/passengers";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { FormatTime } from "../../../utils/formatTime";
import CSelect from "../../../components/CElements/CSelect";
import CDriver from "../../../components/CElements/CDivider";
import CSlider from "../../../components/CElements/CSlider";
import { useSelector } from "react-redux";
import { Header } from "../../../components/Header";
import ImageFrame from "../../../components/ImageFrame";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";

const Passengers = () => {
  const { navigateQuery, navigateTo } = usePageRouter();
  const { t } = useTranslation()
  const { currentPage, q, region_id, birthday } = useGetQueries();
  const regions = useSelector((state: any) => state.regions.regions);
  const setSearchParams = useSearchParams()[1]
  const { data, isLoading, refetch } = useQuery(
    ["GET_PASSENGER_LIST", currentPage, q, region_id, birthday],
    () => {
      return passengerService.getList({ page: currentPage, perPage: 10, q, region_id, birthday });
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
        render: (val: any) => val && (
          <p>+{val}</p>
        )
      },
      {
        title: 'telegram link',
        id: 'telegram_link'
      },
      // {
      //   title: "Yaratilgan sana",
      //   id: "created_at",
      //   render: (val?: any) => {
      //     return <>{FormatTime(val)}</>;
      //   },
      // },
      {
        title: "Tug‘ilgan sana",
        id: "birthday",
        render: (val?: any) => {
          return <>{FormatTime(val)}</>;
        },
      },
      {
        title: "",
        id: "actions",
        permission: ["learn_more",],
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
            gender: el.gender
          },
        };
      }) ?? []
    );
  }, [passengers]);

  const handleActions = (status: string, el: any) => {
    if (status === "delete") {
      passengerService.deleteElement(el.id).then(() => {
        refetch();
      });
    }
    if (status === "edit") {
      navigateQuery({ id: el.id });

    }
    if (status === "learn_more") {
      navigateTo(`/passengers/passenger?id=${el.id}`)
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

  useEffect(() => {
    Regions.unshift({ value: 0, label: 'Barchasi' })
  }, [Regions])

  const handlerRegion = (evt: any) => {
    navigateQuery({ region_id: evt })
  }

  const handlerAge = (evt: any) => {
    navigateQuery({ birthday: evt })
  }

  const breadCrumbItems = useMemo(() => {
    return [
      {
        label: "Yo'lovchi",
        // link: '/passengers/main'
      },
      {
        label: "Ro‘yxat",
        link: "/passengers/main",
      },

    ];
  }, []);

  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrumbItems} progmatic={true} />
      </Header>
      <div className="px-6 ">
        <SectionHeader handleSearch={handleSearch}>
          <div className="flex items-center gap-3">
            <FilterButton text="filter">
              <div>
                <CSelect handlerValue={handlerRegion} options={Regions} id="filter" label="Viloyat" />
              </div>
              <CDriver classes="my-4" />
              <div>
                <CSlider handleValue={handlerAge} />
              </div>
              <span onClick={() => setSearchParams({})} className="text-[var(--main)]  text-end block cursor-pointer mt-3">{t('ignore_text')}</span>
            </FilterButton>

            <AddButton
              text="new_passenger"
              onClick={() => navigateQuery({ id: "create" })}
            />
          </div>
        </SectionHeader>

        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns}
          count={passengers?.meta?.pageCount ?? 5}
          isLoading={isLoading}
          handleActions={handleActions}
          currentPage={currentPage}
        />

        <Form refetch={refetch} />
      </div>
    </>
  );
};

export default Passengers;
