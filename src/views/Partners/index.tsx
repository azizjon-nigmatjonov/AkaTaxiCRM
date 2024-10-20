import { useCallback, useMemo, useState } from "react";
import AddButton from "../../components/UI/Buttons/AddButton";
import CTable from "../../components/CElements/CTable";
// import SectionHeader from "../../components/UI/Sections/Header";
import usePageRouter from "../../hooks/useObjectRouter";
import { useQuery } from "react-query";
import partnerService from "../../services/partners";
import ImageFrame from "../../components/UI/ImageFrame";
import { Header } from "../../components/UI/Header";
import Form from "./Form";
import CBreadcrumbs from "../../components/CElements/CBreadcrumbs";
import { FilterFunctions } from "../../components/UI/Filter/Logic";
import { FilterComponent } from "./Filter";

const Partners = () => {
  const { navigateQuery, navigateTo } = usePageRouter();
  const [filterParams, setFilterParams]: any = useState({});
  const { collectFilter, storeFilters } = FilterFunctions({
    store: true,
    filterParams,
    setFilterParams,
  });

  const {
    data: partnerData,
    isLoading,
    refetch,
  } = useQuery(["GET_PARTNERS"], () => {
    return partnerService.getList();
  });

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };

  const handleSearch = (value: any) => {
    collectFilter({ type: "q", val: value });
    handleFilterParams({ ...filterParams, q: value, page: 1 });
  };

  const partnersInfo: any = useMemo(() => {
    return (
      {
        list: partnerData?.data?.map((i: any) => {
          return {
            ...i,
            company: {
              image: i.image,
              name: i.company_name,
            },
          };
        }),
        ...partnerData,
      } ?? {}
    );
  }, [partnerData]);

  const headColumns = useMemo(() => {
    return [
      {
        title: "tashkilot nomi",
        id: "company",
        render: (val: any) => {
          return (
            val && (
              <div className="flex items-center space-x-2 py-2">
                <ImageFrame image={val?.image} />
                <span>{val?.name}</span>
              </div>
            )
          );
        },
      },
      {
        title: "login",
        id: "login",
      },
      {
        title: "Tel.raqam",
        id: "phone",
      },
      {
        title: "Ism familiya",
        id: "name",
      },
      {
        title: "homiy viloyati",
        id: "region",
      },
      {
        title: "",
        id: "actions",
        actions: ["view", "edit", "delete", "more"],
      },
    ];
  }, []);

  const handleActions = useCallback((element: any, status: string) => {
    if (status === "view") {
      navigateTo(`/partners/partner?id=${element.id}`);
    }

    if (status === "edit") navigateQuery({ id: element.id });

    if (status === "delete") {
      partnerService.deleteElement(element.id);
      refetch();
    }
  }, []);

  const breadCrumbs = useMemo(() => {
    return [{ label: "Hamkorlar", link: "partners/list" }];
  }, []);

  return (
    <>
      <Header>
        <CBreadcrumbs
          items={breadCrumbs}
          progmatic={true}
          handleSearch={handleSearch}
          defaultValue={filterParams?.q}
        />
        <div className="ml-5">
          <AddButton
            text="Yangi hamkor"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </div>
      </Header>
      <div className="container">
        {/* <SectionHeader handleSearch={handleSearch} defaultValue={filterParams?.q}>
          <AddButton
            text="Yangi hamkor"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </SectionHeader> */}

        <FilterComponent
          filterParams={filterParams}
          setFilterParams={setFilterParams}
        />

        <CTable
          headColumns={headColumns}
          bodyColumns={partnersInfo?.list}
          meta={partnersInfo?.meta}
          handleActions={handleActions}
          isLoading={isLoading}
          filterParams={filterParams}
          handleFilterParams={handleFilterParams}
          clickable={true}
        />
      </div>

      <Form refetch={refetch} />
    </>
  );
};

export default Partners;
